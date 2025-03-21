import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../features/common/Footer';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import about1 from '../features/common/images/about1.png';
import about2 from '../features/common/images/about2.png';

export const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToFaqSection = () => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the FAQ section
      const faqSection = document.querySelector('.faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and scroll to FAQ
      window.location.href = '/#faq-section';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white  p-4 mx-auto w-full font-outfit">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="-ml-6 bg-[#F8E5D8] rounded-tr-full rounded-br-full p-4 pl-12 pr-32">
            <Link to="/">
              <div className="flex items-center">
                <img src="/logo1.png" className="h-6 mr-2" alt="Career Craft Icon" />
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
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-8 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-8 py-2 font-outfit"
              }
            >
              FAQs
            </NavLink>
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
          <Link to="/faq" className="text-black px-3 py-1 hover:text-gray-700">FAQs</Link>
          <Link to="/campus" className="text-black px-3 py-1 hover:text-gray-700">Career Craft Campus</Link>
        </div>
      )}
    </nav>
  );
};

const About = () => (
  <div className="bg-white">
    <Navbar />
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* About Us Section */}
      <h1 className="text-[#4A4A4A] text-5xl font-bold mb-12 text-center">About Us</h1>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
        <div className="lg:w-1/2 bg-[#F8E5D8] rounded-3xl p-8">
          <p className="text-lg mb-6">
            Welcome to <span className="font-semibold">Career Craft</span>—where we revolutionize
            education through skill development for New India.
          </p>
          <p className="text-lg mb-6">
            A.P.J. Abdul Kalam once said, "<span className="font-semibold">All of us do not have
            equal talent, but all of us have an equal opportunity
            to develop our talent.</span>" This belief drives us at
            Career Craft. We go beyond academics, fostering
            curiosity, independent thinking, and real-world
            application in a supportive environment.
          </p>
          <p className="text-lg mb-6">
            Our thoughtfully designed programs include
            comprehensive course material, interactive
            discussions, and rigorous testing to ensure a deep
            understanding. Backed by a team of dedicated
            educators, we create a knowledge hub that guides
            students toward excellence.
          </p>
          <p className="text-lg mb-6">
            With top-notch facilities and a welcoming
            atmosphere, our students stay motivated, driven by
            the desire to excel. Seeing them grow, thrive, and
            succeed in their careers is our greatest reward.
          </p>
          <p className="text-lg font-semibold">
            Crafting success, one skill at a time.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img 
            src={about1}
            alt="Career Craft Team" 
            className="w-[90%] h-auto rounded-lg "
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <h2 className="text-[#4A4A4A] text-5xl font-bold mb-12 text-center">Our Mission</h2>
      
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <img 
            src={about2}
            alt="Career Craft Mission" 
            className="w-[80%] h-auto rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 bg-[#F8E5D8] rounded-3xl p-8">
          <p className="text-[20px] mb-6">
            Our mission is to educate, empower, and
            instill discipline in young minds, guiding
            them toward intellectual growth and the
            confidence to achieve their dreams.
          </p>
          <p className="text-lg font-semibold">
            Join us on this transformative journey to
            unlock every learner's potential and
            shape a brighter future through
            education.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
