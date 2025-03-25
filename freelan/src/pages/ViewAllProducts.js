import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

function PageNotFound() {
  // Animation for floating effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.querySelector('.error-container');
      if (!container) return;
      
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      
      container.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-outfit">
      <Navbar />
      
      <main className="flex-grow grid place-items-center bg-white px-6 py-16 sm:py-24 lg:px-8 overflow-hidden">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#E6A06C]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#9C4A1A]"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-[#C65D34]"></div>
          </div>
          
          <div className="error-container relative z-10 transition-transform duration-200 ease-out">
            {/* Animated 404 text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-8xl sm:text-9xl font-extrabold text-[#C65D34] tracking-tighter">
                404
              </h1>
            </motion.div>
            
            {/* Page content with animations */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#4A3F35] sm:text-5xl">
                Oops! Page not found
              </h2>
              
              <p className="mt-6 text-lg leading-7 text-gray-600 max-w-md mx-auto">
                The page you're looking for seems to have wandered off during career exploration.
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/"
                  className="rounded-full bg-[#E67E22] px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-[#d67118] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Back to Homepage
                </Link>
                
                <Link
                  to="/contact"
                  className="text-[#9C4A1A] font-medium hover:text-[#C65D34] transition-colors duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#F8E5D8] z-0"
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#F8E5D8] z-0"
            animate={{ 
              y: [0, 20, 0], 
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          ></motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default PageNotFound;