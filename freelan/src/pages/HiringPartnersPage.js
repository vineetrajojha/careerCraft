import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../features/common/Footer';
import Navbar from '../features/common/Navbar';

// Sample partner data - replace with actual logos when provided
const partners = [
  {
    id: 1,
    name: 'BTW Foods',
    logo: '/partners-logos/logo-1.png',
    description: 'Leading food technology company',
  },
  {
    id: 2,
    name: 'Joyous Trendz Limited',
    logo: '/partners-logos/logo-2.png',
    description: 'Innovative fashion and lifestyle brand',
  },
  {
    id: 3,
    name: 'Haldiram',
    logo: '/partners-logos/logo-3.png',
    description: 'Iconic Indian food and confectionery company',
  },
  {
    id: 4,
    name: 'Zedoka.ai',
    logo: '/partners-logos/logo-4.png',
    description: 'Advanced AI solutions provider',
  },
  {
    id: 5,
    name: 'Kuku FM',
    logo: '/partners-logos/logo-5.png',
    description: 'Leading audio content platform',
  },
  {
    id: 6,
    name: 'Delhivery',
    logo: '/partners-logos/logo-6.png',
    description: 'India\'s largest logistics company',
  },
  {
    id: 7,
    name: 'Netmeds',
    logo: '/partners-logos/logo-7.png',
    description: 'Leading online pharmacy platform',
  },
  {
    id: 8,
    name: 'Ziggly',
    logo: '/partners-logos/logo-8.png',
    description: 'Innovative tech solutions provider',
  },
  {
    id: 9,
    name: 'Sigma Flow India',
    logo: '/partners-logos/logo-9.png',
    description: 'Process automation and consulting',
  },
  {
    id: 10,
    name: 'Hometrust',
    logo: '/partners-logos/logo-10.png',
    description: 'Trusted home services platform',
  }
];

function HiringPartnersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextSlide = () => {
    const maxSlides = Math.ceil(partners.length / 2) - 1;
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(partners.length / 2) - 1;
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        const maxSlides = Math.ceil(partners.length / 2) - 1;
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#F8E5D8] to-[#E1A16D] mt-16 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Our Hiring Partners
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading companies to provide our students with excellent career opportunities.
          </p>
        </div>
      </div>

      {/* Partners Carousel Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative">
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg text-[#E1A16D] hover:text-[#d89359] focus:outline-none"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg text-[#E1A16D] hover:text-[#d89359] focus:outline-none"
              aria-label="Next slide"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="w-1/2 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="p-8 flex items-center justify-center h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            e.target.src = '/logo1.png';
                          }}
                        />
                      </div>
                      <div className="p-6 flex-grow bg-white">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-[#E1A16D]">{partner.name}</h3>
                        <p className="text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-[#E1A16D]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership CTA Section */}
      <div className="bg-gradient-to-r from-[#F8E5D8] to-[#E1A16D] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Become a Hiring Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our network of hiring partners and connect with talented professionals ready for their next career move.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E1A16D] hover:bg-[#d89359] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HiringPartnersPage; 