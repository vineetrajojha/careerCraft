import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';


const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
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
    // Check if we're returning from login page with items to add
    if (location.state?.addToCart && user) {
      handleAddToCart(null, location.state.addToCart, true);
      
      // Clear the state to prevent duplicate actions
      navigate(location.pathname, { replace: true, state: {} });
    } 
    else if (location.state?.buyNow && user) {
      handleBuyNow(null, location.state.buyNow, true);
      
      // Clear the state to prevent duplicate actions
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [user, location.state]);

  const products = [
    {
      id: 1,
      image: "/products/adobe.png", // https://i.postimg.cc/KkYCbJ3y/PHOTO-2025-03-16-16-00-24.jpg
      title: "Adobe Alchemy: Turn Images into Art with Photoshop",
      description: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools. ",
      fullDescription: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools. Learn photo retouching, graphic creation, and advanced editing techniques from expert mentors. Perfect for students and professionals looking to enhance their creative expertise.",
      productDetails: [
        "What Can You Expect from the Adobe Alchemy: Turn Images into Art with Photoshop Workshop?",
        "Master the art of digital editing and design with industry-leading tools and expert guidance.",
        "1. Photo Retouching Mastery – Learn professional techniques to enhance and refine images.",
        "2.	Graphic Creation & Design – Develop eye-catching visuals using Photoshop’s powerful features.",
        "3.	Advanced Editing Techniques – Explore layers, masks, filters, and effects to elevate your designs.",
        "4.	Hands-On Learning – Gain practical experience through real-world projects and expert mentorship."
      ],
      whyEnroll: [
        "1.	Industry-Relevant Skills – Learn in-demand Photoshop techniques used by professionals.",
        "2.	Boost Creativity & Career Prospects – Enhance your portfolio and open doors to creative opportunities.",
        "3.	Expert-Led Training – Learn from seasoned designers with real-world experience.",
        "4.	Applicable Across Fields – Perfect for photographers, marketers, content creators, and designers.",
        "5.	Practical & Actionable Knowledge – Walk away with skills you can immediately apply.",
        "Take your creativity to the next level—transform images into art with Photoshop!"
      ],
      price: "₹11,499"
    },
    {
      id: 2,
      image: "/products/The-Entrepreneur-Playbook.png",
      title: "The Entrepreneur’s Playbook: Mastering Business Creation and Growth",
      description: "A comprehensive workshop designed to guide aspiring entrepreneurs through the fundamentals of building and scaling a successful business.",
      fullDescription: "A comprehensive workshop designed to guide aspiring entrepreneurs through the fundamentals of building and scaling a successful business. Learn essential strategies for market research, business modeling, funding, and growth from industry experts. Perfect for students and professionals looking to turn ideas into thriving ventures.",
      productDetails: [
        "What Can You Expect from The Entrepreneur’s Playbook: Mastering Business Creation and Growth Workshop?",
        "Gain the knowledge and skills needed to build, launch, and scale a successful business with expert guidance.",
        "1.	Market Research & Opportunity Identification – Learn how to analyze markets and uncover profitable business opportunities.",
        "2.	Business Modeling & Strategy – Develop a solid business plan with proven frameworks for long-term success.",
        "3.	Funding & Investment Insights – Understand funding options, pitching strategies, and securing investors.",
        "4.	Growth & Scalability Tactics – Master strategies to expand your business and achieve sustainable growth."
      ],
      whyEnroll: [
        "1.	Turn Ideas into Reality – Learn how to transform your vision into a thriving business.",
        "2.	Expert-Led Training – Gain insights from industry leaders and successful entrepreneurs.",
        "3.	Real-World Applications – Apply proven strategies to launch and scale your venture.",
        "4.	Valuable Networking Opportunities – Connect with like-minded entrepreneurs and mentors.",
        "5.	Practical & Actionable Knowledge – Walk away with strategies you can implement immediately.",
        "Take the first step toward building your dream business—enroll now!"
      ],
      price: "₹11,499"
    },
    {
      id: 3,
      image: "/products/the-influencer-playbook.png",
      title: "The Influencer’s Playbook: Build, Brand, and Influence",
      description: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work. ",
      fullDescription: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work. Learn from industry experts how to create impactful content, grow your online presence, and turn creativity into influence. Ideal for aspiring creators and professionals looking to stand out in the digital world.",
      productDetails: [
        "What Can You Expect from The Influencer’s Playbook: Build, Brand, and Influence Workshop?",
        "Master the art of content creation, audience engagement, and personal branding to grow your influence online.",
        "1.	Brand Building & Positioning – Learn how to craft a unique personal brand that stands out.",
        "2.	Content Creation Strategies – Develop high-impact content that resonates with your audience.",
        "3.	Audience Growth & Engagement – Master social media strategies to expand your reach and build a loyal community.",
        "4.	Monetization & Revenue Streams – Discover ways to turn your influence into income through sponsorships, collaborations, and digital products."
      ],
      whyEnroll: [
        "1.	Build a Strong Personal Brand – Establish credibility and authority in your niche.",
        "2.	Master Social Media Growth – Learn proven strategies to gain followers and boost engagement.",
        "3.	Learn from Industry Experts – Gain insights from top influencers and digital marketing professionals.",
        "4.	Monetize Your Content – Explore multiple revenue streams and transform your passion into profit.",
        "5.	Practical & Actionable Takeaways – Walk away with strategies you can apply immediately."
        
      ],
      price: "₹11,499"
    },
    {
      id: 4,
      image: "/products/data-science.png",
      title: "Data Science 360: A Complete Journey into Data-Driven Excellence",
      description: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry experts.",
      fullDescription: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry experts. Perfect for students and professionals looking to build a strong foundation in data-driven decision-making.",
      productDetails: [
        "What Can You Expect from Data Science 360: A Complete Journey into Data-Driven Excellence Workshop?",
        "Gain a comprehensive understanding of data science, from fundamental concepts to advanced techniques, with expert-led training.",
        "1.	Data Analysis & Processing – Learn how to clean, organize, and analyze data for valuable insights.",
        "2.	Machine Learning Fundamentals – Understand key ML concepts and how to apply them to real-world problems.",
        "3.	Data Visualization Techniques – Master tools and methods to present data in meaningful ways.",
        "4.	Practical Hands-On Projects – Work on real datasets to apply your learning and build a strong portfolio."
      ],
      whyEnroll: [
        "1.	Build a Strong Data Science Foundation – Learn essential skills for a career in data-driven industries.",
        "2.	Stay Ahead in a Data-Centric World – Gain expertise in one of the most in-demand fields today.",
        "3.	Expert-Led Training – Learn from experienced data scientists and industry professionals.",
        "4.	Hands-On Learning Approach – Apply concepts through practical exercises and projects",
        "5.	Versatile Career Opportunities – Open doors to roles in analytics, AI, business intelligence, and more.",
        "Unlock the power of data—start your journey into data science today!"
        
      ],
      price: "₹8,499"
    },
    {
      id: 5,
      image: "/products/intelligent-AI-app-and-web.png",
      title: "Intelligent Creation: Master AI-Driven App and Web Development",
      description: "Explore the power of AI in app and web development with this expert-led workshop.",
      fullDescription: "Explore the power of AI in app and web development with this expert-led workshop. Learn how to integrate AI tools, enhance functionality, and build intelligent digital solutions. Ideal for developers, students, and tech enthusiasts looking to stay ahead in the ever-evolving tech landscape.",
      productDetails: [
        "What Can You Expect from Intelligent Creation: Master AI-Driven App and Web Development Workshop?",
        "Learn how to integrate AI into app and web development to create smarter, more efficient digital solutions.",
        "1.	AI-Powered Development – Discover how to enhance apps and websites with AI-driven features.",
        "2.	Automation & Smart Functionality – Learn to optimize performance and streamline processes using AI tools.",
        "3.	Real-World Applications – Explore case studies and hands-on projects to apply AI in development.",
        "4.	Cutting-Edge Tools & Frameworks – Get hands-on experience with industry-leading AI technologies."
      ],
      whyEnroll: [
        "1.	Stay Ahead in Tech Innovation – Master AI integration and future-proof your development skills.",
        "2.	Boost Career Opportunities – Gain expertise in one of the most sought-after fields in tech.",
        "3.	Expert-Led Learning – Learn from experienced developers and AI professionals.",
        "4.	Hands-On, Practical Approach – Work on real projects to apply AI-driven development techniques.",
        "5.	Versatile Skill Set – Ideal for developers, students, and tech enthusiasts looking to build next-gen applications.",
        "Transform the way you develop—unlock the potential of AI in app and web development today!"
        
      ],
      price: "₹11,499"
    },
    {
      id: 6,
      image: "/products/Prompting-with-Precision.png",
      title: "Prompting with Precision: A Complete Guide to AI Communication",
      description: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for content creation and automation.",
      fullDescription: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for content creation and automation. Perfect for professionals, creators, and tech enthusiasts eager to leverage AI to its full potential.",
      productDetails: [
        "What Can You Expect from Prompting with Precision: A Complete Guide to AI Communication Workshop?",
        "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "1.	Prompt Engineering Fundamentals – Understand how to structure prompts to get accurate and relevant AI responses.",
        "2.	Response Optimization Techniques – Learn how to refine AI-generated outputs for better efficiency and accuracy.",
        "3.	AI for Content Creation – Explore how AI can enhance writing, brainstorming, and creative workflows.",
        "4.	Automation & Productivity Boost – Leverage AI tools to streamline tasks and improve efficiency."
      ],
      whyEnroll: [
        "1.	Enhance AI Interaction Skills – Learn to communicate effectively with AI for various applications.",
        "2.	Boost Career & Creativity – Use AI to generate ideas, automate tasks, and enhance productivity.",
        "3.	Expert-Led Training – Gain insights from industry professionals in AI and automation.",
        "4.	Hands-On Learning – Apply techniques through real-world AI-driven exercises.",
        "5.	Versatile Skill Set – Ideal for professionals, creators, and tech enthusiasts across industries.",
        "Unlock the full potential of AI—learn the science of effective prompting today!"
        
      ],
      price: "₹8,499"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Handle adding product to cart
  const handleAddToCart = (e, product, skipPropagation = false) => {
    if (e && !skipPropagation) {
      e.stopPropagation(); // Prevent triggering the card click event
    }
    
    if (!user) {
      // If user is not logged in, redirect to login page
      toast.info("Please login to add items to your cart");
      navigate('/login', { 
        state: { 
          from: location.pathname, 
          addToCart: product 
        } 
      });
    } else {
      try {
        // If user is logged in, add the item to cart
        dispatch(addToCartAsync({ 
          product: product.id, 
          quantity: 1,
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

  // Handle buy now button click
  const handleBuyNow = (e, product, skipPropagation = false) => {
    if (e && !skipPropagation) {
      e.stopPropagation(); // Prevent triggering the card click event
    }
    
    if (!user) {
      // If user is not logged in, redirect to login page
      toast.info("Please login to purchase this item");
      navigate('/login', { 
        state: { 
          from: location.pathname,
          buyNow: product 
        } 
      });
    } else {
      try {
        // If user is logged in, add to cart and redirect to checkout
        dispatch(addToCartAsync({ 
          product: product.id, 
          quantity: 1 
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
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                />
                {product.tag && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white font-medium text-xs sm:text-sm">
                    {product.tag}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 w-12 h-1 bg-yellow-300 rounded-full"></div>

                <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <p className="text-white text-sm sm:text-base font-semibold">
                  {product.price}
                </p>

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
                      {selectedProduct.price}
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