'use client'

import React, { useState } from 'react'
import Header from '../layout/Header'
import Footer from '@/components/layout/Footer'

interface BlogPost {
  id: string
  title: string
  date: string
  image: string
}

export default function CentilioBlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Creating template',
      date: 'Jan 12,2024',
      image: '/images/centilioblogpage/blog-placeholder-1.png'
    },
    {
      id: '2',
      title: 'Brand your account on Centilio',
      date: 'May 1, 2024',
      image: '/images/centilioblogpage/blog-placeholder-2.png'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <Header/>

      {/* Hero Section - Blog Title */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0E0F18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Blog</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-6 md:gap-8 max-w-5xl pb-5 mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                {/* Blog Card */}
                <div className="border border-gray-700 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-gray-600 transition-colors">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-[#1A1D28] relative">
                    {/* You can add actual images here when available */}
                  </div>
                </div>

                {/* Blog Text Content Below Card */}
                <div className="mt-4 sm:mt-5 md:mt-6 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 md:mb-5 group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-100 text-sm">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}