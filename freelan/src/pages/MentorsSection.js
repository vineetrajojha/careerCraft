import React, { useEffect, useRef } from 'react';
import logo1 from '../features/common/images/logo1.jpeg'; // Adjust path to your image file
import logo2 from '../features/common/images/logo2.jpeg';
import logo3 from '../features/common/images/logo3.jpeg';
import logo4 from '../features/common/images/logo4.jpeg';

const MentorsSection = () => {
  const logos = [logo1, logo2, logo3, logo4];
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

    const logoElements = document.querySelectorAll('.logo-container');
    logoElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#E6A06C] py-16 font-outfit" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-[#4A3F35] md:text-5xl text-4xl font-bold text-center mb-12 font-outfit animate-fade-in-down">
          Our Mentors are from
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center logo-container opacity-0 transform translate-y-4 transition-all duration-700 ease-out hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-full p-4 w-48 h-48 flex items-center justify-center shadow-lg transition-transform duration-300 hover:shadow-xl">
                <img
                  src={logo}
                  alt={`Mentor Logo ${index + 1}`}
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
