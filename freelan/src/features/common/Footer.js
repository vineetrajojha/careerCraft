import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#ffffff] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

          {/* Right Section */}
          <div className="space-y-12">
            {/* Ready to upskill text */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="text-[#4A3F35]">ready to </span>
                <span className="text-[#9C4A1A]">upskill </span>
                <span className="text-[#4A3F35]">yourself?</span>
              </h2>
              <p className="text-[#4A3F35] text-lg">
                Join Career Craft today and take the best step towards your future
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div className="space-y-3">
                <Link to="/about" className="block text-[#4A3F35] hover:text-[#9C4A1A]">about us</Link>
                <Link to="/contact" className="block text-[#4A3F35] hover:text-[#9C4A1A]">contact us</Link>
                <Link to="/mentors" className="block text-[#4A3F35] hover:text-[#9C4A1A]">our mentors</Link>
                <Link to="/faq" className="block text-[#4A3F35] hover:text-[#9C4A1A]">FAQs</Link>
              </div>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h3 className="text-[#4A3F35]">do follow us on :</h3>
                <div className="space-y-2">
                  <a href="https://www.instagram.com/careercraft6" className="block text-[#4A3F35] hover:text-[#9C4A1A] flex items-center gap-2">
                    <FaInstagram /> careercraft6
                  </a>
                  <a href="https://www.linkedin.com/company/career-craft" className="block text-[#4A3F35] hover:text-[#9C4A1A] flex items-center gap-2">
                    <FaLinkedin /> career craft
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-[#4A3F35] space-y-1">
              <p>© 2025 career craft all rights reserved.</p>
              <p>developed by theYukt</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
