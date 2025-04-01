import React, { useState, Fragment, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
// import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser } from '../auth/authSlice';
import { Menu, Transition } from '@headlessui/react';
import { signOutAsync } from '../auth/authSlice';
import { selectItems } from '../cart/cartSlice';
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// User navigation items for the dropdown menu
const userNavigation = [
  { name: 'My Profile', link: '/profile', icon: <FaUser className="mr-2" /> },
  { name: 'My Orders', link: '/my-orders', icon: <FaShoppingCart className="mr-2" /> },
  { name: 'Sign out', link: '#', action: 'signout', icon: <FaSignOutAlt className="mr-2" /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({ scrollToFaqSection, scrollToProductsSection, scrollToMentorsSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const isLoggedIn = Boolean(user);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Add this to get cart items
  const items = useSelector(selectItems);
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    dispatch(signOutAsync());
  };
  
  // Handle section navigation from any page
  const handleSectionNavigation = (sectionHandler) => {
    if (location.pathname === '/') {
      // If on home page, just scroll to the section
      sectionHandler();
    } else {
      // If on another page, navigate to home and then scroll after the page loads
      let sectionName;
      if (sectionHandler === scrollToProductsSection) {
        sectionName = 'scrollToSection';
      } else if (sectionHandler === scrollToMentorsSection) {
        sectionName = 'scrollToMentorsSection';
      } else if (sectionHandler === scrollToFaqSection) {
        sectionName = 'scrollToFaqSection';
      }
      navigate('/', { state: { scrollTo: sectionName } });
    }
  };

  return (
    <div data-aos="fade-down">
    <nav className="bg-white shadow-sm p-4 w-full font-outfit">
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="h-14 bg-[#F8E5D8] rounded-tr-full rounded-br-full p-4 pl-6 pr-24">
            <Link to="/">
              <div className="flex items-center">
                <img src="/logo1.png" className="h-7 mr-2" alt="Career Craft Icon" />
              </div>
            </Link>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <div className="bg-[#F8E5D8] h-14 rounded-tl-full rounded-bl-full flex items-center p-2 pl-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-6 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-6 py-2 font-outfit"
              }
            >
              Home
            </NavLink>
            <button
              onClick={() => handleSectionNavigation(scrollToProductsSection)}
              className="text-black hover:text-gray-700 px-6 py-2 cursor-pointer font-outfit"
            >
              Products
            </button>
            <button
              onClick={() => handleSectionNavigation(scrollToMentorsSection)}
              className="text-black hover:text-gray-700 px-6 py-2 cursor-pointer font-outfit"
            >
              Mentors
            </button>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-6 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-6 py-2 font-outfit"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium px-6 py-2 font-outfit"
                  : "text-black hover:text-gray-700 px-6 py-2 font-outfit"
              }
            >
              Contact Us
            </NavLink>
            <button
              onClick={() => handleSectionNavigation(scrollToFaqSection)}
              className="text-black hover:text-gray-700 px-6 py-2 cursor-pointer font-outfit"
            >
              FAQs
            </button>
            <Link
              to="/campus"
              className="bg-[#E67E22] text-white px-6 py-2 rounded-tr-[25px] rounded-bl-[25px] hover:bg-[#d67118] transition-colors duration-300 font-outfit"
            >
              Career Craft Campus
            </Link>
            {isLoggedIn && (
               <>
               <Link
                 to="/cart"
                 className="ml-4 text-[#E67E22] hover:text-[#d67118] transition-colors duration-300 relative"
               >
                 <FaShoppingCart className="text-2xl" />
                 {/* Add this badge for cart items count */}
                 {items && items.length > 0 && (
                   <span className="absolute -top-2 -right-2 bg-[#C65D34] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                     {items.length}
                   </span>
                 )}
               </Link>
                
                {/* Profile Dropdown Menu */}
                <Menu as="div" className="relative ml-4">
                  <div>
                    <Menu.Button className="flex items-center text-[#E67E22] hover:text-[#d67118] transition-colors duration-300">
                      <FaUser className="text-xl mr-1" />
                      <span className="hidden lg:inline"></span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            item.action === 'signout' ? (
                              <button
                                onClick={handleSignOut}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex w-full items-center px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.icon}
                                {item.name}
                              </button>
                            ) : (
                              <Link
                                to={item.link}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex items-center px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.icon}
                                {item.name}
                              </Link>
                            )
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
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
          <button onClick={() => handleSectionNavigation(scrollToProductsSection)} className="text-black px-3 py-1 hover:text-gray-700 cursor-pointer text-left">Products</button>
          <button onClick={() => handleSectionNavigation(scrollToMentorsSection)} className="text-black px-3 py-1 hover:text-gray-700 cursor-pointer text-left">Mentors</button>
          <Link to="/about" className="text-black px-3 py-1 hover:text-gray-700">About Us</Link>
          <Link to="/contact" className="text-black px-3 py-1 hover:text-gray-700">Contact Us</Link>
          <button onClick={() => handleSectionNavigation(scrollToFaqSection)} className="text-black px-3 py-1 hover:text-gray-700 cursor-pointer text-left">FAQs</button>
          <Link to="/campus" className="text-black px-3 py-1 hover:text-gray-700">Career Craft Campus</Link>
          
          {isLoggedIn && (
            <>
              <Link to="/cart" className="text-black px-3 py-1 hover:text-gray-700 flex items-center">
                <FaShoppingCart className="mr-2" /> Cart
              </Link>
              
              {/* Mobile Profile Menu Items */}
              <div className="border-t border-gray-300 mt-2 pt-2">
                {userNavigation.map((item) => (
                  item.action === 'signout' ? (
                    <button
                      key={item.name}
                      onClick={handleSignOut}
                      className="text-black px-3 py-1 hover:text-gray-700 flex items-center w-full text-left"
                    >
                      {item.icon} {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="text-black px-3 py-1 hover:text-gray-700 flex items-center"
                    >
                      {item.icon} {item.name}
                    </Link>
                  )
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;