import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { fetchProductsByFilters } from "../features/product/productAPI";

const ProductSection = () => {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetchProductsByFilters();
      if (result.data.products) {
        // Only set the first 6 products
        setProduct(result.data.products.slice(0, 6));
      }
    };
    fetchProducts();
    return () => {
      setProduct([]);
    };
  }, []);

  const handleAddToCart = (e, product, skipPropagation = false) => {
    if (e && !skipPropagation) {
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
    if (e && !skipPropagation) {
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

  return (
    <div className="bg-[fffff] py-12 sm:py-16 px-4 font-outfit">
      <div className="container mx-auto">

        <h2 className="text-[#9C4A1A] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-16">
          Our Products
        </h2>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-8 sm:mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 relative"
            >
              <div className="flex flex-col h-full">
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                />

                <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-white text-base sm:text-lg font-semibold">
                    <span className="line-through text-sm mr-2 opacity-70">₹{product.price}</span>
                    ₹{product.discountPrice}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-[#C65D34] text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base hover:bg-[#B54D24] transition duration-300"
                    onClick={(e) => handleBuyNow(e, product)}
                    aria-label="Buy now"
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

        <div className="flex justify-center mt-8">
          <Link to="/view-all-products">
            <button className="bg-[#E6A06C] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-full text-base sm:text-xl font-medium hover:bg-[#D99058] transition duration-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;