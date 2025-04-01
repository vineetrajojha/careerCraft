import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';
import Footer from '../features/common/Footer';
import Navbar from '../features/common/Navbar';
import contactusimage from '../features/common/images/contact-us.svg';
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const user = useSelector(selectLoggedInUser);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  
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
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl bg-[#E1A16D] rounded-[20px] p-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Contact Form */}
            <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-5xl font-bold mb-8 text-white">Send us a Message</h2>
              
              <form className="space-y-4 text-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-2 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98XXXXXXXX"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="admin@careercraft.site"
                    className="w-full p-2 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black px-10 py-2 rounded-tr-[25px] rounded-bl-[25px] font-semibold hover:bg-gray-100 transition-colors"
                  data-aos="zoom-in" data-aos-delay="300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Illustration */}
            <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <img
                src={contactusimage}
                alt="Contact us illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className='h-0.5 bg-[#4A4A4A] rounded-md '></hr>
      <Footer />
    </div>
  );
};

export default ContactUs;
