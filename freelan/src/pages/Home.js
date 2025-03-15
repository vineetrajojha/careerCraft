import { useState , useRef} from "react";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css/bundle';
import FAQSection from "./FaqSection";
import MentorsSection from "./MentorsSection";

const testimonials = [
    { name: "Vaishali Sharma", text: "The content on CareerCraft is up-to-date and presented in a clear, engaging manner. The support team is incredibly helpful. This platform is a fantastic tool for anyone looking to advance their skills.", image: "/vaishali.jpg" },
    { name: "Ragini Malhotra", text: "The courses at CareerCraft are thorough and well-designed. I appreciate the real-world examples and hands-on projects that enhance learning. It’s a fantastic investment for anyone looking to improve their skills.", image: "/ragini.jpg" },
    { name: "Kamal Mehra", text: "CareerCraft offers top-notch courses with practical exercises that are directly applicable to my job. It’s helped me build new skills efficiently and effectively. Excellent resource for career advancement!", image: "/kamal.jpg" },
    { name: "Himanshi Singh", text: "The range of topics covered by CareerCraft is impressive, from technical skills to soft skills. The interactive elements keep me engaged, and the feedback is constructive.", image: "/himanshi.jpg" },
    { name: "Istekhar Alam", text: "My expectations were exceeded by CareerCraft. Learning is enjoyable since the courses are well-structured and include real-world applications. Additionally, the support staff responds quickly. A must-try for individuals who are committed to improving their skills!", image: "/istekhar.jpg" },
    { name: "Ajay Pawaria", text: "The variety of courses and hands-on approach at CareerCraft set it apart. It’s intuitive, effective, and helps me stay competitive in my field. The investment in my career has been worthwhile.", image: "/ajay.jpg" },
    { name: "Saurav Kumar", text: "After a month of use, CareerCraft has really changed my life. Their hands-on activities and interactive sessions make upskilling a breeze. Strongly advised for anyone trying to grow in their field!", image: "/sourav.jpg" }
  ];

function Home() {
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  // const toggleTestimonials = () => {
  //   setShowAllTestimonials(!showAllTestimonials);
  // };
  const topRef = useRef(null);

  const scrollToTop = ()=>{
    topRef.current.scrollIntoView({behavior : 'smooth'});
  }
  
    return ( 
        <div ref = {topRef}>
            <NavBar  >
           
            
            <MentorsSection />
            
            <ProductList></ProductList>
            
                
            </NavBar>
            <section className="text-center p-10 bg-gray-700 py-20 text-white">
  <h2 className="text-4xl font-bold mb-6 font-roboto">What Our <span className='text-yellow-300'>  Students</span> Say</h2>
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20} // Adjust space between slides
    slidesPerView={1} // Default to 1 slide for smaller screens
    breakpoints={{
      640: {
        slidesPerView: 1, // 1 slide for small screens
      },
      768: {
        slidesPerView: 2, // 2 slides for medium screens
        spaceBetween: 30, // Space between slides
      },
      1024: {
        slidesPerView: 3, // 3 slides for larger screens
        spaceBetween: 30, // Space between slides
      },
    }}
  >
    {testimonials.map((testimonial, index) => (
      <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md">
        <img src={testimonial.image} alt={testimonial.name} className="h-52 w-40 mx-auto mb-4 object-cover" />
        <p className="text-lg italic text-gray-700 mb-4">"{testimonial.text}"</p>
        <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
<div>
  <FAQSection />
  <div className="text-center mt-4 mb-2">
            <button
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none  "
            >
              Go to Top
            </button>
          </div>
</div>

            <Footer></Footer>
        </div>
     );
}

export default Home;