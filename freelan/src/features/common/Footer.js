import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
        <footer className=" text-white text-center p-4">
        <div className="mb-2">
          <Link to="/about" className="text-white hover:underline mx-2">About</Link>
          {/* <Link to="#" className="text-white hover:underline mx-2">Terms of Service</Link> */}
          <Link to="/contact" className="text-white hover:underline mx-2">Contact Us</Link>
          <Link to = "/faqSection" className="text-white hover:underline mx-2">FAQs</Link>
        </div>
        <div className="mb-2">
         
          <a  href="https://www.instagram.com/careercraft6?igsh=endmdjlkaTZibGo3"><img src="/Instagram_icon.png.webp" alt="Instagram" className="inline-block h-6 w-6 mx-1" /></a>
          <a href="https://www.linkedin.com/company/103310473/admin/dashboard/"><img src="/linkedin-icon.png" alt="LinkedIn" className="inline-block h-6 w-6 mx-1" /></a>
        </div>
        <p>&copy; 2024 Career Craft. All rights reserved.</p>
      </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
