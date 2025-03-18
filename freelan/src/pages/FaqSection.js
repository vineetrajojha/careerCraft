import React, {  useState } from "react";


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
 

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Can You Expect from Our Workshops?",
      answer: (
        <>
           <b>Comprehensive 2-Day Workshops:</b> Dive into 2-hour immersive sessions across four key domains: Digital Marketing, Artificial Intelligence, Personal Finance, and Group Discussions & Personal Interviews. <br />
           <b>Community Building:</b> Connect with a network of learners and professionals passionate about growth and collaboration. <br />
          <b>Career Insights from Experts:</b> Gain personalized guidance and industry trends from experienced professionals, including IIT and IIM alumni. <br />
          <b>Job Referrals:</b> Access exclusive job referral opportunities through our network of industry mentors. <br />
           <b>Short-Term Projects & Internships:</b> Excel in workshops to secure impactful projects and internships. <br />
           <b>Professional Certification:</b> Earn certifications to enhance your resume and validate your expertise.
        </>
      ),
    },
    {
      question: "Who can/should join us?",
      answer: (
        <>
           <b>Students:</b> Whether you're seeking a job, looking to learn a new skill, or earn certifications, our sessions are ideal for you. Prepare for campus placements and sharpen your skills for group discussions and personal interviews. <br />
           <b>Fresh Graduates:</b> Stand out in job interviews and confidently kickstart your career with guidance from our workshops. <br />
           <b>Early-Career Professionals:</b> If you're exploring new sectors or aiming to switch industries, our workshops offer the insights you need.
        </>
      ),
    },
    {
      question: "What is the duration of this workshop?",
      answer: `The workshop spans two days, covering all four domains in a structured format.
       Day 1: Two domains will be covered with 2-hour sessions each, totaling 4 hours.  
      Day 2: The remaining two domains will be addressed in similar 2-hour sessions, totaling another 4 hours.`,
    },
    {
      question: "Timings of the workshop",
      answer:
        "Our workshops are scheduled during weekends, late evenings, and public holidays to ensure maximum convenience for both mentors and attendees.",
    },
    {
      question: "Is EMI available?",
      answer: "EMI options are not available for the workshop at the moment.",
    },
    {
      question: "About our mentors",
      answer:
        "Our mentors bring 2 to 15 years of diverse industry experience and are alumni of prestigious institutions like IITs, IIMs, and other esteemed universities across the country. They represent a wide range of sectors, including IT, FMCG, Healthcare, BFSI, and more, providing well-rounded insights and guidance.",
    },
    {
      question: "Our products",
      answer: (
        <>
          1. <b>The Masterclass:</b> A comprehensive program covering Personal Finance, Digital Marketing, Artificial Intelligence, and GDPI. <br />
          2. <b>Decoding GDPI:</b> A focused workshop to excel in campus placements and interviews. <br />
          3. <b>Excel in Personal Finances:</b> Learn practical tools and strategies for effective financial management. <br />
          4. <b>Digital Marketing Course:</b> An in-depth program covering metrics and methods in digital marketing.
        </>
      ),
    },
  ];

  return (
    
    <div  className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center font-serif mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center text-base bg-red-300 font-sans p-4 text-left text-gray-900 font-medium hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {faq.question}
                <span
                  className={`transition-transform transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 py-3 text-gray-900 font-sans text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
       
      </div>
    </div>
    
  );
};

export default FAQSection;
