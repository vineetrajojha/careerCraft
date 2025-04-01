import React from 'react';
import logo1 from '../features/common/images/logo1.jpeg'; 
import logo2 from '../features/common/images/logo2.jpeg';
import logo3 from '../features/common/images/logo3.jpeg';
import logo4 from '../features/common/images/logo4.jpeg';
import Navbar from '../features/common/Navbar';
import Footer from '../features/common/Footer';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';

const MentorsPage = () => {
  const logos = [logo1, logo2, logo3, logo4];
  const user = useSelector(selectLoggedInUser);
  
  // Dummy scroll functions to pass to Navbar
  const scrollToSection = () => {};
  const scrollToFaqSection = () => {};
  const scrollToMentorsSection = () => {};

  return (
    <div>
      <Navbar 
        isLoggedIn={!!user} 
        scrollToFaqSection={scrollToFaqSection} 
        scrollToProductsSection={scrollToSection} 
        scrollToMentorsSection={scrollToMentorsSection} 
      />
   
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="md:text-4xl text-2xl font-bold mb-6 text-slate-600 font-roboto underline"> About Our<span className='font-roboto '> Mentors</span> </h1>
        <p className="md:text-lg text-sm text-gray-700 mb-8 font-serif leading-relaxed text-justify px-4 sm:px-8 lg:px-16">
  At CareerCraft, our mentors are more than just professionals—they are seasoned industry experts who bring 2 to 15 years of rich, hands-on experience across a variety of domains. They are alumni of some of the most prestigious institutions in India, including IITs, IIMs, and other top-tier universities. Among them, we have individuals who have cracked the highly competitive UPSC Civil Services examination, a testament to their unparalleled knowledge and dedication.  

  Our mentors come from diverse sectors such as IT, FMCG, Healthcare, BFSI, and many others, ensuring you gain multidimensional perspectives. Whether it's navigating corporate challenges, excelling in government roles, or mastering industry-specific skills, their real-world insights empower you to craft your own path to success.
</p>

      </div>

      {/* Logos Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center px-4">
      {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Mentor Logo ${index + 1}`}
            className="w-full h-28 sm:w-full sm:h-24 lg:w-full lg:h-60 object-contain mx-auto"
          />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 font-medium">and many more</p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default MentorsPage;
