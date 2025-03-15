import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductSection = () => {
  const [expanded, setExpanded] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/SKM09hT0/trial.jpg",
      title: "Trial Product",
      price: 1,
      originalPrice: 100,
    },
    {
      id: 2,
      image: "https://i.postimg.cc/1XBND3bj/mc1.png",
      title: "The Masterclass",
      price: 4999,
      originalPrice: 9999,
    },
    {
      id: 3,
      image: "https://i.postimg.cc/xdBGdqSG/GDPI-2.png",
      title: "Decoding GDPI",
      price: 999,
      originalPrice: 1999,
    },
    {
      id: 4,
      image: "https://i.postimg.cc/HW9yttQP/pf-1.png",
      title: "Excel Personal Finances",
      price: 999,
      originalPrice: 1999,
    },
    {
      id: 5,
      image: "https://i.postimg.cc/sxYMsgV2/dm.png",
      title: "Digital Marketing Workshop",
      price: 1499,
      originalPrice: 2999,
    },
  ];

  const handleProductClick = (productId) => {
    setExpanded(productId); // Show accordion for the clicked product
  };

  const closeAccordion = () => {
    setExpanded(null); // Close the accordion
  };

  return (
    <div className="bg-stone-50 py-6 px-6">
      {/* Section Title */}
      <h2 className="md:text-5xl text-3xl font-medium text-center mb-10 text-black font-serif decoration-black underline">
        Our <span className="text-orange-600"> Products</span>
      </h2>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            />

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium font-sans text-gray-800">
                {product.title}
              </h3>
              <p className="mt-2 text-lg text-green-600 font-bold">
                ₹{product.price}{" "}
                <span className="text-gray-500 line-through text-sm">
                  ₹{product.originalPrice}
                </span>
              </p>
              <button
                className="bg-blue-500 text-white mt-4 px-6 py-2 rounded font-semibold  hover:bg-blue-600 transition duration-300"
                onClick={() => handleProductClick(product.id)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion Popup */}
      {expanded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
            <Accordion
              expanded={true}
              onChange={closeAccordion}
              className="w-full"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${expanded}-content`}
                id={`panel${expanded}-header`}
                className="bg-blue-100"
              >
                <p className="text-blue-700 font-bold">
                  Please Log In to View Product
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-gray-600 font-semibold">
                  You must be logged in to view the product details or purchase
                  this item. Please log in to continue.
                </p>
              </AccordionDetails>
            </Accordion>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closeAccordion}
            >
              Close
            </button>
            <Link to="/login">  <button
                className="bg-blue-500 text-white mt-4 px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
                
              > Login</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
