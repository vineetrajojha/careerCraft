import React, { useEffect } from 'react';
import Footer from '../features/common/Footer';
import Navbar from '../features/common/Navbar';
import about1 from '../features/common/images/about-us.png';
import about2 from '../features/common/images/about2.png';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <div className="bg-white">
      <Navbar 
        isLoggedIn={!!user} 
        scrollToFaqSection={scrollToFaqSection} 
        scrollToProductsSection={scrollToSection} 
        scrollToMentorsSection={scrollToMentorsSection} 
      />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* About Us Section */}
        <h1 className="text-[#4A4A4A] text-5xl font-bold mb-12 text-center" data-aos="fade-down"><span className="text-[#9C4A1A]">About</span> Us</h1>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="lg:w-1/2 bg-[#F8E5D8] rounded-3xl p-8" data-aos="fade-right" data-aos-delay="100">
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
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img 
              src={about1}
              alt="Career Craft Team" 
              className="w-[90%] h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <h2 className="text-[#4A4A4A] text-5xl font-bold mb-12 text-center" data-aos="fade-down">Our <span className="text-[#9C4A1A]">Mission</span></h2>
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <img 
              src={about2}
              alt="Career Craft Mission" 
              className="w-[80%] h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 bg-[#F8E5D8] rounded-3xl p-8" data-aos="fade-left" data-aos-delay="200">
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
        <hr className='h-0.5 bg-[#4A4A4A] rounded-md mt-6'></hr>
      </div>
      <Footer />
    </div>
  );
};

export default About;