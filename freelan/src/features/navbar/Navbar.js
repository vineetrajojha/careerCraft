import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../cart/cartSlice';
import { selectUserInfo } from '../user/userSlice';
import Cookies from 'js-cookie';


const navigation = [
  { name: 'Career Craft', link: '/home', user: true },
  { name: 'Career Craft', link: '/admin', admin: true },
  { name: 'Orders', link: '/admin/orders', admin: true },
];
const userNavigation = [
  { name: 'My Profile', link: '/profile' },
  { name: 'My Orders', link: '/my-orders' },
  { name: 'Sign out', link: '/logout' },
];
const features = [
  {
    title: "Expert Instructors",
    description: "Our expert instructors, with extensive industry experience, deliver clear, concise explanations of complex topics using interactive methods to foster engagement. Committed to staying current with industry trends, they provide personalized guidance and constructive feedback, creating a supportive learning environment for continuous improvement and career advancement."
  },
  {
    title: "Flexible Learning",
    description: "We offer flexible learning options, from self-paced study to structured environments, catering to various preferences and schedules. Our approach includes online courses for anytime, anywhere access, blended learning, and intensive workshops, ensuring hands-on, real-world experience for learners to thrive in a competitive global landscape."
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our comprehensive curriculum, crafted by experts in collaboration with industry professionals, balances theory and practical application, emphasizing hands-on learning, case studies, and real-world projects. Continuously updated to reflect current trends and best practices, it equips learners with valuable insights and practical knowledge for immediate career application, ensuring success in today’s competitive landscape."
  },
  {
    title: "Career Support",
    description: "We extend learning beyond course completion to career success through comprehensive support, including resume building, interview preparation, and job placement assistance. By helping learners set career goals and connect with employers, we empower them to confidently navigate the job market and thrive in their careers."
  }
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavBar({ children }) {
  

  useEffect(() => {
    Cookies.remove("jwt", {
      path: "/login"
    });
  }, []);

  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);
  

  return (
    <>
      {userInfo && <div className="min-h-full">
        <Disclosure as="nav" className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 shadow-lg">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-8xl p-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/home">
                        <img
                          className="h-10 w-24 px-2 md:h-8 md:w-14"
                          src="/newLogo.png"
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline space-x-4">
                        {navigation.map((item) =>
                          item[userInfo.role] ? (
                            <Link
                              key={item.name}
                              to={item.link}
                              className={classNames(
                                item.current
                                  ? 'bg-white text-stone-700 font-mono font-semibold'
                                  : 'text-white hover:bg-gray-700 hover:text-white',
                                'rounded-md  text-3xl font-bold font-mono'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="rounded-full bg-white p-1 text-stone-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </Link>
                      {items.length > 0 && (
                        <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          {items.length}
                        </span>
                      )}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">&#9776</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&s'
                              alt=""
                            />
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
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800">
                  {navigation.map((item) =>
                    item[userInfo.role] ? (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
                <div className="border-t border-white pb-2 pt-0">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&s'
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {/* this should come from userInfo */}
                        {userInfo.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-white">
                        {userInfo.email}
                      </div>
                    </div>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-3 flex-shrink-0 rounded-full bg-white p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    {items.length > 0 && (
                      <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Link
                        to={item.link}
                        className={classNames(
                          'bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-slate-50 text-black">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h1 className="text-5xl font-bold font-mono mb-4">Welcome to Career <span className='text-yellow-600'>Craft</span></h1>
              <p className="md:text-xl  font-serif  text-slate-700">We're revolutionizing <span className='font-bold text-slate-500'>education</span>  through skill development to lead the New India.</p>
              <p className="md:text-xl mb-6 font-serif font-semibold  text-blue-700">Crafting succesful careers.</p>
              <Link to= "/productList">
                
              <button  className='btn-glow-bounce bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800
               transition duration-300 animate-bounce motion-safe:animate-bounce'>Check Our Products <span className='font-semibold'>&#x27F6;</span></button>
               </Link>


              
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

        <section className="text-center p-10 bg-gray-800 py-20 text-white">
          <h2 className="text-5xl font-bold mb-6 font-roboto">Why Choose Career <span className='text-yellow-300'> Craft</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-lg md:text-base leading-relaxed text-left md:text-justify text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>}
    </>
  );
}

export default NavBar;
