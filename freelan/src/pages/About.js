import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../features/common/Footer';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isAbout = location.pathname === '/about';
  const isHomeRoute = location.pathname === '/contact'
  const isLogin = location.pathname === '/login';
  const isSignUp = location.pathname === '/signup'
  const isMentorsRoute = location.pathname === '/mentors';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 shadow-lg text-white p-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src='/newLogo.png' className='h-8 w-12  border-gray-800' alt="Logo" />
          <Link to="/" className="text-3xl font-semibold font-serif">Career <span className='text-yellow-300'>Craft</span></Link>
        </div>
        <div className="hidden md:flex space-x-11 text-[16px] font-semibold mr-24">
        {isAbout && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Home
          </NavLink>)}
          {isHomeRoute && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Home
          </NavLink>)}
          {isLogin && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Home
          </NavLink>)}
          {isSignUp && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Home
          </NavLink>)}
          {isMentorsRoute && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Home
          </NavLink>)}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
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

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-red-600 underline decoration-2 decoration-blue-600 font-serif"
                : "hover:underline text-yellow-300 font-serif hover:text-yellow-500"
            }
          >
            Contact Us
          </NavLink>
          {/* <Link to= '/faqSection'
               
               className=
                 
                   " cursor-pointer hover:underline text-yellow-300 font-serif hover:text-yellow-500 "
               
             > 
               FAQ
             </Link> */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-black hover:text-blue-500 font-semibold underline decoration-2 font-serif decoration-red-600 bg-white px-3 rounded-lg"
                : "font-serif font-semibold text-black rounded hover:text-blue-500 border px-3 bg-slate-100"
            }
          >
            Login
          </NavLink>
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
        <div className="md:hidden mt-2 space-y-2 mx-auto text-right flex flex-col">
        {isAbout && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-white font-serif hover:text-yellow-500 px-3 py-1"
            }
          >
            Home
          </NavLink>)}
        {isHomeRoute && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-white font-serif hover:text-yellow-500 px-3 py-1"
            }
          >
            Home
          </NavLink>)}
          {isLogin && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-white font-serif hover:text-yellow-500 px-3 py-1"
            }
          >
            Home
          </NavLink>)}
          {isSignUp && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-white font-serif hover:text-yellow-500 px-3 py-1"
            }
          >
            Home
          </NavLink>)}
          {isMentorsRoute && (<NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline decoration-2 decoration-blue-600 border-red-600  font-serif"
                : "hover:underline text-white font-serif hover:text-yellow-500 px-3 py-1"
            }
          >
            Home
          </NavLink>)}
          <Link to="/about" className=" text-right px-3 py-1 hover:underline  rounded text-white font-serif hover:text-yellow-500 underline ">About</Link>
          <Link to="/mentors" className=" text-right px-3 py-1 hover:underline  rounded text-white font-serif hover:text-yellow-500 underline  ">Our Mentors</Link>
          <Link to="/contact" className=" text-right px-3 py-1 hover:underline  rounded text-white font-serif hover:text-yellow-500 underline ">Contact Us</Link>
          <Link to="/login" className=" text-right px-3 py-1 hover:underline  rounded text-white font-serif hover:text-yellow-500 underline ">Login</Link>
        </div>
      )}
    </nav>
  );
};

const About = () => (
  <div>
   <Navbar />
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl hover:text-black cursor-pointer font-bold text-gray-900 text-center font-roboto mb-8 decoration-slate-500 underline">About <span className='text-blue-900 font-serif'>Us</span></h1>
        <p className="text-xl text-gray-700 leading-8 mb-4 font-mono">
          Welcome to <span className="font-bold">Career Craft</span>, where we're revolutionizing education through skill development to lead the New India.
        </p>
        <p className="md:text-lg sm:text-base text-gray-700 leading-8 mb-4 font-serif">
        A.P.J. Abdul Kalam Once said <span className='font-semibold text-blue-800'>“All of us do not have equal talent but all of us have an equal opportunity to develop
our talent”</span> it is this thought that lies at the very heart of what Career Craft Services does. We firmly believe, that the
main aim of a teacher is not only to impart knowledge and Studies but also to awaken a sense of curiosity for
independent and logical thinking.
At Career Craft, we encourage our learners to develop a deep understanding of concepts, contextual knowledge, and
real-world application in a stress-free and supportive environment. Our programs are thoughtfully designed and
supported by comprehensive course material, detailed question banks, interactive discussion sessions, and rigorous
testing schedules to ensure a thorough learning experience.
Our institute brings together a team of accomplished and dedicated educators under one roof, creating a knowledge
hub that fosters excellence. With their expertise, we aim to guide each student toward continuous improvement and
career advancement.
We offer top-notch facilities in a welcoming atmosphere where students feel at home. You&#39;ll find them engaged in
their studies throughout the institute, driven by the desire to excel.
Over the years, it has been incredibly rewarding to see our students grow, thrive, and benefit from our specialized
programs and personalized guidance. Not only do they achieve remarkable success in their careers, but they also
gain invaluable skills and insights that serve them well in their professional journeys.
This is where our success lies—seeing our students reach their full potential and pave the way for a bright future.
<br></br>
<span className='font-bold '>Crafting success, one skill at a time.</span>
        </p>
       
        <h1 className="text-4xl font-bold text-gray-900 text-center font-roboto mb-4 decoration-slate-500 underline">Our <span className='text-blue-900 font-serif'>Mission</span></h1>
        <p className="md:text-lg sm:text-base text-gray-700 leading-8 mb-4 font-serif">Our mission is to educate and empower students, discipline these young minds and to help them grow into
          intellectually aware individuals, capable of fulfilling their dreams and aspirations and to face the future with
          equanimity.</p>
        <p className="text-lg text-gray-900 leading-8 mb-4 font-bold">
          Join us on this transformative journey as we unlock the potential of every learner, shaping a brighter future through education.
        </p>
        
      </div>
    </div>
    <section className="bg-gray-800 text-white text-center p-10">
        <h2 className="text-3xl font-semibold mb-4 font-sans">Ready to Start Your Career?</h2>
        <p className="text-xl mb-6 font-sans">Join Career Craft today and take the best step towards your future.</p>
        <Link to="/login" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Sign Up Now</Link>
      </section>

      {/* Footer */}
    <Footer />
  </div>
);

export default About;
