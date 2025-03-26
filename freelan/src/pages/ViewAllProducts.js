import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import Navbar from '../features/common/Navbar';
import Footer from '../features/common/Footer';

const ViewAllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  const products = [
    {
      id: 1,
      image: "/products/adobe.png", // https://i.postimg.cc/KkYCbJ3y/PHOTO-2025-03-16-16-00-24.jpg
      title: "Adobe Alchemy: Turn Images into Art with Photoshop",
      description: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools. ",
      fullDescription: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools. Learn photo retouching, graphic creation, and advanced editing techniques from expert mentors. Perfect for students and professionals looking to enhance their creative expertise.",
      productDetails: [
        "What Can You Expect from the Adobe Alchemy: Turn Images into Art with Photoshop Workshop?",
        "Master the art of digital editing and design with industry-leading tools and expert guidance.",
        "1. Photo Retouching Mastery – Learn professional techniques to enhance and refine images.",
        "2.	Graphic Creation & Design – Develop eye-catching visuals using Photoshop’s powerful features.",
        "3.	Advanced Editing Techniques – Explore layers, masks, filters, and effects to elevate your designs.",
        "4.	Hands-On Learning – Gain practical experience through real-world projects and expert mentorship."
      ],
      whyEnroll: [
        "1.	Industry-Relevant Skills – Learn in-demand Photoshop techniques used by professionals.",
        "2.	Boost Creativity & Career Prospects – Enhance your portfolio and open doors to creative opportunities.",
        "3.	Expert-Led Training – Learn from seasoned designers with real-world experience.",
        "4.	Applicable Across Fields – Perfect for photographers, marketers, content creators, and designers.",
        "5.	Practical & Actionable Knowledge – Walk away with skills you can immediately apply.",
        "Take your creativity to the next level—transform images into art with Photoshop!"
      ],
      price: "₹11,499"
    },
    {
      id: 2,
      image: "/products/The-Entrepreneur-Playbook.png",
      title: "The Entrepreneur’s Playbook: Mastering Business Creation and Growth",
      description: "A comprehensive workshop designed to guide aspiring entrepreneurs through the fundamentals of building and scaling a successful business. Learn essential strategies for market research, business ... ",
      fullDescription: "A comprehensive workshop designed to guide aspiring entrepreneurs through the fundamentals of building and scaling a successful business. Learn essential strategies for market research, business modeling, funding, and growth from industry experts. Perfect for students and professionals looking to turn ideas into thriving ventures.",
      productDetails: [
        "What Can You Expect from The Entrepreneur’s Playbook: Mastering Business Creation and Growth Workshop?",
        "Gain the knowledge and skills needed to build, launch, and scale a successful business with expert guidance.",
        "1.	Market Research & Opportunity Identification – Learn how to analyze markets and uncover profitable business opportunities.",
        "2.	Business Modeling & Strategy – Develop a solid business plan with proven frameworks for long-term success.",
        "3.	Funding & Investment Insights – Understand funding options, pitching strategies, and securing investors.",
        "4.	Growth & Scalability Tactics – Master strategies to expand your business and achieve sustainable growth."
      ],
      whyEnroll: [
        "1.	Turn Ideas into Reality – Learn how to transform your vision into a thriving business.",
        "2.	Expert-Led Training – Gain insights from industry leaders and successful entrepreneurs.",
        "3.	Real-World Applications – Apply proven strategies to launch and scale your venture.",
        "4.	Valuable Networking Opportunities – Connect with like-minded entrepreneurs and mentors.",
        "5.	Practical & Actionable Knowledge – Walk away with strategies you can implement immediately.",
        "Take the first step toward building your dream business—enroll now!"
      ],
      price: "₹11,499"
    },
    {
      id: 3,
      image: "/products/the-influencer-playbook.png",
      title: "The Influencer’s Playbook: Build, Brand, and Influence",
      description: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work. Learn from industry experts how to create impactful content, grow your online presence and turn creativity into influence.",
      fullDescription: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work. Learn from industry experts how to create impactful content, grow your online presence, and turn creativity into influence. Ideal for aspiring creators and professionals looking to stand out in the digital world.",
      productDetails: [
        "What Can You Expect from The Influencer’s Playbook: Build, Brand, and Influence Workshop?",
        "Master the art of content creation, audience engagement, and personal branding to grow your influence online.",
        "1.	Brand Building & Positioning – Learn how to craft a unique personal brand that stands out.",
        "2.	Content Creation Strategies – Develop high-impact content that resonates with your audience.",
        "3.	Audience Growth & Engagement – Master social media strategies to expand your reach and build a loyal community.",
        "4.	Monetization & Revenue Streams – Discover ways to turn your influence into income through sponsorships, collaborations, and digital products."
      ],
      whyEnroll: [
        "1.	Build a Strong Personal Brand – Establish credibility and authority in your niche.",
        "2.	Master Social Media Growth – Learn proven strategies to gain followers and boost engagement.",
        "3.	Learn from Industry Experts – Gain insights from top influencers and digital marketing professionals.",
        "4.	Monetize Your Content – Explore multiple revenue streams and transform your passion into profit.",
        "5.	Practical & Actionable Takeaways – Walk away with strategies you can apply immediately."
        
      ],
      price: "₹11,499"
    },
    {
      id: 4,
      image: "/products/data-science.png",
      title: "Data Science 360: A Complete Journey into Data-Driven Excellence",
      description: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry...",
      fullDescription: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry experts. Perfect for students and professionals looking to build a strong foundation in data-driven decision-making.",
      productDetails: [
        "What Can You Expect from Data Science 360: A Complete Journey into Data-Driven Excellence Workshop?",
        "Gain a comprehensive understanding of data science, from fundamental concepts to advanced techniques, with expert-led training.",
        "1.	Data Analysis & Processing – Learn how to clean, organize, and analyze data for valuable insights.",
        "2.	Machine Learning Fundamentals – Understand key ML concepts and how to apply them to real-world problems.",
        "3.	Data Visualization Techniques – Master tools and methods to present data in meaningful ways.",
        "4.	Practical Hands-On Projects – Work on real datasets to apply your learning and build a strong portfolio."
      ],
      whyEnroll: [
        "1.	Build a Strong Data Science Foundation – Learn essential skills for a career in data-driven industries.",
        "2.	Stay Ahead in a Data-Centric World – Gain expertise in one of the most in-demand fields today.",
        "3.	Expert-Led Training – Learn from experienced data scientists and industry professionals.",
        "4.	Hands-On Learning Approach – Apply concepts through practical exercises and projects",
        "5.	Versatile Career Opportunities – Open doors to roles in analytics, AI, business intelligence, and more.",
        "Unlock the power of data—start your journey into data science today!"
        
      ],
      price: "₹8,999"
    },
    {
      id: 5,
      image: "/products/intelligent-AI-app-and-web.png",
      title: "Intelligent Creation: Master AI-Driven App and Web Development",
      description: "Explore the power of AI in app and web development with this expert-led workshop. Learn how to integrate AI tools, enhance functionality, and build intelligent digital... ",
      fullDescription: "Explore the power of AI in app and web development with this expert-led workshop. Learn how to integrate AI tools, enhance functionality, and build intelligent digital solutions. Ideal for developers, students, and tech enthusiasts looking to stay ahead in the ever-evolving tech landscape.",
      productDetails: [
        "What Can You Expect from Intelligent Creation: Master AI-Driven App and Web Development Workshop?",
        "Learn how to integrate AI into app and web development to create smarter, more efficient digital solutions.",
        "1.	AI-Powered Development – Discover how to enhance apps and websites with AI-driven features.",
        "2.	Automation & Smart Functionality – Learn to optimize performance and streamline processes using AI tools.",
        "3.	Real-World Applications – Explore case studies and hands-on projects to apply AI in development.",
        "4.	Cutting-Edge Tools & Frameworks – Get hands-on experience with industry-leading AI technologies."
      ],
      whyEnroll: [
        "1.	Stay Ahead in Tech Innovation – Master AI integration and future-proof your development skills.",
        "2.	Boost Career Opportunities – Gain expertise in one of the most sought-after fields in tech.",
        "3.	Expert-Led Learning – Learn from experienced developers and AI professionals.",
        "4.	Hands-On, Practical Approach – Work on real projects to apply AI-driven development techniques.",
        "5.	Versatile Skill Set – Ideal for developers, students, and tech enthusiasts looking to build next-gen applications.",
        "Transform the way you develop—unlock the potential of AI in app and web development today!"
        
      ],
      price: "₹11,499"
    },
    {
      id: 6,
      image: "/products/Prompting-with-Precision.png",
      title: "Prompting with Precision: A Complete Guide to AI Communication",
      description: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for...",
      fullDescription: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for content creation and automation. Perfect for professionals, creators, and tech enthusiasts eager to leverage AI to its full potential.",
      productDetails: [
        "What Can You Expect from Prompting with Precision: A Complete Guide to AI Communication Workshop?",
        "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "1.	Prompt Engineering Fundamentals – Understand how to structure prompts to get accurate and relevant AI responses.",
        "2.	Response Optimization Techniques – Learn how to refine AI-generated outputs for better efficiency and accuracy.",
        "3.	AI for Content Creation – Explore how AI can enhance writing, brainstorming, and creative workflows.",
        "4.	Automation & Productivity Boost – Leverage AI tools to streamline tasks and improve efficiency."
      ],
      whyEnroll: [
        "1.	Enhance AI Interaction Skills – Learn to communicate effectively with AI for various applications.",
        "2.	Boost Career & Creativity – Use AI to generate ideas, automate tasks, and enhance productivity.",
        "3.	Expert-Led Training – Gain insights from industry professionals in AI and automation.",
        "4.	Hands-On Learning – Apply techniques through real-world AI-driven exercises.",
        "5.	Versatile Skill Set – Ideal for professionals, creators, and tech enthusiasts across industries.",
        "Unlock the full potential of AI—learn the science of effective prompting today!"
        
      ],
      price: "₹8,499"
    },
    {
      id: 7,
      image: "/products/Market-Mavericks.png",
      title: "Market Mavericks: Learn, Trade, and Thrive",
      description: "Gain the skills to navigate financial markets with confidence. This workshop covers trading strategies, market analysis, and investment insights from industry experts.",
      fullDescription: "Gain the skills to navigate financial markets with confidence. This workshop covers trading strategies, market analysis, and investment insights from industry experts. Ideal for students, professionals, and aspiring traders looking to make informed financial decisions and thrive in the world of trading.",
      productDetails: [
        "Develop a strong foundation in trading and investing with expert-led insights and hands-on strategies.",
        // "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "1.	Trading Strategies & Techniques – Learn proven methods to trade confidently across different markets.",
        "2.	Market Analysis & Insights – Master technical and fundamental analysis to make informed decisions.",
        "3.	Investment Planning & Risk Management – Understand portfolio diversification and risk mitigation strategies.",
        "4.	Real-World Applications – Gain practical experience with live market case studies and simulations."
      ],
      whyEnroll: [
        "1.	Trade with Confidence – Build the knowledge needed to navigate financial markets effectively.",
        "2.	Enhance Financial Literacy – Learn key concepts that empower smarter investment decisions.",
        "3.	Expert-Led Training – Gain insights from seasoned traders and industry professionals.",
        "4.	Hands-On Learning Approach – Apply strategies through interactive exercises and real-world scenarios.",
        "5.	Suitable for All Levels – Ideal for students, professionals, and aspiring traders looking to grow their wealth.",
        "Take control of your financial future—learn, trade, and thrive with Market Mavericks!"
        
      ],
      price: "₹16,499"
    },
    {
      id: 8,
      image: "/products/foreign-language.png",
      title: "Foreign language: Learn German and French ,A1",
      description: "Kickstart your language learning journey with this beginner-friendly workshop. Master the basics of German and French",
      fullDescription: "Kickstart your language learning journey with this beginner-friendly workshop. Master the basics of German and French, including essential vocabulary, grammar, and conversational skills. Perfect for students, professionals, and travel enthusiasts looking to build a strong foundation in both languages.",
      productDetails: [
        "What Can You Expect from Foreign Language: Learn German and French (A1) Workshop?",
        "Build a strong foundation in German and French with an interactive, beginner-friendly learning experience.",
        "1.	Essential Vocabulary & Grammar – Learn fundamental words, phrases, and sentence structures.",
        "2.	Conversational Skills – Develop confidence in speaking and understanding basic dialogues.",
        "3.	Pronunciation & Listening Practice – Improve comprehension with guided exercises and real-life scenarios.",
        "4.	Cultural Insights – Explore the traditions and etiquette of German- and French-speaking regions."
      ],
      whyEnroll: [
        "1.	Kickstart Your Multilingual Journey – Begin learning two widely spoken global languages.",
        "2.	Enhance Career & Travel Opportunities – Gain an edge in international job markets and travel with ease.",
        "3.	Expert-Led Learning – Learn from experienced language instructors with practical teaching methods.",
        "4.	Interactive & Engaging Approach – Participate in speaking exercises, role-plays, and fun activities.",
        "5.	Perfect for Beginners – Designed for students, professionals, and travelers with no prior experience.",
        "Start speaking German and French with confidence—enroll today and begin your language-learning adventure!"
        
      ],
      price: "₹16,499"
    },
    {
      id: 9,
      image: "/products/The-masterclass.png",
      title: "The Masterclass",
      description: "Elevate your career with our expert-led Career Craft Course Bundle, designed to help you succeed in today's competitive world",
      fullDescription: "Elevate your career with our expert-led Career Craft Course Bundle, designed to help you succeed in today's competitive world. Master personal finance to secure your future, digital marketing to boost your career, and AI prompts & automation to stay ahead in the evolving job market. Prepare for GDPI (Group Discussion & Personal Interview) with personalized coaching and learn stock market investment to grow your wealth. With Career Craft, you'll gain the skills and confidence to achieve financial freedom, advance professionally, and ace your dream job interview. Join us today and start shaping your future!",
      productDetails: [
        "What Can You Expect from the AI for Professionals Workshop?",
        "Unlock the power of AI to enhance productivity, streamline workflows, and make smarter decisions.",
        "1.	Hands-On AI Integration – Learn to incorporate AI tools into your daily tasks for efficiency.",
        "2.	Automation & Productivity Boost – Master AI-driven automation to save time and optimize performance.",
        "3.	Data-Driven Decision Making – Use AI insights to enhance business strategies and professional growth.",
        "4.	Real-World Applications – Explore AI’s impact across industries with practical case studies."
      ],
      whyEnroll: [
        "1.	Stay Ahead of the Curve – Gain essential AI skills to remain competitive in the evolving job market.",
        "2.	Boost Career Prospects – Leverage AI to work smarter and improve job efficiency.",
        "3.	Expert-Led Training – Learn from industry professionals with real-world experience.",
        "4.	Versatile Skill Set – Applicable across multiple fields, from marketing to finance and operations.",
        "5.	Practical & Actionable Insights – Walk away with AI strategies you can implement immediately.",
        "Take the next step in your career—embrace AI and stay future-ready! "
        
      ],
      price: "₹8,499"
    },
    {
      id: 10,
      image: "/products/Investment-Banking.jpeg",
      title: "Investment Banking Unlocked: Master the World of High Finance",
      description: "Step into the fast-paced world of investment banking with this expert-led workshop. Learn financial modeling, valuation techniques, and deal structuring from industry professionals.",
      fullDescription: "Step into the fast-paced world of investment banking with this expert-led workshop. Learn financial modeling, valuation techniques, and deal structuring from industry professionals. Perfect for students and professionals looking to break into high finance and gain a competitive edge.",
      productDetails: [
        "Core financial concepts including M&A, IPOs, LBOs, and corporate finance strategies",
        // "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "Practical exposure to financial modeling, valuation techniques, and deal structuring",
        "Hands-on experience with financial statements, pitch books, and due diligence",
        "Career guidance on resume building, networking, and interview preparation",
        // "4.	Real-World Applications – Gain practical experience with live market case studies and simulations."
      ],
      whyEnroll: [
        "•	Gain job-ready skills that top investment banks look for",
        "•	Build a competitive edge with industry-relevant expertise",
        "•	Unlock high-paying career opportunities in investment banking and finance.",
        "•	Learn from experienced professionals with real-world insights",
        "Enroll now to take your first step toward a successful finance career",
        // "Take control of your financial future—learn, trade, and thrive with Market Mavericks!"
        
      ],
      price: "₹6,499"
    },
    {
      id: 11,
      image: "/products/Innovate-Deliver.png",
      title: "Innovate & Deliver: The Complete Product Management Guide",
      description: "Master the art of building and scaling successful products. This workshop covers product strategy, user research, roadmap planning, and go-to-market execution, guided by industry experts.",
      fullDescription: "GMaster the art of building and scaling successful products. This workshop covers product strategy, user research, roadmap planning, and go-to-market execution, guided by industry experts. Ideal for aspiring and current product managers looking to drive innovation and deliver impactful solutions.",
      productDetails: [
        "•	Fundamentals of product strategy and market positioning",
        // "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "•	Techniques for user research, customer insights, and problem-solving",
        "•	Roadmap planning, feature prioritization, and agile methodologies",
        "3.	Investment Planning & Risk Management – Understand portfolio diversification and risk mitigation strategies.",
        "•	Go-to-market strategies and execution for successful product launches"
      ],
      whyEnroll: [
        "•	Develop industry-relevant skills to excel in product management",
        "•	Learn from experts with real-world experience in building successful products",
        "•	Gain a structured approach to product development and innovation",
        "•	Enhance your career prospects in tech, startups, and corporate environments",
        "Enroll now to become a skilled product manager and drive innovation in your industry",
        // "Take control of your financial future—learn, trade, and thrive with Market Mavericks!"
        
      ],
      price: "₹6,499"
    },
    {
      id: 12,
      image: "/products/Consulting-Unleashed.jpeg",
      title: "Consulting Unleashed: From Problem-Solving to Value Creation",
      description: "Develop the mindset and skills of a top-tier consultant. This workshop dives into structured problem-solving, strategic thinking, and client management, equipping",
      fullDescription: "Develop the mindset and skills of a top-tier consultant. This workshop dives into structured problem-solving, strategic thinking, and client management, equipping you with tools to drive business impact. Ideal for students and professionals looking to break into consulting or enhance their analytical approach.",
      productDetails: [
        "•	Frameworks for structured problem-solving and critical analysis",
        // "Master the art of AI communication and learn how to craft effective prompts for optimal results.",
        "•	Strategies for data-driven decision-making and market research.",
        "•	Client management techniques for effective communication and relationship-building",
        "•	Real-world case studies to apply consulting methodologies",
        "4.	Real-World Applications – Gain practical experience with live market case studies and simulations."
      ],
      whyEnroll: [
        "•	Gain industry-relevant skills essential for a successful consulting career",
        "•	Learn from experienced consultants with real-world expertise",
        "•	Build a structured, analytical approach to solving complex business challenges",
        "•	Enhance your career prospects in consulting, strategy, and business leadership",
        "Enroll now to sharpen your consulting skills and create real business impact"
      ],
      price: "₹6,499"
    },
    {
      id: 13,
      image: "/products/FMCG.png",
      title: "Winning in FMCG: Mastering Sales, Distribution, and Growth",
      description: "A comprehensive workshop designed to help you navigate the dynamic FMCG sector. Learn key strategies for sales, distribution, and market expansion from ",
      fullDescription: "A comprehensive workshop designed to help you navigate the dynamic FMCG sector. Learn key strategies for sales, distribution, and market expansion from industry experts. Perfect for aspiring professionals looking to build a strong foundation in FMCG growth and success.",
      productDetails: [
        "•	Key sales strategies for driving growth in the FMCG sector",
        "•	Distribution models and supply chain optimization for market expansion",
        "•	Consumer behavior insights and data-driven decision-making",
        "•	Real-world case studies on successful FMCG brands and strategies",
        //"3.	Investment Planning & Risk Management – Understand portfolio diversification and risk mitigation strategies.",
        //"4.	Real-World Applications – Gain practical experience with live market case studies and simulations."
      ],
      whyEnroll: [
        "•	Develop industry-specific skills crucial for a successful FMCG career",
        "•	Learn from experienced professionals with hands-on market expertise",
        "Build a structured approach to sales, distribution, and brand growth",
        "•	Enhance your career prospects in FMCG sales, marketing, and operations",
        "Enroll now to master the dynamics of FMCG and accelerate your career growth!",
        //"Take control of your financial future—learn, trade, and thrive with Market Mavericks!"
        
      ],
      price: "₹6,499"
    },
    {
      id: 14,
      image: "/products/AI-for-professionals.png",
      title: "AI for professionals",
      description: "Stay ahead in your industry with this expert-led workshop on leveraging AI for efficiency and innovation. Learn how to integrate AI tools into your workflow, automate tasks, and make  data-driven decisions to ",
      fullDescription: "Stay ahead in your industry with this expert-led workshop on leveraging AI for efficiency and innovation. Learn how to integrate AI tools into your workflow, automate tasks, and make data-driven decisions to enhance productivity. Ideal for professionals across various fields looking to harness the power of AI in their careers.",
      productDetails: [
        "How to integrate AI tools into your daily workflow for increased efficiency",
        "Automation techniques to streamline repetitive tasks and boost productivity",
        "Data-driven decision-making strategies using AI-powered insights",
        "Real-world applications of AI across various industries and professions",
        // "3.	Investment Planning & Risk Management – Understand portfolio diversification and risk mitigation strategies.",
        // "4.	Real-World Applications – Gain practical experience with live market case studies and simulations."
      ],
      whyEnroll: [
        "Gain hands-on experience with AI tools relevant to your field",
        "Learn from industry experts with practical insights and real-world case studies.",
        "Stay ahead in the evolving job market by mastering AI-driven strategies",
        "Enhance your career prospects by leveraging AI for smarter work solutions",
        "Enroll now to future-proof your career and unlock the potential of AI in your profession!",
        // "Take control of your financial future—learn, trade, and thrive with Market Mavericks!"
        
      ],
      price: "₹6,499"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-outfit">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#9C4A1A] mb-12">All Workshops</h1>
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="flex flex-col h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                  />
                  
                  <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4">
                    {product.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#C65D34] text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base hover:bg-[#B54D24] transition duration-300"
                    >
                      Buy now
                    </button>
                    <div className="text-white">
                      <FaShoppingCart size={20} className="sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4">
              <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-4xl max-h-[98vh] relative">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-[#9C4A1A] mb-4">
                      {selectedProduct.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-6">
                      {selectedProduct.fullDescription}
                    </p>
                    
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-[#C65D34]">
                        {selectedProduct.price}
                      </span>
                      <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gray-50 rounded-b-3xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                      Product Details:
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.productDetails?.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#C65D34] mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                      Why Enroll in This Workshop?
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.whyEnroll?.map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#C65D34] mr-2">•</span>
                          <span className="text-gray-700">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ViewAllProducts;