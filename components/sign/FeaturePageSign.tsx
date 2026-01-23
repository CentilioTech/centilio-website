'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BeamsBackground } from '@/components/ui/beams-background'
import BackgroundGradient from '@/components/ui/background-gradient'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

export default function FeaturePageSign() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Easy Document Preparation",
      description: "Import files from Google Drive, Dropbox, or your computer. Add fields with simple drag-and-drop.",
      image: "/images/feature page - sign/first fold/product image 1.png"
    },
    {
      id: 1,
      title: "Flexible Signature Options",
      description: "Sign using typed, drawn, or uploaded signatures—saved for one-click reuse.",
      image: "/images/feature page - sign/first fold/product image 2.png"
    },
    {
      id: 2,
      title: "Multi-Party & Sequential Signing",
      description: "Set signing order, assign roles, and track who needs to sign—perfect for contracts and approvals.",
      image: "/images/feature page - sign/first fold/product image 3.png"
    },
    {
      id: 3,
      title: "Real-Time Tracking & Smart Reminders",
      description: "Know who's viewed, signed, or delayed. Automate follow-ups to keep workflows moving.",
      image: "/images/feature page - sign/first fold/product image 4.png"
    },
    {
      id: 4,
      title: "Reusable Templates & Bulk Send",
      description: "Save time with pre-filled templates. Send documents to hundreds at once with personalized fields.",
      image: "/images/feature page - sign/first fold/product image 5.png"
    },
    {
      id: 5,
      title: "Seamless Integrations",
      description: "Works with CRMs like Salesforce, HubSpot, and Pipedrive. Connects with cloud storage and more.",
      image: "/images/feature page - sign/first fold/product image 6.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      <SignHeader />

      {/* First Fold - Powerful Features */}
      <section className="relative overflow-hidden">
        <BeamsBackground 
          intensity="strong" 
          className="absolute inset-0 bg-[#181A1E]"
        />
        <div className="relative z-10 pt-12 pb-24">
          <div className="container mx-auto px-6">
          {/* Section Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
            <span className="text-white">Powerful features that </span>
            <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">simplify every step</span>
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Features List */}
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`border-l-3 pl-6 cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'border-gradient-to-b from-[#34A853] to-[#4285F4]'
                      : 'border-[#3B82F6]'
                  }`}
                  style={
                    activeFeature === index
                      ? { borderImage: 'linear-gradient(to bottom, #34A853, #4285F4) 1' }
                      : undefined
                  }
                >
                  <h3
                    className={`text-xl font-semibold transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-[#34A853] to-[#4285F4] bg-clip-text text-transparent mb-3'
                        : 'text-white'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  {activeFeature === index && (
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Product Showcase */}
            <div className="relative flex justify-center items-start rounded-2xl">
              {/* Background Gradient Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/20 via-transparent to-[#34A853]/20 blur-3xl"></div> */}

              {/* Product Image Container */}
              <motion.div
                whileHover={{ scale: 0.95, rotate: "-1deg" }}
                className="relative bg-[#000000] p-8 shadow-2xl cursor-pointer group"
                style={{
                  width: '620px',
                  height: '498px'
                }}
              >
                <BackgroundGradient/>
                {/* Product Showcase Image */}
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: "2deg",
                    transition: { duration: 0.25 }
                  }}
                >
                  <Image
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    width={604}
                    height={482}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Second Fold - Who Can Benefit */}
      <section className="relative bg-white py-10 lg:py-24 overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={15}
          maxOpacity={0.08}
          duration={4}
          repeatDelay={3}
          className={cn(
            "[mask-image:radial-gradient(ellipse_60%_80%_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12",
          )}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-16">
            <span className="text-black">Who can benefit from </span>
            <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">Centilio Sign?</span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 - Sales & Business Development */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-blue-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 1.png" alt="Sales" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Sales & Business Development
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Close deals faster with instant contract approvals and CRM integration. No more chasing signatures.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Human Resources */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-emerald-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 2.png" alt="HR" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Human Resources
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Simplify onboarding, policy sign-offs, and employee documents with reusable templates and bulk send.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Legal Teams & Law Firms */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-violet-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 4,
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 3.png" alt="Legal" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Legal Teams & Law Firms
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Get airtight audit trails and legally binding signatures. Ensure confidentiality and compliance on every agreement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Real Estate Professionals */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-pink-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 4.png" alt="Real Estate" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Real Estate Professionals
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Accelerate deals with remote signing of lease agreements, purchase contracts, and disclosures—anytime, anywhere.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Procurement & Vendor Management */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-cyan-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 3,
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 5.png" alt="Procurement" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Procurement & Vendor Management
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Send, track, and store supplier agreements and purchase orders at scale with complete visibility and control.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 6 - IT & Compliance Officers */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative h-full"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl -z-20 bg-orange-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 5,
                }}
              />
              
              <div className="relative bg-[#181A1E] border border-[#ABA5A5] rounded-xl p-4 md:p-8 text-center h-full flex flex-col min-h-[280px]">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex justify-center">
                    <Image src="/images/feature page - sign/second fold/icon 6.png" alt="IT & Compliance" width={56} height={56} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    IT & Compliance Officers
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2 md:mt-auto">
                    Deploy with confidence using enterprise-grade security, SSO support, and full audit logs for regulatory compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SignFooter />
    </div>
  )
}
