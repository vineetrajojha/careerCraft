import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#ffffff] pt-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Left Section */}
          <div className="space-y-6 ml-20">
            <div>
              <img src="/carrercraftlogo.png" alt="Career Craft Logo" className="h-24" />
            </div>
            <Link to="/signup" className="inline-block">
              <button className="bg-[#F8D7C1] text-[#4A3F35] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#f0c4a8] transition-colors duration-300">
                Sign Up Now
              </button>
            </Link>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div className="font-medium">
            <p className="m-2 leading-5">6th floor, A-40 IThum Tower,<br/>Noida Sector-62,<br/>Uttar Pradesh -201309</p>
            <p className="m-2">Phone Number - +91-9031539131</p>
            <p className="m-2">Email at- admin@careercraft.site</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-1">
            {/* Ready to upskill text */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="text-[#4A3F35]">Ready to </span>
                <span className="text-[#9C4A1A]">Upskill </span>
                <span className="text-[#4A3F35]">Yourself?</span>
              </h2>
              <p className="text-[#4A3F35] text-lg">
                Join Career Craft today and take the best step towards your future
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div className="space-y-3">
                <Link to="/about" className="block text-[#4A3F35] hover:text-[#9C4A1A] underline">About Us</Link>
                <Link to="/contact" className="block text-[#4A3F35] hover:text-[#9C4A1A] underline">Contact Us</Link>
                <Link to="/mentors" className="block text-[#4A3F35] hover:text-[#9C4A1A] underline">Our Mentors</Link>
                <Link to="/faq" className="block text-[#4A3F35] hover:text-[#9C4A1A] underline">FAQs</Link>
              </div>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h3 className="text-[#4A3F35]">Do follow us on :</h3>
                <div className="space-y-2">
                  <a href="https://www.instagram.com/careercraft6" className="block underline text-[#4A3F35] hover:text-[#9C4A1A] flex items-center gap-2">
                    <FaInstagram /> CareerCraft6
                  </a>
                  <a href="https://www.linkedin.com/company/career-craft" className="block underline text-[#4A3F35] hover:text-[#9C4A1A] flex items-center gap-2">
                    <FaLinkedin /> Career Craft
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
            {/* Copyright */}
            <div className="text-[#4A3F35] mt-4 flex flex-col items-center justify-center">
              <p className=" text-[16px]">© 2025 <span className="text-[#9C4A1A] font-medium">Career Craft</span> all rights reserved.</p>
            </div>
      </div>
    </footer>
  );
}

export default Footer;