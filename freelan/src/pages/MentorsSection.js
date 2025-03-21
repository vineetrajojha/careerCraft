import React, { useEffect, useRef } from 'react';
import logo1 from '../features/common/images/niims-logo.png';
import logo2 from '../features/common/images/logo1.png';
import logo3 from '../features/common/images/logo2.png';
import logo4 from '../features/common/images/logo3.png';
import logo5 from '../features/common/images/logo4.png';
import logo6 from '../features/common/images/logo5.png';
import logo7 from '../features/common/images/iim-b.jpg';
import logo8 from '../features/common/images/logo6.png';
import logo9 from '../features/common/images/logo7.png';

const MentorsSection = () => {
  const originalLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
  
//infinite scrolling
  const logos = [...originalLogos, ...originalLogos, ...originalLogos];
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#E6A06C] py-12 sm:py-16 font-outfit" ref={sectionRef}>
      <div className="container">
        <h2 className="text-[#4A3F35] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 font-outfit animate-fade-in-down">
          Our Mentors are from
        </h2>
        
        {/* Outer container with hidden overflow */}
        <div className="w-full overflow-x-hidden">
          {/* Inner container with extra padding on sides */}
          <div className="flex animate-scroll px-2 sm:px-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-4 lg:mx-6 transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-full p-3 sm:p-4 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 flex items-center justify-center shadow-lg transition-transform duration-300 hover:shadow-xl">
                  <img
                    src={logo}
                    alt={`Mentor Logo ${(index % originalLogos.length) + 1}`}
                    className="w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default MentorsSection;