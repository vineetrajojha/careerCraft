import React from "react";

const ProductCard = ({ image, title, price, originalPrice }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-green-600 font-bold mt-2">
          ₹{price}{" "}
          <span className="text-gray-500 line-through text-sm">
            ₹{originalPrice}
          </span>
        </p>
        <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

// Export the component so it can be used elsewhere
export default ProductCard;
