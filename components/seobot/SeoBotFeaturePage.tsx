'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import AuroraBackground from '@/components/ui/aurora-background_seo_feature'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SeobotHeader from '../layout/SeobotHeader'
import SeobotFooter from '../layout/SeobotFooter'

export default function SeoBotFeaturePage() {
  const industryTimelineData = [
    {
      id: 1,
      title: "E-commerce Brands",
      date: "Growing Market",
      content: "Drive organic traffic to your product pages with regular blog posts around buying guides, trends, and tips.",
      category: "E-commerce",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon1.png",
      relatedIds: [2, 6],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Healthcare & Wellness",
      date: "Expanding Sector",
      content: "Educate your audience with accurate, engaging articles on health topics without spending hours researching.",
      category: "Education",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon 2.png",
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 3,
      title: "Real Estate & Construction",
      date: "High-Growth Industry",
      content: "Attract buyers and investors through informative blogs on market trends, property tips, and investment insights.",
      category: "Healthcare",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon3.png",
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 92,
    },
    {
      id: 4,
      title: "Education & Coaching",
      date: "Competitive Market",
      content: "Publish valuable articles, study tips, and course updates to engage students and boost your SEO ranking.",
      category: "Real Estate",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon 4.png",
      relatedIds: [3, 5],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "SaaS & Tech Startups",
      date: "Recovery Phase",
      content: "Showcase product value, explain features, and improve search visibility through consistent, optimized content.",
      category: "Travel",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon 5.png",
      relatedIds: [4, 6],
      status: "pending" as const,
      energy: 78,
    },
    {
      id: 6,
      title: "Digital Marketing & Agencies",
      date: "Innovation Leader",
      content: "Automate content production for multiple clients, freeing your team to focus on strategy and results.",
      category: "Technology",
      iconSrc: "/images/seobotfeaturepage/second fold/iconimages/icon 6.png",
      relatedIds: [5, 1],
      status: "completed" as const,
      energy: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      {/* Header */}
      <SeobotHeader/>

      {/* First Fold - Features Section */}
      <section className="bg-[#0E0F18] py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
        {/* Full Aurora Background Layer */}
        <div className="absolute inset-0 w-full h-full">
          <AuroraBackground
            className="!w-full !h-full !bg-transparent opacity-90"
            starCount={65}
            pulseDuration={8}
            gradientColors={[
              "var(--aurora-color1, rgba(168,85,247,0.3))",
              "var(--aurora-color2, rgba(79,70,229,0.3))"
            ]}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 sm:pt-20">
          {/* Section Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20 pt-8 pb-6 sm:pb-8 md:pb-12 lg:pb-[60px]" >
            Powerful Features Built for Content Automation
          </h1>

          {/* Mobile/Tablet Responsive Grid Layout */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Feature 1 - Smart Keyword Search */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Smart Keyword Search
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Enter any keyword, and the bot crawls the web to find trending and relevant articles in seconds.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/gif/product1.gif"
                    alt="Smart Keyword Search Interface"
                    width={500}
                    height={287}
                    className="rounded object-contain w-full h-auto max-h-full"
                    unoptimized
                  />
                </div>
              </div>

              {/* Feature 2 - Article Selection & Preview */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Article Selection & Preview
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  View a list of fetched articles with summaries pick what fits your strategy best.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/gif/product2.gif"
                    alt="Article Selection Interface"
                    width={500}
                    height={287}
                    className="rounded object-contain w-full h-auto max-h-full"
                    unoptimized
                  />
                </div>
              </div>

              {/* Feature 3 - Content Editor with Media Support */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Content Editor with Media Support
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Edit titles, rewrite paragraphs, and add images or infographics with an easy-to-use editor.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/product3.png"
                    alt="Content Editor Interface"
                    width={440}
                    height={253}
                    className="rounded object-contain w-full h-auto max-h-full"
                  />
                </div>
              </div>

              {/* Feature 4 - Content Scheduling */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Content Scheduling
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Choose your preferred date and time for posting. Stay consistent without lifting a finger.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/product 4.png"
                    alt="Content Scheduling Interface"
                    width={440}
                    height={253}
                    className="rounded object-contain w-full h-auto max-h-full"
                  />
                </div>
              </div>

              {/* Feature 5 - Review & Approval Workflow */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Review & Approval Workflow
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Collaborate with your team or clients by sending drafts for feedback before publishing.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/product5.png"
                    alt="Review & Approval Interface"
                    width={500}
                    height={287}
                    className="rounded object-contain w-full h-auto max-h-full"
                  />
                </div>
              </div>

              {/* Feature 6 - SEO-Optimized Output */}
              <div className="bg-black rounded-xl border border-[#5A5858] p-4 sm:p-6 flex flex-col h-80 sm:h-96">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  SEO-Optimized Output
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Every article is prepared with proper structure, headings, and keywords to help improve your search engine ranking.
                </p>
                <div className="flex items-center justify-center flex-grow overflow-hidden">
                  <Image
                    src="/images/seobotfeaturepage/first fold/images/gif/product6.gif"
                    alt="SEO-Optimized Output"
                    width={500}
                    height={287}
                    className="rounded object-contain w-full h-auto max-h-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Absolute Positioning Layout */}
          <div className="hidden lg:block relative" style={{ width: '1220px', margin: '0 auto', height: '1431px' }}>
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
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-6 sm:mb-8">
            Who Can Benefit from Centilio SEO Bot?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
            Whether you&apos;re running a local business or scaling an online empire, SEO Bot adapts to your industry&apos;s content needs.
          </p>

          {/* Interactive Orbital Timeline */}
          <div className="w-full max-w-6xl mx-auto">
            <RadialOrbitalTimeline timelineData={industryTimelineData} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SeobotFooter/>
    </div>
  )
}