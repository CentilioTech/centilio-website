'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeoBotFeaturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#2A3142]">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seobotfeaturepage/header/logo_Vector.svg"
              alt="SEO Bot Logo"
              width={48}
              height={48}
            />
            <span className="text-white text-xl font-semibold">SEO Bot</span>
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

      {/* First Fold - Features Section */}
      <section className="bg-[#0E0F18] py-24 relative overflow-hidden">
        {/* Top Left Blur Layer */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #407BFF 0%, #4285F4 50%, transparent 70%)'
          }}
        />

        {/* Right Side Blur Layer - Between first and second row */}
        <div
          className="absolute right-0 w-[500px] h-[500px] opacity-40 blur-[120px]"
          style={{
            top: '40%',
            background: 'radial-gradient(circle, #ED4C78 0%, #407BFF 50%, transparent 70%)'
          }}
        />

        <div className="relative z-10" style={{ width: '1440px', margin: '0 auto', position: 'relative', minHeight: '1520px' }}>
          {/* Section Title */}
          <h1 className="text-5xl font-bold text-center text-white mb-20" style={{ fontSize: '42px', lineHeight: '50px', paddingTop: '60px', paddingBottom: '60px', textShadow: '0px 4px 8px #4285F4' }}>
            Powerful Features Built for Content Automation
          </h1>

          {/* Features Container with Absolute Positioning */}
          <div className="relative" style={{ width: '1220px', margin: '0 auto', height: '1431px' }}>
            {/* Feature 1 - Smart Keyword Search */}
            <div className="bg-black rounded-xl absolute flex flex-col" style={{ border: '1px solid #5A5858', left: '0px', top: '0px', width: '628px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                Smart Keyword Search
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                Enter any keyword, and the bot crawls the web to find trending and relevant articles in seconds.
              </p>
              <div className="flex items-end justify-center mt-auto overflow-hidden rounded-b-xl" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/gif/product1.gif"
                  alt="Smart Keyword Search Interface"
                  width={500}
                  height={287}
                  className="rounded object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Feature 2 - Article Selection & Preview */}
            <div className="bg-black rounded-xl absolute flex flex-col" style={{ border: '1px solid #5A5858', left: '652px', top: '0px', width: '568px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                Article Selection & Preview
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                View a list of fetched articles with summaries pick what fits your strategy best.
              </p>
              <div className="flex items-end justify-center mt-auto overflow-hidden rounded-b-xl" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/gif/product2.gif"
                  alt="Article Selection Interface"
                  width={500}
                  height={287}
                  className="rounded object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Feature 3 - Content Editor with Media Support */}
            <div className="bg-black rounded-xl absolute flex flex-col" style={{ border: '1px solid #5A5858', left: '0px', top: '485px', width: '568px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                Content Editor with Media Support
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                Edit titles, rewrite paragraphs, and add images or infographics with an easy-to-use editor.
              </p>
              <div className="flex items-end justify-center mt-auto overflow-hidden rounded-b-xl" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/product3.png"
                  alt="Content Editor Interface"
                  width={440}
                  height={253}
                  className="rounded object-contain"
                />
              </div>
            </div>

            {/* Feature 4 - Content Scheduling */}
            <div className="bg-black rounded-xl absolute flex flex-col overflow-hidden" style={{ border: '1px solid #5A5858', left: '592px', top: '485px', width: '628px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                Content Scheduling
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                Choose your preferred date and time for posting. Stay consistent without lifting a finger.
              </p>
              <div className="flex items-center justify-center mt-auto" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/product 4.png"
                  alt="Content Scheduling Interface"
                  width={440}
                  height={253}
                  className="rounded object-contain"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>

            {/* Feature 5 - Review & Approval Workflow */}
            <div className="bg-black rounded-xl absolute flex flex-col" style={{ border: '1px solid #5A5858', left: '0px', top: '970px', width: '628px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                Review & Approval Workflow
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                Collaborate with your team or clients by sending drafts for feedback before publishing.
              </p>
              <div className="flex items-end justify-center mt-auto overflow-hidden rounded-b-xl" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/product5.png"
                  alt="Review & Approval Interface"
                  width={500}
                  height={287}
                  className="rounded object-contain"
                />
              </div>
            </div>

            {/* Feature 6 - SEO-Optimized Output */}
            <div className="bg-black rounded-xl absolute flex flex-col" style={{ border: '1px solid #5A5858', left: '652px', top: '970px', width: '568px', height: '461px', padding: '24px 24px 0 24px' }}>
              <h3 className="text-white font-semibold mb-4" style={{ fontSize: '24px', lineHeight: '50px' }}>
                SEO-Optimized Output
              </h3>
              <p className="text-gray-300 mb-4" style={{ fontSize: '18px', lineHeight: '30px' }}>
                Every article is prepared with proper structure, headings, and keywords to help improve your search engine ranking.
              </p>
              <div className="flex items-end justify-center mt-auto overflow-hidden rounded-b-xl" style={{ flexGrow: 1 }}>
                <Image
                  src="/images/seobotfeaturepage/first fold/images/gif/product6.gif"
                  alt="SEO-Optimized Output"
                  width={500}
                  height={287}
                  className="rounded object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Fold - Who Can Benefit Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-center text-black mb-6">
            Who Can Benefit from Centilio SEO Bot?
          </h2>
          <p className="text-xl text-center text-gray-700 mb-20 max-w-4xl mx-auto">
            Whether you're running a local business or scaling an online empire, SEO Bot adapts to your industry's content needs.
          </p>

          {/* Circular Diagram */}
          <div className="relative mx-auto" style={{ width: '1200px', height: '700px' }}>
            {/* Background Circles SVG */}
            <div className="absolute" style={{ left: '350px', top: '100px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/circles.svg"
                alt="Orbital circles"
                width={500}
                height={500}
                className="opacity-80"
              />
            </div>

            {/* Center Logo */}
            <div className="absolute" style={{ left: '510px', top: '260px', zIndex: 10 }}>
              <Image
                src="/images/seobotfeaturepage/second fold/logo bg.svg"
                alt="SEO Bot Center Logo"
                width={180}
                height={180}
              />
            </div>

            {/* Orbital Icons - Extended spacing from the circle */}
            {/* Icon 1 - Top Left */}
            <div className="absolute" style={{ left: '405px', top: '45px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon1.png"
                alt="Retail & E-commerce"
                width={80}
                height={80}
              />
            </div>

            {/* Icon 2 - Top Right */}
            <div className="absolute" style={{ left: '715px', top: '45px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon 2.png"
                alt="Education & Training"
                width={80}
                height={80}
              />
            </div>

            {/* Icon 3 - Middle Left */}
            <div className="absolute" style={{ left: '255px', top: '310px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon3.png"
                alt="Healthcare & Wellness"
                width={80}
                height={80}
              />
            </div>

            {/* Icon 4 - Middle Right */}
            <div className="absolute" style={{ left: '865px', top: '310px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon 4.png"
                alt="Real Estate"
                width={80}
                height={80}
              />
            </div>

            {/* Icon 5 - Bottom Left */}
            <div className="absolute" style={{ left: '405px', top: '575px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon 5.png"
                alt="Travel & Tourism"
                width={80}
                height={80}
              />
            </div>

            {/* Icon 6 - Bottom Right */}
            <div className="absolute" style={{ left: '715px', top: '575px' }}>
              <Image
                src="/images/seobotfeaturepage/second fold/iconimages/icon 6.png"
                alt="Technology & SaaS"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181A1E] border-t border-[#2A3142] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <Image
                src="/images/seobotfeaturepage/footer/logo_white Vector.svg"
                alt="Centilio Logo"
                width={80}
                height={80}
                className="opacity-90"
              />
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/sign" className="text-gray-400 hover:text-white transition-colors">
                    Sign
                  </Link>
                </li>
                <li>
                  <Link href="/seo-bot" className="text-gray-400 hover:text-white transition-colors">
                    SEO Bot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                    GDPR Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-end pt-8 border-t border-[#2A3142] gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotfeaturepage/footer/social media icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotfeaturepage/footer/social media icons/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotfeaturepage/footer/social media icons/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotfeaturepage/footer/social media icons/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotfeaturepage/footer/social media icons/twitter.svg"
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
