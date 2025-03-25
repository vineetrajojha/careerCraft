import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

function CampusComingSoon() {
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
          
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#9C4A1A] mb-6">
              Career Craft Campus
            </h1>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-medium text-[#C65D34]">
                Coming Soon!
              </h2>
            </motion.div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We're building something extraordinary! Career Craft Campus will be your ultimate destination for in-person workshops, hands-on learning experiences, and collaborative skill development.
            </p>
            
            <div className="w-full max-w-md mx-auto bg-[#F8E5D8] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#9C4A1A] mb-4">
                Get Notified When We Launch
              </h3>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#E67E22] text-white px-6 py-2 rounded-full hover:bg-[#d67118] transition-colors duration-300"
                >
                  Notify Me
                </button>
              </form>
            </div>
            
            <div className="mt-12">
              <Link
                to="/"
                className="text-[#9C4A1A] font-medium hover:text-[#C65D34] transition-colors duration-300"
              >
                ← Back to Homepage
              </Link>
            </div>
          </motion.div>
          
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

export default CampusComingSoon;