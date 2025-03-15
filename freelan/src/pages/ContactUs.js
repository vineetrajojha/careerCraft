import React from 'react';
import { useLocation} from 'react-router-dom';
import Footer from '../features/common/Footer';
import { Navbar } from './About';






const ContactUs = () => {

  const location = useLocation();
  
  return (
    <div>
    <Navbar />
      {/* Navbar */}
      {/* <nav className="bg-white text-stone-700 p-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src='/carrercraftlogo.png' className='h-8 w-10' alt="Logo" />
            <Link to="/" className="text-3xl font-semibold font-roboto text-gray-900">Career Craft</Link>
          </div>
          <div className="flex space-x-4 text-[18px] font-semibold">
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
        </div>
      </nav> */}

      {/* Contact Us Header */}
      <header className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-3 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-roboto mb-4 decoration-slate-700 underline">Contact<span className='text-blue-900 font-serif'> Us</span> </h1>
          <p className="text-2xl mb-6 font-serif text-indigo-900 ">We would love to respond to your queries
          and help you succeed!<br></br>
          </p>
        </div>
      </header>

      {/* Contact Us Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto max-w-4xl p-6 rounded-lg shadow-lg bg-cyan-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-mono text-indigo-800">Get In <span className='font-roboto text-lime-600'> Touch.</span></h2>
            <p className="text-lg text-gray-700 font-serif">Feel free to reach out to us through any of the following ways.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0">
            <div className="flex flex-col items-center">

              <h3 className="text-xl font-semibold mb-2 font-mono underline ">Email Us</h3>
             
              <a href="mailto:edutitanventure@gmail.com" className="text-blue-800 font-bold underline">admin@careercraft.site</a>
            </div>
            <div className="flex flex-col items-center">
              {/* <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <address className="not-italic text-gray-700">
                624-A/1, Gali no. 6, Govindpuri,<br />
                Kalkaji, New Delhi - 110019
              </address> */}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 underline font-mono">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/careercraft6?igsh=endmdjlkaTZibGo3" target="_blank" rel="noopener noreferrer">
                  <img src="/Instagram_icon.png.webp" alt="Instagram" className="h-8 w-8"/>
                </a>
                <a href="https://www.linkedin.com/company/103310473/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="h-8 w-8"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default ContactUs;
