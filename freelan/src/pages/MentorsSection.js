import React from 'react';
import logo1 from '../features/common/images/logo1.jpeg'; // Adjust path to your image file
import logo2 from '../features/common/images/logo2.jpeg';
import logo3 from '../features/common/images/logo3.jpeg';
import logo4 from '../features/common/images/logo4.jpeg';

const MentorsSection = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="bg-gray-200 py-4">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-8 text-lime-900 font-roboto">Our Mentors are from</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mb-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Mentor Logo ${index + 1}`}
            className="w-full h-28 sm:w-full sm:h-24 lg:w-full lg:h-60 object-contain mx-auto"
          />
        ))}
      </div>
      <p className="text-center text-lg font-semibold text-gray-700 font-serif ">and many more...</p>
    </div>
  );
};

export default MentorsSection;
