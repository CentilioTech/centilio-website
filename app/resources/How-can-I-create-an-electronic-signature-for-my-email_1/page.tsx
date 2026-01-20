'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HowCanICreateAnElectronicSignatureForMyEmailOne() {
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
            How to Create a Gmail Signature | Email Personalization Guide
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
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Creating a professional email signature is essential for effective business communication. This comprehensive guide walks you through the process of creating and customizing email signatures, with specific focus on Gmail and other popular email platforms.
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Why Email Signatures Matter</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Email signatures serve as digital business cards, providing recipients with essential contact information while reinforcing your professional brand. A well-designed signature can enhance credibility and improve communication efficiency.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Creating Your Gmail Signature</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Gmail offers built-in tools for creating and customizing email signatures. The process involves accessing Gmail settings, navigating to the signature section, and designing your personalized signature with appropriate formatting and content.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Best Practices for Email Signatures</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Effective email signatures are concise, professional, and include essential information such as your name, title, company, contact details, and relevant social media links. Avoid cluttering your signature with excessive images or information.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Beyond Basic Signatures</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              For businesses requiring advanced signature management and electronic signature capabilities, solutions like Centilio Sign provide comprehensive tools for document signing and signature management across organizations.
            </p>
          </div>
        </div>
      </motion.article>
      <Footer />
    </div>
  )
}
