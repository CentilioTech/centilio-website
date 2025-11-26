'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeoBotHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#2A3142]">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seobothomepage/first fold/header/logo_Vector.svg"
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

      {/* First Fold - Hero Section */}
      <section className="bg-gradient-to-b from-[#0E0F18] to-[#4285F4] relative" style={{ height: '620px', overflow: 'visible' }}>
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          {/* Left Content */}
          <div className="absolute" style={{ left: '102px', top: '102px' }}>
            {/* Heading */}
            <h1 className="text-white font-bold mb-6" style={{ fontSize: '64px', lineHeight: '77px', maxWidth: '700px' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Automated SEO Blogging</span><br />Made Effortless
            </h1>

            {/* Subheading */}
            <p className="text-white mb-10" style={{ fontSize: '24px', lineHeight: '29px', width: '414px' }}>
              Centilio SEO Bot finds, writes, and<br />schedules content for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors" style={{ width: '202px', height: '52px', fontSize: '14px' }}>
                START CREATING
              </button>
              <div className="relative rounded-full" style={{ width: '202px', height: '52px', background: 'linear-gradient(to right, #EA4435 0%, #FBBC05 31.7%, #4285F4 66.3%, #34A853 100%)', padding: '2px' }}>
                <button className="w-full h-full bg-[#0E0F18] text-white font-semibold rounded-full hover:bg-[#1a1b24] transition-colors flex items-center justify-center gap-2" style={{ fontSize: '14px' }}>
                  <Image
                    src="/images/seobothomepage/first fold/icons/video play Vector.svg"
                    alt="Play"
                    width={16}
                    height={16}
                  />
                  WATCH DEMO
                </button>
              </div>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="absolute" style={{ right: '-150px', top: '102px', zIndex: 20 }}>
            <Image
              src="/images/seobothomepage/first fold/images/image1.png"
              alt="SEO Bot Dashboard"
              width={817}
              height={811}
            />
          </div>

          {/* White Rectangle Container - Positioned at bottom, extending beyond section */}
          <div className="absolute" style={{ left: '102px', bottom: '-149px', zIndex: 10 }}>
            <div className="bg-white border border-[#D2E5F7] rounded-md p-12" style={{ width: '1284px', height: '298px' }}>
              <div className="flex gap-16">
                {/* Left Column - Feature Description */}
                <div className="flex-1" style={{ maxWidth: '423px' }}>
                  <p className="text-black font-light" style={{ fontSize: '24px', lineHeight: '36px' }}>
                    Discover articles by keyword, edit with ease, and schedule them to your site, no writing needed.
                  </p>
                </div>

                {/* Right Column - Icon-based Benefits */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector1.svg"
                      alt="Auto-crawls"
                      width={40}
                      height={40}
                    />
                    <p className="text-black" style={{ fontSize: '16px', lineHeight: '24px', paddingTop: '8px' }}>
                      Auto-crawls the web for related articles
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector2.svg"
                      alt="Customize"
                      width={40}
                      height={40}
                    />
                    <p className="text-black" style={{ fontSize: '16px', lineHeight: '24px', paddingTop: '8px' }}>
                      Customize and enhance with images
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector3.svg"
                      alt="Review"
                      width={40}
                      height={40}
                    />
                    <p className="text-black" style={{ fontSize: '16px', lineHeight: '24px', paddingTop: '8px' }}>
                      Review, refine, and publish instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Fold - Trusted By Section */}
      <section className="bg-white pt-52 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Trusted by</h2>

          <div className="flex flex-wrap items-center justify-center gap-16">
            <Image
              src="/images/seobothomepage/second fold/digitalocean-2-logo-png-transparent.png"
              alt="DigitalOcean"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/Google_Cloud_logo.svg.png"
              alt="Google Cloud"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/monday.com logo option 1.png"
              alt="Monday.com"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/ion8_logo option1.png"
              alt="ion8"
              width={120}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/aws logo.png"
              alt="AWS"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Third Fold - Stats Section */}
      <section className="bg-[#181A1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">+12k</h2>
              <p className="text-gray-300 text-lg">Uploaded Documents</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">+17k</h2>
              <p className="text-gray-300 text-lg">Documents Signed</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">+800k</h2>
              <p className="text-gray-300 text-lg">Minutes Saved on Paperwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Why Teams Choose Section */}
      <section className="bg-white py-20">
        <div className="relative max-w-[1440px] mx-auto px-6" style={{ minHeight: '2200px' }}>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-black mb-6" style={{ fontSize: '48px', lineHeight: '58px' }}>
              Why teams choose<br />Centilio Sign
            </h2>
            <p className="text-xl" style={{ fontSize: '20px', lineHeight: '30px', color: '#181A1E' }}>Get ranked faster. Post smarter. Save time.</p>
          </div>

          {/* Two Column Layout: Features on Left, Screenshot on Right */}
          <div className="relative" style={{ paddingLeft: '89px' }}>
            {/* Left Column - All Features Listed */}
            <div className="absolute" style={{ left: '89px', top: '0px', width: '523px' }}>
              {/* Feature 1 - Instant Content Discovery */}
              <div style={{ position: 'absolute', top: '0px', left: '0px', width: '523px' }}>
                <div className="flex items-start" style={{ gap: '66px' }}>
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon1.png"
                    alt="Instant Content Discovery"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div style={{ paddingTop: '0px' }}>
                    <h3 style={{ fontSize: '24px', lineHeight: '50px', fontWeight: 600, color: '#333333', marginBottom: '10px' }}>Instant Content Discovery</h3>
                    <p style={{ fontSize: '18px', lineHeight: '30px', color: '#181A1E', width: '368px' }}>
                      Just type a keyword SEO Bot fetches top-matching articles and ideas from across the web.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Complete Content Control */}
              <div style={{ position: 'absolute', top: '400px', left: '0px', width: '523px' }}>
                <div className="flex items-start" style={{ gap: '66px' }}>
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon2.png"
                    alt="Complete Content Control"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div style={{ paddingTop: '0px' }}>
                    <h3 style={{ fontSize: '24px', lineHeight: '50px', fontWeight: 600, color: '#333333', marginBottom: '10px' }}>Complete Content Control</h3>
                    <p style={{ fontSize: '18px', lineHeight: '30px', color: '#181A1E', width: '368px' }}>
                      Easily edit text, add visuals, or rewrite sections. Make every blog post truly yours
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - One-Click Scheduling */}
              <div style={{ position: 'absolute', top: '800px', left: '0px', width: '523px' }}>
                <div className="flex items-start" style={{ gap: '66px' }}>
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon3.png"
                    alt="One-Click Scheduling"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div style={{ paddingTop: '0px' }}>
                    <h3 style={{ fontSize: '24px', lineHeight: '50px', fontWeight: 600, color: '#333333', marginBottom: '10px' }}>One-Click Scheduling</h3>
                    <p style={{ fontSize: '18px', lineHeight: '30px', color: '#181A1E', width: '368px' }}>
                      Pick a date and let the bot handle the rest. Stay consistent with zero manual effort
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Built-In Review Flow */}
              <div style={{ position: 'absolute', top: '1200px', left: '0px', width: '523px' }}>
                <div className="flex items-start" style={{ gap: '66px' }}>
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon4.png"
                    alt="Built-In Review Flow"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div style={{ paddingTop: '0px' }}>
                    <h3 style={{ fontSize: '24px', lineHeight: '50px', fontWeight: 600, color: '#333333', marginBottom: '10px' }}>Built-In Review Flow</h3>
                    <p style={{ fontSize: '18px', lineHeight: '30px', color: '#181A1E', width: '368px' }}>
                      Collaborate with your team send drafts for review before publishing live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 - Boost Your Website SEO */}
              <div style={{ position: 'absolute', top: '1600px', left: '0px', width: '523px' }}>
                <div className="flex items-start" style={{ gap: '66px' }}>
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon5.png"
                    alt="Boost Your Website SEO"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div style={{ paddingTop: '0px' }}>
                    <h3 style={{ fontSize: '24px', lineHeight: '50px', fontWeight: 600, color: '#333333', marginBottom: '10px' }}>Boost Your Website SEO</h3>
                    <p style={{ fontSize: '18px', lineHeight: '30px', color: '#181A1E', width: '368px' }}>
                      Fresh, optimized content published regularly helps increase search visibility and traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Single Large Screenshot */}
            <div className="absolute bg-[#181A1E] rounded-2xl overflow-hidden" style={{ left: '593px', top: '0px', width: '758px', height: '456px', padding: '0px' }}>
              <div className="w-full h-full flex items-end justify-center pt-6 px-6 pb-0">
                <Image
                  src="/images/seobothomepage/fourth fold/sc images/product1.png"
                  alt="SEO Bot Dashboard"
                  width={690}
                  height={338}
                  className="rounded-lg"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Testimonials Section */}
      <section className="bg-[#181A1E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What our users say</h2>

          <div className="border-2 border-[#5A5858] rounded-2xl p-12 relative">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl text-[#FFD700]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'bold' }}>"</div>
              <div className="flex gap-1">
                <Image
                  src="/images/seobothomepage/fifth fold/stars_Vector.svg"
                  alt="5 Stars"
                  width={160}
                  height={24}
                />
              </div>
            </div>

            <p className="text-white text-xl leading-relaxed mb-8">
              "From content discovery to final review, everything is streamlined. We've seen a 40% boost in organic traffic since using SEO Bot. It's like having a content team on autopilot."
            </p>

            <div className="text-white">
              <p className="font-semibold">Shafiq, <span className="font-normal">Meka Innovations,</span></p>
              <p className="text-gray-400">Singapore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - CTA Section */}
      <section className="bg-[#181A1E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Automate Your Blog?</h2>
            <p className="text-xl text-gray-300 mb-4">
              Let Centilio SEO Bot do the heavy lifting from finding content ideas to publishing them live.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              No writers. No delays. Just consistent, SEO-friendly content that grows your traffic
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                GET STARTED NOW
              </button>
              <div className="relative rounded-full" style={{ background: 'linear-gradient(to right, #EA4435 0%, #FBBC05 31.7%, #4285F4 66.3%, #34A853 100%)', padding: '2px' }}>
                <button className="px-8 py-4 bg-[#181A1E] text-white rounded-full font-semibold hover:bg-[#1a1b24] transition-colors">
                  TRY FREE DEMO
                </button>
              </div>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex items-center justify-center gap-16 mb-16">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">No learning curve</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">Works for any industry</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">Results from day one</span>
              </div>
            </div>

            {/* Demo Video Placeholder */}
            <div className="max-w-5xl mx-auto border border-[#5A5858] rounded-2xl" style={{ padding: '19px' }}>
              <div className="bg-white rounded-2xl" style={{ height: '500px' }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Fold - Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Join hundreds of businesses using Centilio SEO Bot
          </h2>
          <p className="text-3xl font-bold text-black">
            to stay ahead in the content game.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181A1E] border-t border-[#2A3142] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <Image
                src="/images/seobothomepage/footer/logo_white Vector.svg"
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
                src="/images/seobothomepage/footer/social media icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobothomepage/footer/social media icons/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobothomepage/footer/social media icons/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobothomepage/footer/social media icons/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobothomepage/footer/social media icons/twitter.svg"
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
