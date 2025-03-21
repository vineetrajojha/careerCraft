import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '../features/common/Navbar';
import Footer from '../features/common/Footer';

const ViewAllProducts = () => {
  const products = [
    {
      id: 1,
      title: "Foreign language: Learn German and French ,A1",
      description: "lorem ipsum data fetch azure lorem ipsum data fetch azure",
      image: "/path/to/language-course-image.jpg",
    },
    {
      id: 2,
      title: "Adobe Alchemy: Turn Images into Art with Photoshop",
      description: "lorem ipsum data fetch azure lorem ipsum data fetch azure",
      image: "/path/to/photoshop-course-image.jpg",
    },
    {
      id: 3,
      title: "The Entrepreneur's Playbook: Mastering Business Creation and Growth",
      description: "lorem ipsum data fetch azure lorem ipsum data fetch azure",
      image: "/path/to/business-course-image.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#9C4A1A] mb-12">All Workshops</h1>
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#E6A06C] max-h-[98%] rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  
                  <div className="aspect-w-16 aspect-h-9 mt-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-12 h-1 bg-yellow-300 rounded-full"></div>
                </div>

                <p className="text-white text-sm mt-4">{product.tag}</p>
                
                <h3 className="text-2xl font-bold text-white mt-4 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-white text-base mb-6">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <button className="bg-[#C65D34] text-white px-6 py-2 rounded-full text-sm hover:bg-[#B54D24] transition duration-300">
                    Buy now
                  </button>
                  <div className="text-white">
                    <FaShoppingCart size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ViewAllProducts; 