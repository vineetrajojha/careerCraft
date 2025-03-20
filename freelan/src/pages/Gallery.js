import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Gallery = () => { 
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    '/image4.jpg',
  ];    
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={1000}
          swipeable={true}
          dynamicHeight={true}
          stopOnHover={false}
        >
          {images.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
