import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/KkYCbJ3y/PHOTO-2025-03-16-16-00-24.jpg",
      title: "The Masterclass: AI for Professionals Workshop",
      description: "Elevate your career with our expert-led Career Craft Course Bundle, designed to help you succeed in today's competitive world.",
      fullDescription: "Master personal finance to secure your future, digital marketing to boost your career, and AI prompts & automation to stay ahead in the evolving job market. Prepare for GDPI (Group Discussion & Personal Interview) with personalized coaching and learn stock market investment to grow your wealth.",
      productDetails: [
        "Hands-On AI Integration – Learn to incorporate AI tools into your daily tasks for efficiency.",
        "Automation & Productivity Boost – Master AI-driven automation to save time and optimize performance.",
        "Data-Driven Decision Making – Use AI insights to enhance business strategies and professional growth.",
        "Real-World Applications – Explore AI's impact across industries with practical case studies."
      ],
      whyEnroll: [
        "Stay Ahead of the Curve – Gain essential AI skills to remain competitive in the evolving job market.",
        "Boost Career Prospects – Leverage AI to work smarter and improve job efficiency.",
        "Expert-Led Training – Learn from industry professionals with real-world experience.",
        "Versatile Skill Set – Applicable across multiple fields, from marketing to finance and operations.",
        "Practical & Actionable Insights – Walk away with AI strategies you can implement immediately."
      ],
      price: "$499"
    },
    {
      id: 2,
      image: "https://i.postimg.cc/RFTr3nRH/r.jpg",
      title: "Prompting with Precision: A Complete Guide to AI Communication",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      // tag: "ATTEND TRIAL WORKSHOP"
    },
    {
      id: 3,
      image: "https://i.postimg.cc/SKM09hT0/trial.jpg",
      title: "Market Mavericks: Learn, Trade, and Thrive",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      // tag: "ATTEND TRIAL WORKSHOP"
    },
    {
      id: 4,
      image: "https://i.postimg.cc/SKM09hT0/trial.jpg",
      title: "Foreign language: Learn German and French ,A1",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      tag: "ATTEND TRIAL WORKSHOP"
    },
    {
      id: 5,
      image: "https://i.postimg.cc/SKM09hT0/trial.jpg",
      title: "Adobe Alchemy: Turn Images into Art with Photoshop",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      tag: "ATTEND TRIAL WORKSHOP"
    },
    {
      id: 6,
      image: "https://i.postimg.cc/SKM09hT0/trial.jpg",
      title: "The Entrepreneur's Playbook: Mastering Business Creation and Growth",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      tag: "ATTEND TRIAL WORKSHOP"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
              className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white font-medium text-xs sm:text-sm">
                  {product.tag}
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-1 bg-yellow-300 rounded-full"></div>

                <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4">
                  {product.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-[#C65D34] text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base hover:bg-[#B54D24] transition duration-300"
                  >
                    Buy now
                  </button>
                  <div className="text-white">
                    <FaShoppingCart size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#E6A06C] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-full text-base sm:text-xl font-medium hover:bg-[#D99058] transition duration-300">
            View All
          </button>
        </div>

        {/* Detailed Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4">
            <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-4xl relative">
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-[#9C4A1A] mb-4">
                    {selectedProduct.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.fullDescription}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-[#C65D34]">
                      {selectedProduct.price}
                    </span>
                    <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition duration-300">
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
    </div>
  );
};

export default ProductSection;
