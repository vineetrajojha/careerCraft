import React, { useState,useRef} from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css/bundle'; // Import Swiper styles
import './styles.css'; // Import the CSS file for custom animations


import ProductSection from './ProductSection';
import FaqSection from './FaqSection';
import MentorsSection from './MentorsSection';
import Footer from '../features/common/Footer';
import newLogo from "../features/common/images/newLogo.png"


const features = [
  {
    title: "Expert Instructors",
    description: `Our instructors, with rich industry experience, bring real-world insights into the learning process.
     They simplify complex concepts through engaging, interactive methods, ensuring clarity and understanding. 
     Passionate about staying up-to-date with industry developments, they offer guidance and constructive feedback to create a 
     supportive learning environment. This fosters continuous growth and positions you for long-term career success.`
  },
  {
    title: "Flexible Learning",
    description: `We provide a range of flexible learning options to suit different preferences and schedules, from self-paced courses
      to more structured formats. Our offerings include online courses for anytime, anywhere access, blended learning
      experiences, and immersive workshops, all designed to equip learners with practical, real-world skills for success in a
      competitive global environment.`
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our comprehensive curriculum, crafted by experts in collaboration with industry professionals, balances theory and practical application, emphasizing hands-on learning, case studies, and real-world projects. Continuously updated to reflect current trends and best practices, it equips learners with valuable insights and practical knowledge for immediate career application, ensuring success in today’s competitive landscape."
  },
  {
    title: "Career Support",
    description: `Designed by experts in collaboration with industry professionals, our curriculum offers a balanced blend of theory
    and practical application. It focuses on hands-on learning, case studies, and real-world projects, ensuring learners
      gain relevant skills. Regularly updated to stay aligned with current trends and best practices, it equips learners with
    actionable insights and practical knowledge, empowering them to thrive in today’s competitive landscape.`
  }
];

const testimonials = [
  { name: "Vaishali Sharma", text: "The content on CareerCraft is up-to-date and presented in a clear, engaging manner. The support team is incredibly helpful. This platform is a fantastic tool for anyone looking to advance their skills.", image: "/vaishali.jpg" },
  { name: "Ragini Malhotra", text: "The courses at CareerCraft are thorough and well-designed. I appreciate the real-world examples and hands-on projects that enhance learning. It’s a fantastic investment for anyone looking to improve their skills.", image: "/ragini.jpg" },
  { name: "Kamal Mehra", text: "CareerCraft offers top-notch courses with practical exercises that are directly applicable to my job. It’s helped me build new skills efficiently and effectively. Excellent resource for career advancement!", image: "/kamal.jpg" },
  { name: "Himanshi Singh", text: "The range of topics covered by CareerCraft is impressive, from technical skills to soft skills. The interactive elements keep me engaged, and the feedback is constructive.", image: "/himanshi.jpg" },
  { name: "Istekhar Alam", text: "My expectations were exceeded by CareerCraft. Learning is enjoyable since the courses are well-structured and include real-world applications. Additionally, the support staff responds quickly. A must-try for individuals who are committed to improving their skills!", image: "/istekhar.jpg" },
  { name: "Ajay Pawaria", text: "The variety of courses and hands-on approach at CareerCraft set it apart. It’s intuitive, effective, and helps me stay competitive in my field. The investment in my career has been worthwhile.", image: "/ajay.jpg" },
  { name: "Saurav Kumar", text: "After a month of use, CareerCraft has really changed my life. Their hands-on activities and interactive sessions make upskilling a breeze. Strongly advised for anyone trying to grow in their field!", image: "/sourav.jpg" }
];


