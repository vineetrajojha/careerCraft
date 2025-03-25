import React, { useEffect, useRef } from 'react';
// import logo1 from '../features/common/images/niims-logo.png';
// import logo2 from '../features/common/images/logo1.png';
// import logo3 from '../features/common/images/logo2.png';
// import logo4 from '../features/common/images/logo3.png';
// import logo5 from '../features/common/images/logo4.png';
// import logo6 from '../features/common/images/logo5.png';
// import logo7 from '../features/common/images/iim-b.jpg';
// import logo8 from '../features/common/images/logo6.png';
// import logo9 from '../features/common/images/logo7.png';
import logo1 from '../features/common/collab/img1.jpg';
import logo2 from '../features/common/collab/img2.jpg';
// AOS LIBRARY for effects
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const GallerySection = () => {
    const originalCollabs = [logo1, logo2];
const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateY(180deg)';
};

  useEffect(() => {

    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateY(0deg)';
};
    const sectionRef = useRef(null);

    return (
      <div className="bg-white py-12 sm:py-16 font-outfit" ref={sectionRef}>
      <div className="container">
        <h2 className="text-[#4A3F35] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-outfit animate-fade-in-down">
        Our <span className="text-[#9C4A1A]">Gallery</span> & <span className="text-[#9C4A1A]">Collaborations</span>
        </h2>
        
        <div data-aos="flip-right">
        <div className="flex flex-wrap justify-center">
        {originalCollabs.map((collab, index) => (
          <div
          key={index}
          className="flex-shrink-0 mx-2 sm:mx-4 lg:mx-6 mt-4 mb-4 sm:mt-0 sm:mb-0 transform transition-all duration-300 hover:scale-105"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <div className="group bg-white rounded-xl border-2 border-[#E6A06C] p-3 sm:p-4 w-[20rem] h-[12rem] sm:w-[36rem] sm:h-[22rem] flex items-center justify-center shadow-lg transition-transform duration-300 hover:shadow-xl relative transform-style-3d">
    
          {/* Front Side (Image) */}
          <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center">
          <img
          src={collab}
          alt={`Collab Logo ${(index % originalCollabs.length) + 1}`}
          className="w-full h-full object-contain rounded-xl"
          />
          </div>

          {/* Back Side (Text) - ADVANCED MIRRORING FIX */}
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 text-white text-lg font-bold flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 backface-hidden rotate-y-180">
          <div className="p-4 text-center transform rotate-y-180 scale-x-[-1]">
          {index === 0 
            ? "Career Craft, in partnership with MASQ, conducted a three-week consulting workshop for 150+ students, led by industry experts and IIM alumni. The program received an overwhelming response, strengthening Career Craft's mission to equip future leaders with industry-relevant skills." 
            : "Career Craft conducted a two-week consulting workshop for 200+ IIM Nagpur students, receiving an overwhelmingly positive response. This collaboration strengthens Career Craft's presence in top B-schools and reinforces its commitment to bridging academia and industry."}
          </div>
          </div>

          </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      </div>
    );
};


export default GallerySection;