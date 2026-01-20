'use client'

import React from 'react'
import Image from 'next/image'
import SeobotHeader from '@/components/layout/SeobotHeader'
import SeobotFooter from '@/components/layout/SeobotFooter'
import AuroraBackground from '@/components/ui/aurora-background'

export default function SeoBotIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SeobotHeader />

      {/* Hero Section with Integrations */}
      <section className="bg-[#0E0F18] pt-20 md:pt-32 pb-20 relative overflow-hidden">
        {/* Aurora Background Animation */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Pulsing radial gradients */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(64,123,255,0.3) 0%, transparent 80%),
                radial-gradient(circle, rgba(237,76,120,0.3) 0%, transparent 80%)
              `,
              backgroundSize: "100% 100%",
              animation: `pulse 8s infinite`,
            }}
          />

          {/* Animated color blobs */}
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-fuchsia-600 rounded-full filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-indigo-700 rounded-full filter blur-3xl opacity-30 animate-pulse" />

          {/* Twinkling stars */}
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:pt-20">
          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-16 text-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
            {/* Instagram Card */}
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
            <div className="bg-[#181A1E] rounded-xl p-4 sm:p-6 border border-[#5A5858] w-full max-w-[345px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col">
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
      <SeobotFooter />
    </div>
  )
}