const Main = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // Scroll to the section when the button is clicked
    targetFaqSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  const scrollToSection = () => {
    // Scroll to the section when the button is clicked
    targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <nav className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 shadow-lg text-white p-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="container mx-auto flex justify-between items-center">
          
            <div className="flex items-center space-x-2">
            <Link to = "/">
              <img src= {newLogo} className='h-8 w-12  border-gray-800 cursor-pointer' alt="Logo" /></Link>
              <Link to="/" className="text-3xl font-semibold font-serif">Career <span className='text-yellow-300 '>Craft</span> </Link>
            </div>
            <div className="hidden md:flex space-x-11 text-[16px] font-semibold mr-24">
            
            <NavLink
                to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif  "
                      : "  hover:underline text-yellow-300 font-serif hover:text-yellow-500 "
                  }
                > 
                  About
                </NavLink>
                <NavLink
                to="/mentors"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif  "
                      : "  hover:underline text-yellow-300 font-serif hover:text-yellow-500 "
                  }
                > 
                 Our Mentors
                </NavLink>

              <NavLink to="/contact"className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold  border-red-600 underline decoration-2 decoration-blue-600  font-serif "
                      : "  hover:underline text-yellow-300 font-serif hover:text-yellow-500 "
                  }
                >Contact Us</NavLink>
                <p onClick={scrollToFaqSection}
               
                  className=
                    
                      " cursor-pointer hover:underline text-yellow-300 font-serif hover:text-yellow-500 "
                  
                > 
                  FAQs
                </p>
              <NavLink to="/login" className={({ isActive }) =>
                    isActive
                      ? "text-black hover:text-blue-500 font-semibold underline decoration-2 font-serif decoration-red-600 bg-white px-3 rounded-lg "
                      : "  font-serif font-semibold text-black rounded  hover:text-blue-500 border px-3  bg-slate-100 "
                  }>Login</NavLink>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 mx-auto text-right flex flex-col">
              <Link to="/about" className=" text-right px-3 py-1 hover:underline  rounded text-white font-serif hover:text-yellow-500 underline  ">About</Link>
              <Link to="/mentors" className="text-right px-3 py-1 hover:underline  text-white font-serif hover:text-yellow-500 underline  ">Our Mentors</Link>
              <Link to="/contact" className="text-right px-3 py-1 hover:underline  text-white font-serif hover:text-yellow-500 underline ">Contact Us</Link>
              <p onClick={scrollToFaqSection}className="cursor-pointer px-3 py-1 text-right hover:underline underline  text-white font-serif hover:text-yellow-500 " 
             > FAQs
             </p>
              <Link to="/login" className="text-right hover:underline px-3 py-1  text-white font-serif hover:text-yellow-500 underline  ">Login</Link>
             
            </div>
          )}
        </nav>

        {/* Header */}
        <header className="bg-slate-50 text-black">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-5xl  font-bold font-mono mb-4">Welcome to Career <span className='text-yellow-600'>Craft</span></h1>
              <p className="md:text-xl  font-serif  text-slate-700">We're revolutionizing <span className='font-bold text-slate-500'>education</span>  through skill development to lead the New India.</p>
              <p className="md:text-xl mb-6 font-serif font-semibold  text-blue-700">Crafting succesful careers.</p>
              <button onClick={scrollToSection} className='btn-glow-bounce bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800
               transition duration-300 animate-bounce motion-safe:animate-bounce'>Check Our Products <span className='font-semibold'>&#x27F6;</span></button>



              
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-10 px-14  rounded-lg ">
              <img 
                src="/carrercraftlogo.png" 
                alt="Career" 
                className="lg:w-96 w-auto lg:h-48 object-cover rounded border-0 mx-auto"  
                style={{ border: 'none' }} 
              />
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="text-center p-10 bg-gray-800 py-20 text-white">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 font-mono">Why Choose Career <span className='text-yellow-300 font-serif'>Craft</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-lg md:text-base leading-relaxed text-left md:text-justify text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

       <div>
        <MentorsSection />
       </div>
      
        <div ref={targetSectionRef} className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-stone-100">
        <ProductSection />
     
    </div>
        
       {/* Testimonials */}
<section className="text-center p-10 bg-gray-700 py-20 text-white">
  <h2 className="text-4xl font-bold mb-6 font-roboto">What Our<span className='text-yellow-300'>  Students</span> Say</h2>
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20} // Adjust space between slides
    slidesPerView={1} // Default to 1 slide for smaller screens
    breakpoints={{
      640: {
        slidesPerView: 1, // 1 slide for small screens
      },
      768: {
        slidesPerView: 2, // 2 slides for medium screens
        spaceBetween: 30, // Space between slides
      },
      1024: {
        slidesPerView: 3, // 3 slides for larger screens
        spaceBetween: 30, // Space between slides
      },
    }}
  >
    {testimonials.map((testimonial, index) => (
      <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md">
        <img src={testimonial.image} alt={testimonial.name} className="h-52 w-40 mx-auto mb-4 object-cover" />
        <p className="text-lg italic text-gray-700 mb-4">"{testimonial.text}"</p>
        <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
<div ref={targetFaqSection}>
  <FaqSection />
  <div className="text-center mt-4 mb-2">
            <button
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none  "
            >
              Go to Top
            </button>
          </div>
</div>

        {/* Login Section */}
        <section className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white text-center p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Upskill Yourself?</h2>
          <p className="text-xl mb-6">Join Career Craft today and take the best step towards your future.</p>
          <Link to="/login" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">Sign Up Now</Link>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;