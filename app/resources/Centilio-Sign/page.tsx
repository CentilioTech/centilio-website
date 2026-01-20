'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CentilioSign() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <Header />
      <motion.article 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Centilio Sign
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-gray-300 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">By Ravi Gandhi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>14 November 2024</span>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="blog-content">
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Outline</h3>
            <ul className="text-gray-300 space-y-2 text-lg mb-8">
              <li className="flex items-start">
                
                <span>Introduction</span>
              </li>
              <li className="flex items-start">
                
                <span>mēkā: A Leading Product Design Agency</span>
              </li>
              <li className="flex items-start">
                
                <span>Medical Device Design and Development</span>
              </li>
              <li className="flex items-start">
                
                <span>Centilio Sign: Revolutionizing Medical Devices</span>
              </li>
              <li className="flex items-start">
                
                <span>Features of Centilio Sign</span>
              </li>
              <li className="flex items-start">
                
                <span>Benefits of Centilio Sign</span>
              </li>
              <li className="flex items-start">
                
                <span>Importance of User-Centered Design</span>
              </li>
              <li className="flex items-start">
                
                <span>mēkā&apso;s Approach to Product Development</span>
              </li>
              <li className="flex items-start">
                
                <span>Expertise in Medical Device Design</span>
              </li>
              <li className="flex items-start">
                
                <span>Client Success Stories</span>
              </li>
              <li className="flex items-start">
                
                <span>Collaborative Partnership</span>
              </li>
              <li className="flex items-start">
                
                <span>Milestone Achievements</span>
              </li>
              <li className="flex items-start">
                
                <span>Conclusion</span>
              </li>
              <li className="flex items-start">
                
                <span>FAQs</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Introduction</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to the world of mēkā, a renowned product design agency with a passion for innovation and excellence. Specializing in medical device design and development, mēkā has established itself as a leading force in the industry, with a commitment to creating groundbreaking solutions that improve lives and empower healthcare professionals.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">mēkā: A Leading Product Design Agency</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                mēkā is driven by the belief that every design should serve a purpose and make a meaningful impact. From medical devices to consumer products, mēkā brings a wealth of experience and a fresh perspective to every project. With a dedicated team of experts, mēkā strives to push the boundaries of design and engineering, delivering solutions that are both aesthetically pleasing and functionally effective.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Medical Device Design and Development</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                At mēkā, medical device design and development is at the core of their expertise. The team understands the intricate requirements and regulatory standards associated with medical technology, and they leverage their extensive knowledge to create solutions that meet the highest industry standards while prioritizing user experience and functionality.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Centilio Sign: Revolutionizing Medical Devices</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                One of mēkā&apso;s groundbreaking creations is the Centilio Sign, a revolutionary medical device that has set new benchmarks in the industry. With its advanced technology and user-friendly design, Centilio Sign is transforming patient care and streamlining healthcare processes.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Features of Centilio Sign</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Centilio Sign boasts a range of cutting-edge features, including real-time data monitoring, intuitive user interfaces, seamless connectivity, and advanced analytics capabilities. These features come together to deliver unparalleled performance and reliability, making Centilio Sign an indispensable tool for healthcare professionals.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Benefits of Centilio Sign</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                The benefits of Centilio Sign extend beyond its features, as it enhances patient safety, improves diagnosis accuracy, and optimizes treatment processes. With its ability to collect and analyze patient data in real time, Centilio Sign empowers healthcare providers to make informed decisions, leading to better outcomes for patients.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Importance of User-Centered Design</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                mēkā&apso;s commitment to user-centered design is evident in every aspect of their work, including the development of Centilio Sign. By prioritizing the needs and preferences of end users, mēkā ensures that their products are not only technologically advanced but also intuitive and easy to use, ultimately resulting in a positive impact on patient care.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">mēkā&apso;s Approach to Product Development</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                mēkā follows a comprehensive approach to product development, integrating design thinking, engineering expertise, and a deep understanding of market dynamics. This holistic approach enables mēkā to create solutions that are not only innovative but also practical and commercially viable.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Expertise in Medical Device Design</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                With a team consisting of top-tier engineers, designers, and industry experts, mēkā has demonstrated exceptional expertise in the field of medical device design. Their ability to navigate complex regulatory landscapes and technical challenges sets them apart as a trusted partner for companies seeking to bring groundbreaking medical devices to market.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Client Success Stories</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                mēkā&apso;s track record of success is reflected in the testimonials and case studies of satisfied clients who have benefited from their innovative solutions. From startups to established companies, mēkā has consistently delivered exceptional results, earning the trust and loyalty of their clients through a collaborative and results-driven approach.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Collaborative Partnership</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                mēkā values collaboration and believes in fostering strong partnerships with clients, ensuring that their unique vision and requirements are understood and integrated into the design and development process. This collaborative approach results in solutions that not only meet but exceed client expectations, driving mutual success and innovation.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Milestone Achievements</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Through a commitment to excellence and a relentless pursuit of innovation, mēkā has achieved numerous milestones, solidifying their reputation as an industry leader. From awards and recognitions to successful product launches, mēkā&apso;s journey is marked by significant achievements that highlight their impact on the world of product design and development.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Conclusion</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                In conclusion, mēkā&apso;s dedication to excellence, innovation, and user-centered design has positioned them as a trailblazer in the industry. Through their transformative solutions, such as the groundbreaking Centilio Sign, mēkā continues to shape the future of medical device design and development, delivering tangible benefits to healthcare providers and patients alike.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">FAQs</h3>
            <div className="mb-8 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What sets mēkā apart from other product design agencies?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">mēkā stands out due to its specialized expertise in medical device design and development, its commitment to user-centered design, and its track record of successful client partnerships resulting in innovative and impactful solutions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">How does Centilio Sign contribute to improving patient care?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">Centilio Sign enhances patient care by offering real-time data monitoring, intuitive user interfaces, seamless connectivity, and advanced analytics capabilities, empowering healthcare providers to make informed decisions and optimize treatment processes, ultimately leading to better outcomes for patients.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What is mēkā&apso;s approach to collaborative partnerships with clients?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">mēkā values collaboration and works closely with clients to understand their unique vision and requirements, integrating them into the design and development process, resulting in transformative solutions that exceed client expectations and drive mutual success and innovation.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">How has mēkā impacted the industry through its milestone achievements?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">Through its commitment to excellence and innovation, mēkā has achieved significant milestones, including awards, successful product launches, and industry recognitions, solidifying its reputation as a trailblazer in the world of product design and development.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What sets the Centilio Sign apart from other medical devices?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">The Centilio Sign is distinguished by its advanced technology, user-friendly design, and a range of cutting-edge features, making it an indispensable tool for healthcare professionals that enhances patient safety, improves diagnosis accuracy, and streamlines healthcare processes.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
      <Footer />
    </div>
  )
}
