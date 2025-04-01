import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import Navbar from '../features/common/Navbar';
import Footer from '../features/common/Footer';
import { fetchProductsByFilters } from '../features/product/productAPI';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../features/cart/cartSlice'; // Make sure to import this

const ViewAllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProduct] = useState([]);

  const handleAddToCart = (e, product, skipPropagation = false) => {
    // Always stop propagation to prevent modal from opening
    if (e) {
      e.stopPropagation();
    }

    console.log(`Adding to cart: ${product.title}, Price: ₹${product.discountPrice}`);

    if (!user) {
      toast.info("Please login to add items to your cart");
      navigate('/login', {
        state: {
          from: location.pathname,
          addToCart: product
        }
      });
    } else {
      try {
        dispatch(addToCartAsync({
          item: {
            product: product.id,
            quantity: 1,
          },
          alert: toast
        })).unwrap()
          .then(() => {
            toast.success(`${product.title} added to cart!`);
          })
          .catch((error) => {
            console.error('Failed to add to cart:', error);
            toast.error("Failed to add item to cart. Please try again.");
          });
      } catch (error) {
        console.error('Error dispatching addToCartAsync:', error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const handleBuyNow = (e, product, skipPropagation = false) => {
    // Always stop propagation to prevent modal from opening
    if (e) {
      e.stopPropagation();
    }

    console.log(`Buying now: ${product.title}, Price: ₹${product.discountPrice}`);

    if (!user) {
      toast.info("Please login to purchase this item");
      navigate('/login', {
        state: {
          from: location.pathname,
          buyNow: product
        }
      });
    } else {
      try {
        dispatch(addToCartAsync({
          item: {
            product: product.id,
            quantity: 1
          },
          alert: toast
        })).unwrap()
          .then(() => {
            navigate('/checkout');
          })
          .catch((error) => {
            console.error('Failed to process purchase:', error);
            toast.error("Failed to process your purchase. Please try again.");
          });
      } catch (error) {
        console.error('Error during buy now:', error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetchProductsByFilters();
      if (result.data.products) {
        setProduct(result.data.products);
      }
    };
    fetchProducts();
    return () => {
      setProduct([]);
    };
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Process any pending cart actions after login
  useEffect(() => {
    if (location.state?.addToCart && user) {
      handleAddToCart(null, location.state.addToCart, true);
      navigate(location.pathname, { replace: true, state: {} });
    } 
    else if (location.state?.buyNow && user) {
      handleBuyNow(null, location.state.buyNow, true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [user, location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-outfit">
      <Navbar />

      <main className="py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#9C4A1A] mb-12">All Workshops</h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="flex flex-col h-full">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                  />

                  <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4">
                    {product.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#C65D34] text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base hover:bg-[#B54D24] transition duration-300"
                      onClick={(e) => handleBuyNow(e, product)}
                    >
                      Buy now
                    </button>
                    <button
                      className="text-white p-2 rounded-full hover:bg-[#C65D34] hover:text-yellow-200 transition duration-300 flex items-center justify-center"
                      onClick={(e) => handleAddToCart(e, product)}
                      aria-label="Add to cart"
                    >
                      <FaShoppingCart size={20} className="sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4">
              <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-4xl max-h-[98vh] relative">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
                >
                  <FaTimes size={24} />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <img
                      src={selectedProduct.image || selectedProduct.thumbnail}
                      alt={selectedProduct.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-[#9C4A1A] mb-4">
                      {selectedProduct.title}
                    </h2>

                    <p className="text-gray-700 mb-6">
                      {selectedProduct.fullDescription || selectedProduct.description}
                    </p>

                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-[#C65D34]">
                        ₹{selectedProduct.discountPrice || selectedProduct.price}
                      </span>
                      <button 
                        className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                        onClick={(e) => handleBuyNow(e, selectedProduct)}
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gray-50 rounded-b-3xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                      Product Details:
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.productDetails?.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#C65D34] mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                      Why Enroll in This Workshop?
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.whyEnroll?.map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#C65D34] mr-2">•</span>
                          <span className="text-gray-700">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ViewAllProducts;