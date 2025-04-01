import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync } from '../features/cart/cartSlice';
import { selectLoggedInUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { fetchProductsByFilters } from "../features/product/productAPI";

const ProductSection = () => {
  const [products , setProduct] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Process any pending cart actions after login
  useEffect(() => {
    if (location.state?.addToCart && user) {
      handleAddToCart(null, location.state.addToCart, true);
      navigate(location.pathname, { replace: true, state: {} });
    } 
    else if (location.state?.buyNow && user) {
      handleBuyNow(null, location.state.buyNow, true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [user, location.state]);


  // const products = [
  //   {
  //     id: 67eb79c7492aec1e72c44f50,
  //     thumbnail: "/products/adobe.png",
  //     title: "Adobe Alchemy: Turn Images into Art with Photoshop",
  //     description: "A hands-on workshop designed to equip you with essential editing and design skills using industry-standard tools.",
  //     discountPrice: 11499,
  //     price: 14999,
  //     brand: "Adobe Workshop",
  //     image: "/products/adobe.png"
  //   },
  //   {
  //     id: 67eb7bba2bba14a277cc4db1,
  //     description: "Elevate your career with our expert-led Career Craft Course Bundle, designed to help you succeed in today's competitive world. Master personal finance to secure your fut...",
  //     discountPrice: 8499,
  //     price: 11999,
  //     thumbnail: "/products/AI-for-professionals.png", 
  //     title: "AI for professionals",
  //     brand: "AI for professionals Workshop",
  //     image: "/products/ai-for-professionals.png"
  //   },
  //   {
  //     id: 67eb7dc72bba14a277cc4db4,
  //     thumbnail: "/products/the-influencer-playbook.png",
  //     title: "The Influencer's Playbook: Build, Brand, and Influence",
  //     description: "A power-packed workshop designed to help content creators establish a strong brand, engage audiences, and monetize their work.",
  //     discountPrice: 11499,
  //     price: 14999,
  //     brand: "Influencer Marketing Workshop",
  //     image: "/products/the-influencer-playbook.png"
  //   },
  //   {
  //     id: 67eb7df22bba14a277cc4db5,
  //     thumbnail: "/products/data-science.png",
  //     title: "Data Science 360: A Complete Journey into Data-Driven Excellence",
  //     description: "Master the fundamentals of data science with this all-inclusive workshop. Learn data analysis, machine learning, and visualization techniques from industry experts.",
  //     discountPrice: 8499,
  //     price: 11999,
  //     brand: "Data Science Workshop",
  //     image: "/products/data-science.png"
  //   },
  //   {
  //     id: 67eb7e3a2bba14a277cc4db6,
  //     thumbnail: "/products/intelligent-AI-app-and-web.png",
  //     title: "Intelligent Creation: Master AI-Driven App and Web Development",
  //     description: "Explore the power of AI in app and web development with this expert-led workshop.",
  //     discountPrice: 11499,
  //     price: 14999,
  //     brand: "AI Development Workshop",
  //     image: "/products/intelligent-AI-app-and-web.png"
  //   },
  //   {
  //     id: 67eb7e722bba14a277cc4db7,
  //     thumbnail: "/products/Prompting-with-Precision.png",
  //     title: "Prompting with Precision: A Complete Guide to AI Communication",
  //     description: "Learn how to communicate effectively with AI and get the best results. This workshop covers prompt engineering, response optimization, and practical applications for content creation and automation.",
  //     discountPrice: 8499,
  //     price: 11999,
  //     brand: "AI Communication Workshop",
  //     image: "/products/Prompting-with-Precision.png"
  //   }
  // ];

  // const products = [
  //       {
  //           "title": "Digital Marketing Mastery Course!",
  //           "description": "Unlock your potential to craft compelling online campaigns\n- Drive real results and supercharge your career\n- Expert-led program covering the latest strategies, tools, and techniques\n- Master key areas of digital marketing, including:\n    - Social media marketing\n    - Search Engine Optimization (SEO)\n    - Email marketing\n    - Analytics and data-driven decision making\n- Learn how to craft a winning digital marketing strategy that sets you apart\n- Join Career Craft today and start building the skills to shape your future!",
  //           "price": 2999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SL1500_.jpg",
  //           "images": [
  //               "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SL1500_.jpg",
  //               "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SL1500_.jpg",
  //               "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SL1500_.jpg"
  //           ],
  //           "highlights": [
  //               "https://motorolain.vtexassets.com/arquivos/ids/158526-800-auto?width=800&height=auto&aspect=true"
  //           ],
  //           "deleted": true,
  //           "discountPrice": 1499,
  //           "id": "66b06bbc7bc26c7073cd6c21"
  //       },
  //       {
  //           "title": "Excel Personal Finances",
  //           "description": "Unlock Financial Freedom with Career Craft Company\n\nMaster your money, maximize your career potential!\n\nOur comprehensive personal finance course is designed to help you:\n\n- Develop a personalized budget and saving strategy\n- Invest wisely and grow your wealth\n- Manage debt and boost your credit score\n- Make informed financial decisions to achieve your career goals\n\nTransform your financial life and unlock new opportunities with Career Craft Company. Enroll now and start building the future you deserve!",
  //           "price": 1999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/90vXjtsv/excel.jpg",
  //           "images": [
  //               "https://i.postimg.cc/90vXjtsv/excel.jpg",
  //               "https://i.postimg.cc/90vXjtsv/excel.jpg",
  //               "https://i.postimg.cc/90vXjtsv/excel.jpg"
  //           ],
  //           "highlights": [
  //               "https://i.postimg.cc/90vXjtsv/excel.jpg"
  //           ],
  //           "deleted": true,
  //           "discountPrice": 999,
  //           "id": "66b0f95b7bc26c7073cd6f6c"
  //       },
  //       {
  //           "title": " Decoding GDPI",
  //           "description": "Master the Art of Group Discussions and Personal Interviews (GDPI)\n\nUnlock your dream job with our comprehensive online course, specifically designed to help you excel in Group Discussions and Personal Interviews (GDPI). Our expert-led program covers:\n\n- Essential communication skills to articulate your thoughts confidently\n- Strategies to tackle complex group discussion topics and case studies\n- Techniques to build a strong personal brand and impression\n- Mock interviews and personalized feedback to refine your performance\n- Insights into the latest industry trends and expectations\n\nWith our GDPI course, you'll gain the skills and confidence to:\n\n- Effectively communicate your ideas and opinions\n- Stand out in a competitive group setting\n- Showcase your strengths and achievements\n- Ace your personal interview and secure your dream job\n\nJoin our online course today and transform your GDPI experience!",
  //           "price": 1999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/MZDV7c1q/gdpi.jpg",
  //           "images": [
  //               "https://i.postimg.cc/MZDV7c1q/gdpi.jpg",
  //               "https://i.postimg.cc/MZDV7c1q/gdpi.jpg",
  //               "https://i.postimg.cc/MZDV7c1q/gdpi.jpg"
  //           ],
  //           "highlights": [
  //               "https://i.postimg.cc/MZDV7c1q/gdpi.jpg"
  //           ],
  //           "deleted": true,
  //           "discountPrice": 999,
  //           "id": "66b0f9ec7bc26c7073cd6f74"
  //       },
  //       {
  //           "title": "The Masterclass",
  //           "description": "Unlock Your Full Potential with Career Craft\n\nAt Career Craft, we believe in empowering you to achieve your goals. That's why we've curated a comprehensive online course bundle, tailored to help you succeed in your career and beyond.\n\nOur Career Craft Course Bundle includes:\n\n1. Personal Finance Mastery: Take control of your finances and create a secure future.\n2. Digital Marketing Mastery: Supercharge your career with our expert-led program.\n3. AI Prompts and Automation: Stay ahead of the curve with AI-driven tools.\n4. GDPI (Group Discussion and Personal Interview) Prep: Ace your dream job interview with our personalized coaching.\n5. Stock Market Investing: Grow your wealth with our expert guidance.\n\nWith Career Craft, you'll gain the skills and confidence to:\n\n- Achieve financial freedom and security\n- Enhance your career prospects and opportunities\n- Stay ahead in the AI-driven job market\n- Crack your dream job interview with confidence\n- Grow your wealth through smart investing\n\nJoin the Career Craft community today and start building the skills to shape your future!",
  //           "price": 9999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/1XBND3bj/mc1.png",
  //           "images": [
  //               "https://i.postimg.cc/1XBND3bj/mc1.png",
  //               "https://i.postimg.cc/1XBND3bj/mc1.png",
  //               "https://i.postimg.cc/1XBND3bj/mc1.png"
  //           ],
  //           "highlights": [
  //               "What Can You Expect from the Career Craft Masterclass? Our Career Craft Workshop Bundle is designed to empower you with a diverse range of essential skills to thrive in today’s competitive landscape. You’ll gain: 1. Comprehensive Knowledge Across Multiple Domains From personal finance and digital marketing to AI tools, stock market investing, and interview preparation, this workshop covers it all. 2. Practical, Industry-Relevant Expertise Master skills like financial planning, crafting digital marketing campaigns, leveraging AI for productivity, acing job interviews, and building wealth through the stock market. 3. Tailored Guidance to Reach Your Goals Whether you aim to secure financial independence, enhance career prospects, or navigate the AI- driven world, this workshop is your roadmap to success.  Why Enroll in the Career Craft Masterclass? 1. Holistic Skill Development Unlike niche workshops, Career Craft equips you with a versatile set of skills relevant across industries and roles. 2. Future-Proof Your Career With AI tools and automation becoming essential, staying ahead in the AI-driven market has never been more critical. 3. Ace Your Job Interviews Get personalized coaching for group discussions and interviews, boosting your confidence to land your dream job. 4. Achieve Financial Freedom Learn to master personal finance and grow wealth through smart stock market investments. 5. Expert-Led Training Across Fields The workshop features top-notch instructors and practical insights to ensure you’re industry-ready. 6. Community and Support Become part of a dynamic community that shares knowledge, networks, and motivates you to achieve your full potential. Start your journey with the Career Craft Masterclass today—empowering you to craft a career and life you aspire to!  Take control of your finances with the Career Craft Company Personal Finance Workshop. Whether you’re looking to save for a major goal, climb out of debt, or make smarter investments, this Workshop will guide you every step of the way."
  //           ],
  //           "deleted": false,
  //           "discountPrice": 4999,
  //           "id": "66b0fa517bc26c7073cd6f83"
  //       },
  //       {
  //           "title": " Decoding GDPI ",
  //           "description": "Master the Art of Group Discussions and Personal Interviews (GDPI)\n\nUnlock your dream job with our comprehensive online course, specifically designed to help you excel in Group Discussions and Personal Interviews (GDPI). Our expert-led program covers:\n\n- Essential communication skills to articulate your thoughts confidently\n- Strategies to tackle complex group discussion topics and case studies\n- Techniques to build a strong personal brand and impression\n- Mock interviews and personalized feedback to refine your performance\n- Insights into the latest industry trends and expectations\n\nWith our GDPI course, you'll gain the skills and confidence to:\n\n- Effectively communicate your ideas and opinions\n- Stand out in a competitive group setting\n- Showcase your strengths and achievements\n- Ace your personal interview and secure your dream job\n\nJoin our online course today and transform your GDPI experience!",
  //           "price": 1999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/xdBGdqSG/GDPI-2.png",
  //           "images": [
  //               "https://i.postimg.cc/xdBGdqSG/GDPI-2.png",
  //               "https://i.postimg.cc/xdBGdqSG/GDPI-2.png",
  //               "https://i.postimg.cc/xdBGdqSG/GDPI-2.png"
  //           ],
  //           "highlights": [
  //               "What can you expect from this workshop?  You'll master essential communication skills and gain confidence in articulating your thoughts. This course will guide you through strategies to tackle complex group discussion topics and case studies while building a strong personal brand. With mock interviews and personalized feedback, you'll refine your performance to stand out in a competitive environment. Additionally, you'll gain insights into the latest industry trends and expectations, preparing you for real-world scenarios. This course combines the art of effective communication with practical strategies to help you excel in group discussions and personal interviews. By focusing on both skill development and industry insights, you'll emerge as a well-prepared professional in today’s job market.  Why Enroll in GDPI workshop?  Master Communication Skills: Learn to articulate ideas confidently and effectively. Excel in Group Discussions: Gain strategies to handle complex topics and case studies.  Ace Personal Interviews: Develop techniques to highlight strengths and handle tough questions. Build a Personal Brand: Understand how to create a lasting impression. Receive Personalized Feedback: Improve through mock interviews and expert insights.  Stay Industry-Ready: Learn about the latest trends and recruiter expectations. Boost Confidence: Gain skills to stand out in competitive job selection processes.  Online GDPI Workshop   Ideal For: Students (UG, PG, MBA Aspirants), Freshers &amp; Beginners  Syllabus: 1. Acing Group Discussions: A Comprehensive Guide. 2. Understanding the Purpose of Group Discussions 3. Preparing for Effective Participation  4. Actively Listening and Engaging 5. Offering Meaningful Contributions 6. Navigating Challenging Dynamics 7. Demonstrating Leadership and Teamwork 8. Acing Personal Interviews 9. Prepare Thoroughly 10. Dress for Success 11. Arrive Early and Confident 12. Engage in Meaningful Conversation 13. Highlight Your Strengths 14. Handle Tough Questions Gracefully 15. Follow Up and Express Gratitude 16. The Importance of a Great Resume 17. Resume Basics: Key Components and Structure 18. Crafting a Compelling Personal Summary 19. Highlighting Relevant Skills and Experiences 20. Optimizing for Applicant Tracking Systems 21. Formatting and Design Considerations 22. Tailoring Your Resume for Each Job Application 23. Proofreading and Final Touches"
  //           ],
  //           "deleted": false,
  //           "discountPrice": 999,
  //           "id": "66b1a5914d522b7c1eb74a77"
  //       },
  //       {
  //           "title": "Digital Marketing Mastery Course!!",
  //           "description": "Unlock your potential to craft compelling online campaigns\n- Drive real results and supercharge your career\n- Expert-led program covering the latest strategies, tools, and techniques\n- Master key areas of digital marketing, including:\n    - Social media marketing\n    - Search Engine Optimization (SEO)\n    - Email marketing\n    - Analytics and data-driven decision making\n- Learn how to craft a winning digital marketing strategy that sets you apart\n- Join Career Craft today and start building the skills to shape your future!",
  //           "price": 2999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/XvW2ByF9/Digital-Marketing-Poster.jpg",
  //           "images": [
  //               "https://i.postimg.cc/XvW2ByF9/Digital-Marketing-Poster.jpg",
  //               "https://i.postimg.cc/XvW2ByF9/Digital-Marketing-Poster.jpg",
  //               null,
  //               "https://i.postimg.cc/XvW2ByF9/Digital-Marketing-Poster.jpg"
  //           ],
  //           "highlights": [
  //               "https://i.postimg.cc/XvW2ByF9/Digital-Marketing-Poster.jpg"
  //           ],
  //           "deleted": true,
  //           "discountPrice": 1499,
  //           "id": "66b1a6674d522b7c1eb74ace"
  //       },
  //       {
  //           "title": "Excel Personal Finances!",
  //           "description": "Unlock Financial Freedom with Career Craft Company\n\nMaster your money, maximize your career potential!\n\nOur comprehensive personal finance course is designed to help you:\n\n• Develop a personalized budget and saving strategy.\n\n• Invest wisely and grow your wealth.\n\n• Manage debt and boost your credit score.\n\n• Make informed financial decisions to achieve your career goals.\n\nTransform your financial life and unlock new opportunities with Career Craft Company. Enroll now and start building the future you deserve!",
  //           "price": 1999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/HW9yttQP/pf-1.png",
  //           "images": [
  //               "https://i.postimg.cc/HW9yttQP/pf-1.png",
  //               "https://i.postimg.cc/HW9yttQP/pf-1.png",
  //               "https://i.postimg.cc/HW9yttQP/pf-1.png"
  //           ],
  //           "highlights": [
  //               "What can you expect from this workshop? This Workshop will empower you to take charge of your financial future by mastering essential money management skills. You’ll learn to: Develop a Personalized Budget and Saving Strategy: Create a financial plan tailored to your lifestyle and goals. Invest Wisely to Grow Wealth: Understand investment principles and opportunities that help your money work for you.  Manage Debt and Boost Your Credit Score: Learn practical ways to reduce debt and improve your financial reputation.  Make Informed Financial Decisions: Gain the knowledge to align your financial choices with your career and life aspirations. By the end of this Workshop, you'll have the tools and confidence to achieve financial freedom and secure your future. Why Enroll in Personal Finance workshop? Achieve Financial Independence: Learn how to make your money work for you and create a life of stability and opportunity. Tailored Financial Planning: Equip yourself with skills to design a budget and strategy that suits your goals. Gain Long-Term Wealth: Understand the fundamentals of smart investing to secure your future.  Master Debt Management: Tackle debts effectively and improve your credit health to unlock new opportunities. Career Advancement Through Financial Stability: Confident financial management can help you focus on maximizing your career potential.  Take control of your finances with the Career Craft Company Personal Finance Workshop. Whether you’re looking to save for a major goal, climb out of debt, or make smarter investments, this Workshop will guide you every step of the way.  Online Personal Finance Workshop   Ideal For: Students ( UG , PG, MBA Aspirants), Freshers &amp; Beginners  Syllabus: 1. Introduction to Personal Finance 2. Budgeting and Expense Tracking 3. Savings and Investment Strategies 4. Debt Management and Repayment 5. Credit Score and Credit Report Analysis 6. Retirement Planning 7. Insurance and Risk Management 8. Power of Compounding 9. Importance of Time and Consistency 10. Exploring the Money Myth of the Indian Middle Class 11. Achieving Financial Independence 12. Smart Budgeting 13. Understanding Your Expenses and Incomes 14. Creating a Balanced Budget 15. Strategies for Monthly Savings 16. Automating Monthly Savings 17. Budgeting for Unexpected Expenses 18. Investing for Future Goals"
  //           ],
  //           "deleted": false,
  //           "discountPrice": 999,
  //           "id": "66b1a8514d522b7c1eb74b6f"
  //       },
  //       {
  //           "title": "Digital Marketing Course",
  //           "description": "Unlock your potential to craft compelling online campaigns\n- Drive real results and supercharge your career\n- Expert-led program covering the latest strategies, tools, and techniques\n- Master key areas of digital marketing, including:\n    - Social media marketing\n    - Search Engine Optimization (SEO)\n    - Email marketing\n    - Analytics and data-driven decision making\n- Learn how to craft a winning digital marketing strategy that sets you apart\n- Join Career Craft today and start building the skills to shape your future!",
  //           "price": 2999,
  //           "discountPercentage": 50.01,
  //           "thumbnail": "https://i.postimg.cc/sxYMsgV2/dm.png",
  //           "images": [
  //               "https://i.postimg.cc/sxYMsgV2/dm.png",
  //               "https://i.postimg.cc/sxYMsgV2/dm.png",
  //               "https://i.postimg.cc/sxYMsgV2/dm.png"
  //           ],
  //           "highlights": [
  //               "What can you expect from this workshop? You'll gain in-depth knowledge of various digital marketing channels, including SEO (Search Engine Optimization), SEM (Search Engine Marketing), social media marketing, content marketing, email marketing, affiliate marketing, and display advertising Digital marketing is more affordable than traditional marketing methods. Digital marketing combines creativity with data-driven decision-making. A digital marketing workshop helps you develop both creative skills (such as content creation and campaign design) and analytical skills (such as performance tracking and ROI analysis), making you a well-rounded professional in today’s competitive job market. Why Enroll in Digital Marketing Workshop? High Demand for Digital Skills: As businesses increasingly move online, there is a growing demand for digital marketing professionals Versatile Career Opportunities: Digital marketing skills are applicable across industries. Cost-Effective Marketing for Businesses: Digital marketing is more affordable than traditional marketing methods. Stay Updated with Industry Trends: Digital marketing is a dynamic field with constant evolution in tools, platforms, and strategies. Boost Your Creativity and Analytical Skills:  Digital marketing combines creativity with data-driven decision-making.  Online Digital Marketing Workshop   Ideal For: Students (UG, PG, MBA Aspirants), Freshers &amp; Beginners  Syllabus: 1. Unlocking the Potential of Digital Marketing - Discover why digital marketing is a must-have skill.  2. the Power of Online Strategies - Learn how digital marketing drives success for businesses.  3. Mastering YouTube Analytics - Decode key metrics to enhance video performance.  4. Cracking Instagram Advertising - Create engaging and effective ad campaigns on Instagram.  5. Advertising Like a Pro - Explore top platforms and strategies for impactful digital ads.  6. Real-World Applications of Digital Marketing - Dive into case studies and industry success stories."
  //           ],
  //           "deleted": false,
  //           "discountPrice": 1499,
  //           "id": "66b1eb2f4d522b7c1eb74d97"
  //       },
  //       {
  //           "title": "Trial Product",
  //           "description": "This Product is for trial",
  //           "price": 100,
  //           "discountPercentage": 99,
  //           "thumbnail": "https://i.postimg.cc/SKM09hT0/trial.jpg",
  //           "images": [
  //               "https://i.postimg.cc/SKM09hT0/trial.jpg",
  //               "https://i.postimg.cc/SKM09hT0/trial.jpg",
  //               "https://i.postimg.cc/SKM09hT0/trial.jpg"
  //           ],
  //           "highlights": [
  //               " Register now for the trial workshop."
  //           ],
  //           "deleted": false,
  //           "discountPrice": 1,
  //           "id": "67477af036f3373d76a67858"
  //       }
  //   ]

  

    useEffect(()=>{
      const fetchProducts = async ()=>{
        const result = await fetchProductsByFilters()
        if(result.data.products){
          setProduct(result.data.products)
        }
      }
      fetchProducts()
      return ()=>{
        setProduct([])
      }
    }, [])

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const handleAddToCart = (e, product, skipPropagation = false) => {
    if (e && !skipPropagation) {
      e.stopPropagation();
    }
    
    console.log(`Adding to cart: ${product.title}, Price: ₹${product.discountPrice}`);
    
    if (!user) {
      toast.info("Please login to add items to your cart");
      navigate('/login', { 
        state: { 
          from: location.pathname, 
          addToCart: product 
        } 
      });
    } else {
      try {
        dispatch(addToCartAsync({ 
          item: {
            product: product.id, 
            quantity: 1,
          },
          alert: toast
        })).unwrap()
          .then(() => {
            toast.success(`${product.title} added to cart!`);
          })
          .catch((error) => {
            console.error('Failed to add to cart:', error);
            toast.error("Failed to add item to cart. Please try again.");
          });
      } catch (error) {
        console.error('Error dispatching addToCartAsync:', error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const handleBuyNow = (e, product, skipPropagation = false) => {
    if (e && !skipPropagation) {
      e.stopPropagation();
    }
    
    console.log(`Buying now: ${product.title}, Price: ₹${product.discountPrice}`);
    
    if (!user) {
      toast.info("Please login to purchase this item");
      navigate('/login', { 
        state: { 
          from: location.pathname,
          buyNow: product 
        } 
      });
    } else {
      try {
        dispatch(addToCartAsync({ 
          item: {
            product: product.id, 
            quantity: 1 
          },
          alert: toast
        })).unwrap()
          .then(() => {
            navigate('/checkout');
          })
          .catch((error) => {
            console.error('Failed to process purchase:', error);
            toast.error("Failed to process your purchase. Please try again.");
          });
      } catch (error) {
        console.error('Error during buy now:', error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white py-12 sm:py-16 px-4 font-outfit">
      <div className="container mx-auto">
        <h2 className="text-[#9C4A1A] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-16">
          Our Products
        </h2>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-8 sm:mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E6A06C] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer relative"
              onClick={() => handleProductClick(product)}
            >
              <div className="flex flex-col h-full">
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                />

                <h3 className="text-xl sm:text-2xl mt-3 sm:mt-4 font-bold text-white mb-2 sm:mb-4 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-white text-base sm:text-lg font-semibold">
                    <span className="line-through text-sm mr-2 opacity-70">₹{product.price}</span>
                    ₹{product.discountPrice}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-[#C65D34] text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-base hover:bg-[#B54D24] transition duration-300"
                    onClick={(e) => handleBuyNow(e, product)}
                    aria-label="Buy now"
                  >
                    Buy now
                  </button>
                  <button 
                    className="text-white p-2 rounded-full hover:bg-[#C65D34] hover:text-yellow-200 transition duration-300 flex items-center justify-center"
                    onClick={(e) => handleAddToCart(e, product)}
                    aria-label="Add to cart"
                  >
                    <FaShoppingCart size={20} className="sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/view-all-products">
            <button className="bg-[#E6A06C] text-white px-8 sm:px-12 py-2 sm:py-3 rounded-full text-base sm:text-xl font-medium hover:bg-[#D99058] transition duration-300">
              View All
            </button>
          </Link>
        </div>

        {/* Detailed Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4"
               onClick={closeModal}>
            <div className="bg-white rounded-3xl shadow-xl w-11/12 max-w-4xl max-h-[98vh] relative"
                 onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 p-2 bg-white bg-opacity-75 rounded-full z-10"
                aria-label="Close"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-auto rounded-2xl object-contain max-h-80"
                  />
                </div>
                
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-[#9C4A1A] mb-4">
                    {selectedProduct.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.fullDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-auto">
                    <span className="text-2xl font-bold text-[#C65D34]">
                      ₹{selectedProduct.price}
                    </span>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <button 
                        onClick={(e) => handleBuyNow(e, selectedProduct)}
                        className="bg-[#C65D34] text-white px-8 py-2 rounded-full hover:bg-[#B54D24] transition duration-300 w-full sm:w-auto flex-1 sm:flex-none"
                      >
                        Buy now
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, selectedProduct)}
                        className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                        aria-label="Add to cart"
                      >
                        <FaShoppingCart size={20} className="text-[#C65D34]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-b-3xl overflow-y-auto" style={{maxHeight: "50vh"}}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#9C4A1A] mb-4">
                    Product Details:
                  </h3>
                  <ul className="space-y-3">
                    {selectedProduct.productDetails?.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#C65D34] mr-2 mt-1 flex-shrink-0">•</span>
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
                        <span className="text-[#C65D34] mr-2 mt-1 flex-shrink-0">•</span>
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
    </div>
  );
};

export default ProductSection;