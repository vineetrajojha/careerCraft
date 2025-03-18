import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, scrollToFaqSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm p-4 mx-auto w-full font-outfit">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="-ml-6 bg-[#F8E5D8] rounded-tr-full rounded-br-full p-4 pl-12 pr-32">
            <Link to="/">
              <div className="flex items-center">
                <img src="/carrercraftlogo.png" className="h-6 mr-2" alt="Career Craft Icon" />
              </div>
            </Link>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center -mr-4">
          <div className="bg-[#F8E5D8] rounded-tl-full rounded-bl-full flex items-center p-2 pl-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-8 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-8 py-2 font-outfit"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-8 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-8 py-2 font-outfit"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-8 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-8 py-2 font-outfit"
              }
            >
              Contact Us
            </NavLink>
            <p
              onClick={scrollToFaqSection}
              className="text-black hover:text-gray-700 px-8 py-2 cursor-pointer font-outfit"
            >
              FAQs
            </p>
            <Link
              to="/campus"
              className="bg-[#E67E22] text-white px-6 py-2 rounded-tr-[25px] rounded-bl-[25px] hover:bg-[#d67118] transition-colors duration-300 font-outfit"
            >
              Career Craft Campus
            </Link>
            {isLoggedIn && (
              <Link
                to="/cart"
                className="ml-4 text-[#E67E22] hover:text-[#d67118] transition-colors duration-300"
              >
                <FaShoppingCart className="text-2xl" />
              </Link>
            )}
          </div>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col bg-[#F8E5D8] rounded-lg p-4 font-outfit">
          <Link to="/" className="text-black px-3 py-1 hover:text-gray-700">Home</Link>
          <Link to="/about" className="text-black px-3 py-1 hover:text-gray-700">About Us</Link>
          <Link to="/contact" className="text-black px-3 py-1 hover:text-gray-700">Contact Us</Link>
          <p onClick={scrollToFaqSection} className="text-black px-3 py-1 hover:text-gray-700 cursor-pointer">FAQs</p>
          <Link to="/campus" className="text-black px-3 py-1 hover:text-gray-700">Career Craft Campus</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;