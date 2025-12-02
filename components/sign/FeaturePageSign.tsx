'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BeamsBackground } from '@/components/ui/beams-background'
import BackgroundGradient from '@/components/ui/background-gradient'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function FeaturePageSign() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#5B5858]">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/feature page - sign/Layer 1.svg"
              alt="Sign Logo"
              width={43}
              height={51}
            />
            <span className="text-white text-lg font-semibold">Sign</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/features" className="text-white hover:text-gray-300 transition-colors">Features</Link>
            <Link href="/integrations" className="text-white hover:text-gray-300 transition-colors">Integrations</Link>
            <Link href="/pricing" className="text-white hover:text-gray-300 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </nav>
      </header>

      {/* First Fold - Powerful Features */}
      <section className="relative overflow-hidden">
        <BeamsBackground 
          intensity="strong" 
          className="absolute inset-0 bg-[#181A1E]"
        />
        <div className="relative z-10 py-24">
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
              {/* Feature 1 - Easy Document Preparation */}
              <div className="border-l-4 border-gradient-to-b from-[#34A853] to-[#4285F4] pl-6" style={{borderImage: 'linear-gradient(to bottom, #34A853, #4285F4) 1'}}>
                <h3 className="bg-gradient-to-r from-[#34A853] to-[#4285F4] bg-clip-text text-transparent text-xl font-semibold mb-3">
                  Easy Document Preparation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Import files from Google Drive, Dropbox, or your computer. Add fields with simple drag-and-drop.
                </p>
              </div>

              {/* Feature 2 - Flexible Signature Options */}
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-white text-xl font-semibold">
                  Flexible Signature Options
                </h3>
              </div>

              {/* Feature 3 - Multi-Party & Sequential Signing */}
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-white text-xl font-semibold">
                  Multi-Party & Sequential Signing
                </h3>
              </div>

              {/* Feature 4 - Real-Time Tracking & Smart Reminders */}
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-white text-xl font-semibold">
                  Real-Time Tracking & Smart Reminders
                </h3>
              </div>

              {/* Feature 5 - Reusable Templates & Bulk Send */}
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-white text-xl font-semibold">
                  Reusable Templates & Bulk Send
                </h3>
              </div>

              {/* Feature 6 - Seamless Integrations */}
              <div className="border-l-4 border-[#3B82F6] pl-6">
                <h3 className="text-white text-xl font-semibold">
                  Seamless Integrations
                </h3>
              </div>
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
                    src="/images/feature page - sign/first fold/product image 1.png"
                    alt="Document upload interface with cloud storage integration"
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

      {/* Footer */}
      <footer className="bg-[#181A1E] border-t border-[#5B5858] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/images/feature page - sign/Vector1.svg"
                  alt="Sign Logo"
                  width={62}
                  height={77}
                  className="opacity-90"
                />
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/sign" className="text-gray-400 hover:text-white transition-colors">Sign</Link></li>
                <li><Link href="/seo-bot" className="text-gray-400 hover:text-white transition-colors">SEO Bot</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of use</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies Policy</Link></li>
                <li><Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">GDPR Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-end mt-12 pt-8 border-t border-[#5B5858]" style={{ gap: '14px' }}>
            {/* Facebook */}
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ width: '30px', height: '30px' }}>
              <Image
                src="/images/home page/footer/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            {/* Instagram */}
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ width: '30px', height: '30px' }}>
              <Image
                src="/images/home page/footer/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            {/* YouTube */}
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ width: '30px', height: '30px' }}>
              <Image
                src="/images/home page/footer/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ width: '30px', height: '30px' }}>
              <Image
                src="/images/home page/footer/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            {/* Twitter */}
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ width: '30px', height: '30px' }}>
              <Image
                src="/images/home page/footer/twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
