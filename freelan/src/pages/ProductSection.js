import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  // Close modal when ESC key is pressed
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

  const products = [
    {
      id: 1,
      thumbnail: "/products/adobe.png",
      title: "Adobe Alchemy: Turn Images into Art with Photoshop",
      description: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools.",
      discountPrice: 11499,
      price: 14999,
      brand: "Adobe Workshop",
      image: "/products/adobe.png"
    },
    {
      id: 2,
      description: "Elevate your career with our expert-led Career Craft Course Bundle, designed to help you succeed in today's competitive world. Master personal finance to secure your fut...",
      discountPrice: 8499,
      price: 11999,
      thumbnail: "/products/AI-for-professionals.png", 
      title: "AI for professionals",
      brand: "AI for professionals Workshop",
      image: "/products/ai-for-professionals.png"
    },
    {
      id: 3,
      thumbnail: "/products/the-influencer-playbook.png",
      title: "The Influencer's Playbook: Build, Brand, and Influence",
      description: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work.",
      discountPrice: 11499,
      price: 14999,
      brand: "Influencer Marketing Workshop",
      image: "/products/the-influencer-playbook.png"
    },
    {
      id: 4,
      thumbnail: "/products/data-science.png",
      title: "Data Science 360: A Complete Journey into Data-Driven Excellence",
      description: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry experts.",
      discountPrice: 8499,
      price: 11999,
      brand: "Data Science Workshop",
      image: "/products/data-science.png"
    },
    {
      id: 5,
      thumbnail: "/products/intelligent-AI-app-and-web.png",
      title: "Intelligent Creation: Master AI-Driven App and Web Development",
      description: "Explore the power of AI in app and web development with this expert-led workshop.",
      discountPrice: 11499,
      price: 14999,
      brand: "AI Development Workshop",
      image: "/products/intelligent-AI-app-and-web.png"
    },
    {
      id: 6,
      thumbnail: "/products/Prompting-with-Precision.png",
      title: "Prompting with Precision: A Complete Guide to AI Communication",
      description: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for content creation and automation.",
      discountPrice: 8499,
      price: 11999,
      brand: "AI Communication Workshop",
      image: "/products/Prompting-with-Precision.png"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

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
            product: product, 
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
            product: product, 
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
    <div className="bg-white py-12 sm:py-16 px-4 font-outfit">
      <div className="container mx-auto">
        <h2 className="text-[#9C4A1A] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-16">
          Our Products
        </h2>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-8 sm:mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer relative"
              onClick={() => handleProductClick(product)}
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

        {/* Detailed Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4"
               onClick={closeModal}>
            <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-4xl max-h-[98vh] relative"
                 onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 p-2 bg-white bg-opacity-75 rounded-full z-10"
                aria-label="Close"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-auto rounded-2xl object-contain max-h-80"
                  />
                </div>
                
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-[#9C4A1A] mb-4">
                    {selectedProduct.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.fullDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-auto">
                    <span className="text-2xl font-bold text-[#C65D34]">
                      ₹{selectedProduct.price}
                    </span>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <button 
                        onClick={(e) => handleBuyNow(e, selectedProduct)}
                        className="bg-[#C65D34] text-white px-8 py-2 rounded-full hover:bg-[#B54D24] transition duration-300 w-full sm:w-auto flex-1 sm:flex-none"
                      >
                        Buy now
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, selectedProduct)}
                        className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                        aria-label="Add to cart"
                      >
                        <FaShoppingCart size={20} className="text-[#C65D34]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-b-3xl overflow-y-auto" style={{maxHeight: "50vh"}}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                    Product Details:
                  </h3>
                  <ul className="space-y-3">
                    {selectedProduct.productDetails?.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#C65D34] mr-2 mt-1 flex-shrink-0">•</span>
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
                        <span className="text-[#C65D34] mr-2 mt-1 flex-shrink-0">•</span>
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
    </div>
  );
};

export default ProductSection;