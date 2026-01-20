'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function DoPeopleTrustSocialMediaAdvertising() {
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
            Building Trust in Digital Advertising
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
                <span>16 January 2025</span>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="blog-content">
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Fewer than 1 in 5 people trust ads – here&apso;s what brands can do about it</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Trust is the heartbeat of every industry, especially in advertising. Unfortunately, as reported by Forrester Research, trust in digital ads is dwindling, with only 22% of younger consumers and 12% of older consumers expressing confidence in social media ads. Reports further indicate that just 37% of consumers pay attention to advertising messages. This skepticism towards marketing can be attributed to misinformation, privacy concerns, and various regulatory issues. However, there is hope. Consumer tolerance for digital ads is rising, especially among younger demographics, who are open to interactions with brands across new channels. Yet, this openness does not automatically translate into trust.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Put Consumers in the Driver&apso;s Seat</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                The current approach to advertising often overlooks consumer autonomy, treating personal data as a commodity rather than a shared resource. With growing regulatory scrutiny surrounding privacy, it&apso;s essential for advertisers to pivot to consent-based advertising that empowers consumers to control their data. A great example of this is through <strong className="text-white">zero-party data</strong>, which involves information that customers willingly share. Through polls or surveys, consumers can offer insights that help tailor the advertising experience, fostering a sense of control and trust in the brand.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Let Creators Lead the Content</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Influencer marketing has morphed significantly over the years. Successful campaigns today lean into the authenticity of the influencer-audience relationship, rather than just scripted content. Brands that empower creators to lead their own messaging can tap into a genuine connection with their audience. Platforms like TikTok have demonstrated that when sponsored content mirrors organic posts, consumers are more receptive, allowing brands to build trust within these digital communities.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Embrace Transparency</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Establishing trust requires transparency. Brands must prioritize clear communication regarding data usage and advertising practices. Transparency not only empowers consumers but also fosters an environment where advertising can be viewed as a conversation rather than an interruption. Imagine a future where consumers feel secure about how their data is used and are actively involved in shaping their advertising experiences—this is achievable through the industry&apso;s collective focus on trust-building strategies.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Conclusion</h3>
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                To build a bridge of trust between brands and consumers, it is imperative to adopt a consumer-centric approach. By embracing consent-based advertising, appreciating the role of influencers, and pledging transparency, brands can redefine their relationships with their audiences. As we move forward, let&apso;s prioritize trust in advertising—not just as a concept, but as a core value that will guide our industry towards a more collaborative and respectful landscape. Centilio&apso;s dedicated digital marketing service, <strong className="text-white">Haptica,</strong> delivers end-to-end solutions to enhance your online presence. From SEO and paid advertising to social media management, content creation, and analytics, Haptica combines strategy and technology to drive measurable results and ROI.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">FAQs</h3>
            <div className="mb-8 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">1. What is zero-party data?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">Zero-party data refers to information that a consumer willingly shares with a brand, allowing for a more personalized and relevant advertising experience.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">2. How can brands improve transparency in their advertising?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">Brands can enhance transparency by clearly communicating their data usage policies and allowing consumers to understand how their information influences ad targeting.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">3. Why is influencer marketing effective?</h4>
                <p className="text-gray-300 text-lg leading-relaxed">Influencer marketing works because it relies on authentic relationships. Influencers connect with their audiences on a personal level, making advertisements feel more like recommendations from friends.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
      <Footer />
    </div>
  )
}
