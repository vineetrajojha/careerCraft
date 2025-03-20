import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaShoppingCart } from 'react-icons/fa';


const ProductSection = () => {
  const [expanded, setExpanded] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/KkYCbJ3y/PHOTO-2025-03-16-16-00-24.jpg",
      title: "Intelligent Creation: Master AI-Driven App and Web Development",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      // tag: "ATTEND TRIAL WORKSHOP"
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
      title: "The Entrepreneur’s Playbook: Mastering Business Creation and Growth",
      description: "lorem ipsum data fetch azure loren ipsum data fetch azure",
      tag: "ATTEND TRIAL WORKSHOP"
    }
  ];

  const handleProductClick = (productId) => {
    setExpanded(productId);
  };

  const closeAccordion = () => {
    setExpanded(null);
  };

  return (
    <div className="bg-white py-16 px-4 font-outfit">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[#9C4A1A] md:text-5xl text-4xl font-extrabold text-center mb-16">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E6A06C] rounded-3xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Product Card Content */}
              <div className="flex flex-col h-full">
                {/* Image Container */}
                
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100% h-auto object-fit rounded-xl"
                  />
                  <div className="absolute top-4 right-4 text-white font-medium text-sm">
                    {product.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-1 bg-yellow-300 rounded-full"></div>
                

                {/* Product Info */}
                <h3 className="text-2xl mt-4 font-bold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-white mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Button and Cart */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="bg-[#C65D34] text-white px-8 py-2 rounded-full hover:bg-[#B54D24] transition duration-300"
                  >
                    buy now
                  </button>
                  <div className="text-white">
                    <FaShoppingCart size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-[#E6A06C] text-white px-12 py-3 rounded-full text-xl font-medium hover:bg-[#D99058] transition duration-300">
            View All
          </button>
        </div>

        {/* Login Popup */}
        {expanded && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
              <Accordion expanded={true} onChange={closeAccordion} className="w-full">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${expanded}-content`}
                  id={`panel${expanded}-header`}
                  className="bg-[#F4A460]"
                >
                  <p className="text-white font-bold">
                    Please Log In to View Product
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-gray-600 font-medium">
                    You must be logged in to view the product details or purchase this item.
                    Please log in to continue.
                  </p>
                </AccordionDetails>
              </Accordion>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  className="bg-[#C65D34] text-white px-6 py-2 rounded-full hover:bg-[#B54D24]"
                  onClick={closeAccordion}
                >
                  Close
                </button>
                <Link to="/login">
                  <button className="bg-[#E6A06C] text-white px-6 py-2 rounded-full hover:bg-[#D99058]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
