import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation, Autoplay } from 'swiper/modules'; // Import Navigation and Autoplay modules
import 'swiper/css/bundle'; // Import Swiper styles
import './styles.css'; // Import the CSS file for custom animations
import { FaShoppingCart, FaUserTie, FaGraduationCap, FaHeadset, FaBrain, FaChevronDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';

import ProductSection from './ProductSection';
import FaqSection from './FaqSection';
import MentorsSection from './MentorsSection';
import Footer from '../features/common/Footer';
import Navbar from '../features/common/Navbar';
import newLogo from "../features/common/images/newLogo.png"

// Add CountUp component for animations
import CountUp from 'react-countup';

// Extract FAQ data from features array
const faqData = [
  {
    question: "Who can join us?",
    answer: "Anyone passionate about learning and career growth can join Career Craft. Our courses are designed for students, professionals, and career changers looking to enhance their skills."
  },
  {
    question: "What courses do you offer?",
    answer: "We offer a wide range of courses in technology, business, design, and professional development. Our curriculum is regularly updated to match industry demands."
  },
  {
    question: "How does the learning process work?",
    answer: "Our learning process combines self-paced online modules, live sessions with instructors, hands-on projects, and interactive assignments to ensure comprehensive skill development."
  },
  {
    question: "What support do you provide?",
    answer: "We provide 24/7 technical support, dedicated mentorship, career guidance, and placement assistance to help you achieve your career goals."
  },
  {
    question: "Are there any prerequisites?",
    answer: "Prerequisites vary by course. While some courses are beginner-friendly, others may require basic knowledge in relevant areas. Check specific course details for requirements."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. Terms and conditions apply."
  }
];

const testimonials = [
  { name: "Vaishali Sharma", text: "The content on CareerCraft is up-to-date and presented in a clear, engaging manner. The support team is incredibly helpful. This platform is a fantastic tool for anyone looking to advance their skills.", image: "/vaishali.jpg" },
  { name: "Ragini Malhotra", text: "The courses at CareerCraft are thorough and well-designed. I appreciate the real-world examples and hands-on projects that enhance learning. It's a fantastic investment for anyone looking to improve their skills.", image: "/ragini.jpg" },
  { name: "Kamal Mehra", text: "CareerCraft offers top-notch courses with practical exercises that are directly applicable to my job. It's helped me build new skills efficiently and effectively. Excellent resource for career advancement!", image: "/kamal.jpg" },
  { name: "Himanshi Singh", text: "The range of topics covered by CareerCraft is impressive, from technical skills to soft skills. The interactive elements keep me engaged, and the feedback is constructive.", image: "/himanshi.jpg" },
  { name: "Istekhar Alam", text: "My expectations were exceeded by CareerCraft. Learning is enjoyable since the courses are well-structured and include real-world applications. Additionally, the support staff responds quickly. A must-try for individuals who are committed to improving their skills!", image: "/istekhar.jpg" },
  { name: "Ajay Pawaria", text: "The variety of courses and hands-on approach at CareerCraft set it apart. It's intuitive, effective, and helps me stay competitive in my field. The investment in my career has been worthwhile.", image: "/ajay.jpg" },
  { name: "Saurav Kumar", text: "After a month of use, CareerCraft has really changed my life. Their hands-on activities and interactive sessions make upskilling a breeze. Strongly advised for anyone trying to grow in their field!", image: "/sourav.jpg" }
];


const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const user = useSelector(selectLoggedInUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const targetSectionRef = useRef(null);
  const targetFaqSection = useRef(null);
  const topRef = useRef(null);

  const scrollToTop = ()=>{
    topRef.current.scrollIntoView({behavior : 'smooth'});
  }
  const scrollToFaqSection = () => {
    targetFaqSection.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToSection = () => {
    targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main-content">
      {/* 3D Cube and Particles */}
      {/* <div className="cube-background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div> */}

      <div className="content" ref={topRef}>

      
        {/* Navbar */}
        <Navbar isLoggedIn={!!user} scrollToFaqSection={scrollToFaqSection} />
       

        {/* Header */}
        <header className="bg-white text-black h-[86vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
              <h2 className="text-[#4A4A4A] text-base sm:text-lg mb-2 font-outfit font-extrabold">Join</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 font-outfit">
                <span className="text-[#4A3F35] font-extrabold">Career</span>{" "}
                <span className="text-[#9C4A1A] font-extrabold">Craft</span>
              </h1>
              <p className="text-[#4A4A4A] text-lg sm:text-xl leading-relaxed max-w-xl font-outfit">
                Take charge of your future! We empower you <br className="hidden sm:block"/> with cutting-edge skills to innovate, succeed, <br className="hidden sm:block"/> and lead New India forward.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center">
              <img 
                src="/carrercraftlogo.png" 
                alt="Career Craft Logo" 
                className="w-64 sm:w-80 lg:w-96 h-auto mb-6 sm:mb-8"
              />
              <div className='login-but'>
                {!user ? (
                  <Link 
                    to="/login"
                    className="bg-[#E67E22] text-white px-8 sm:px-12 py-2 rounded-full text-base sm:text-lg hover:bg-[#d67118] transition-colors duration-300 font-outfit"
                  >
                    Login
                  </Link>
                ) : (
                  <Link 
                    to="/profile"
                    className="bg-[#E67E22] text-white px-8 sm:px-12 py-2 rounded-full text-base sm:text-lg hover:bg-[#d67118] transition-colors duration-300 font-outfit"
                  >
                    My Profile
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="font-outfit text-center p-10 bg-[#E6A06C] py-20">
          <h2 className="md:text-5xl text-4xl font-bold mb-16">
            <span className="text-[#4A3F35]">why choose </span>
            <span className="text-[#4A3F35]">Career </span>
            <span className="text-[#9C4A1A]">Craft</span>
            <span className="text-[#4A3F35]">?</span>
          </h2>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[rgb(74,63,53)] mb-2">
                <CountUp end={10000} suffix="+" duration={2.3} />
              </div>
              <div className="text-2xl text-[#4A3F35] font-bold">Impacted Careers </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#4A3F35] mb-2">
                <CountUp end={60} suffix="+" duration={2.5} />
              </div>
              <div className="text-2xl text-[#4A3F35] font-bold">industry mentors</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#4A3F35] mb-2">
                <CountUp end={100} suffix="+" duration={2.5} />
              </div>
              <div className="text-2xl text-[#4A3F35] font-bold">collaborations</div>
            </div>
          </div>

          

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-16">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaBrain className="text-4xl text-[#4A3F35]" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#4A3F35]">Flexible Learning</h3>
                  <p className="text-[#4A3F35]">
                    We offer flexible learning options, including self-paced courses, structured formats, online access, and blended learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaHeadset className="text-4xl text-[#4A3F35]" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#4A3F35]">Career Support</h3>
                  <p className="text-[#4A3F35]">
                    Get personalized career guidance, mentorship, and job placement assistance to help you achieve your professional goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaUserTie className="text-4xl text-[#4A3F35]" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#4A3F35]">Expert Instructors</h3>
                  <p className="text-[#4A3F35]">
                    Our experienced instructors simplify complex concepts with real-world insights and interactive methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FaGraduationCap className="text-4xl text-[#4A3F35]" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#4A3F35]">Comprehensive Curriculum</h3>
                  <p className="text-[#4A3F35]">
                    Our expert-designed curriculum blends theory with hands-on learning, case studies, and real-world projects.
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </section>

       


      
        <div ref={targetSectionRef} className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-stone-100">
          {ProductSection && <ProductSection />}
        </div>

        <div>
          {MentorsSection && <MentorsSection />}
        </div>

        
        
        {/* Testimonials */}
        <section className="bg-white py-20 font-outfit overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16 text-5xl font-bold">
              <span className="text-[#4A3F35]">What Our </span>
              <span className="text-[#9C4A1A]">Students </span>
              <span className="text-[#4A3F35]">Say</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* First Column */}
              <div className="space-y-8">
                <Swiper
                  direction="vertical"
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: false
                  }}
                  loop={true}
                  speed={1000}
                  slidesPerView={2}
                  spaceBetween={24}
                  className="h-[700px]"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={`col1-${index}`}>
                      <div className="bg-[#E6A06C] rounded-2xl p-6 transform transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-white font-bold mb-1">{testimonial.name}</h3>
                          <p className="text-white text-sm mb-4">{testimonial.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Second Column */}
              <div className="space-y-8">
                <Swiper
                  direction="vertical"
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    initialSlide: 2
                  }}
                  loop={true}
                  speed={1000}
                  slidesPerView={2}
                  spaceBetween={24}
                  className="h-[700px]"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={`col2-${index}`}>
                      <div className="bg-[#E6A06C] rounded-2xl p-6 transform transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-white font-bold mb-1">{testimonial.name}</h3>
                          <p className="text-white text-sm mb-4">{testimonial.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Third Column */}
              <div className="space-y-8">
                <Swiper
                  direction="vertical"
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: false,
                    initialSlide: 4
                  }}
                  loop={true}
                  speed={1000}
                  slidesPerView={2}
                  spaceBetween={24}
                  className="h-[700px]"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={`col3-${index}`}>
                      <div className="bg-[#E6A06C] rounded-2xl p-6 transform transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-white font-bold mb-1">{testimonial.name}</h3>
                          <p className="text-white text-sm mb-4">{testimonial.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#E6A06C] py-20 px-4 font-outfit faq-section" ref={targetFaqSection}>
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-bold mb-16 text-[#4A3F35] text-center">
              Frequently Asked Questions.
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h3 className="text-xl font-medium text-[#4A3F35]">
                      {faq.question}
                    </h3>
                    <FaChevronDown
                      className={`text-[#4A3F35] transition-transform duration-300 ${
                        activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#4A3F35]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;