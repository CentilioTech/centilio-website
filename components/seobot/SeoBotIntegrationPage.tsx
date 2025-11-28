'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeoBotIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#2A3142]">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seobotintegrationpage/header/logo_Vector.svg"
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

      {/* Hero Section with Integrations */}
      <section className="bg-[#0E0F18] py-20 relative overflow-hidden">
        {/* Background blur effects */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #407BFF 0%, #4285F4 50%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #ED4C78 0%, #407BFF 50%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-16 text-white" style={{ textShadow: '0px 4px 8px #4285F4' }}>
            Connect with the apps
            <br />
            you use every day
          </h1>

          {/* Integration Logos Row */}
          <div className="flex items-center justify-center gap-8 mb-20">
            <Image
              src="/images/seobotintegrationpage/first fold group1/logos.png"
              alt="Integration Logos"
              width={600}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Instagram Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/instaVector.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Instagram</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Publish stunning posts from your blogs and grow your digital presence.
              </p>
            </div>

            {/* Wix Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/wixVector.png"
                  alt="Wix"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Wix</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Integrate with Wix to publish fresh, SEO optimized blogs with ease.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/linkeinVector.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>LinkedIn</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Strengthen your professional voice by sharing blogs directly to LinkedIn.
              </p>
            </div>

            {/* Twitter Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/twitterVector.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Twitter</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Share your latest insights instantly and keep your followers engaged.
              </p>
            </div>

            {/* Facebook Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/facebookVector.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Facebook</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Connect your page and share updates automatically with your audience.
              </p>
            </div>

            {/* WordPress Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/wordpressVector.png"
                  alt="WordPress"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>WordPress</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Post your content directly to WordPress and maintain a consistent presence.
              </p>
            </div>

            {/* Zoho CRM Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/Zoho_Corporation-Logo.wine 1.png"
                  alt="Zoho CRM"
                  width={80}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Zoho CRM</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Seamlessly connect Zoho CRM and publish your content with a single click.
              </p>
            </div>

            {/* Custom Site Card */}
            <div className="bg-[#181A1E] rounded-xl p-6 border border-[#5A5858]" style={{ width: '353px', height: '250px' }}>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/seobotintegrationpage/first fold group2/custom_site 1.png"
                  alt="Custom Site"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold" style={{ color: '#ffffff', lineHeight: '55px' }}>Custom Site</h3>
              </div>
              <p className="text-gray-300 text-sm" style={{ lineHeight: '36px' }}>
                Effortlessly publish optimized blogs directly to your custom domain.
              </p>
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
                src="/images/seobotintegrationpage/footer/logo_white Vector.svg"
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
                src="/images/seobotintegrationpage/footer/social media icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotintegrationpage/footer/social media icons/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotintegrationpage/footer/social media icons/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotintegrationpage/footer/social media icons/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotintegrationpage/footer/social media icons/twitter.svg"
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
