import React, { useEffect } from 'react';
import Signup from "../features/auth/components/Signup";
import Footer from "../features/common/Footer";
import Navbar from "../features/common/Navbar";
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function SignupPage() {
    const user = useSelector(selectLoggedInUser);
    
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
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
            <div data-aos="fade-up">
                <Signup></Signup>
            </div>
            <Footer />
        </div>
     );
}

export default SignupPage;