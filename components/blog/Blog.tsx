'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Footer from '@/components/layout/Footer'
import { BlogPost } from '@/types/blog'
import { fetchBlogs, formatBlogDate, extractExcerpt, parseKeywords } from '@/lib/blogApi'

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [totalRecords, setTotalRecords] = useState(0)

  const fetchBlogsData = async (page: number) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetchBlogs(page, 6)
      
      if (response.success) {
        setBlogs(response.data)
        setHasNextPage(response.next_page)
        setTotalRecords(response.total_records)
      } else {
        setError('Failed to fetch blogs')
      }
    } catch (err) {
      setError('Error loading blogs. Please try again.')
      console.error('Blog fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogsData(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const totalPages = Math.ceil(totalRecords / 6)

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#0E0F18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-white">Blog</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Discover insights, tips, and updates from our team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-t-2 border-blue-400"></div>
              </div>
            </div>
          ) : error ? (
            <motion.div 
              className="text-center py-20"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="text-red-400 mb-6">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Something went wrong</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">{error}</p>
              <button 
                onClick={() => fetchBlogsData(currentPage)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Try Again
              </button>
            </motion.div>
          ) : blogs.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="text-gray-400 mb-6">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">No blogs found</h3>
              <p className="text-gray-300">Check back later for new content!</p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {blogs.map((blog) => (
                <Link href={`/blog/details?slug=${blog.Slug}`} key={blog.Id} >
                  <motion.article 
                    
                    className="group bg-[#1A1D28] border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] bg-[#2A2D38] relative overflow-hidden">
                      {blog.Preview_Url ? (
                        <Image
                          src={blog.Preview_Url}
                          alt={blog.Title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex justify-between gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          <span>{blog.Created_User_Name}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{formatBlogDate(blog.Scheduled_Time)}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {blog.Title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                        {blog.Excerpt || extractExcerpt(blog.Content)}
                      </p>
                      
                      {/* Keywords */}
                      {/* {blog.Keywords && parseKeywords(blog.Keywords).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {parseKeywords(blog.Keywords).map((keyword, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )} */}
                      
                      {/* Read More Button */}
                      <Link 
                        href={`/blog/details?slug=${blog.Slug}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 mt-auto"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {!loading && !error && blogs.length > 0 && totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center mt-16 space-x-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#1A1D28] text-white rounded-lg border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2A2D38] hover:border-gray-600 transition-colors duration-300"
              >
                Previous
              </button>
              
              {/* Page Numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-[#1A1D28] text-white border-gray-700 hover:bg-[#2A2D38] hover:border-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="px-4 py-2 bg-[#1A1D28] text-white rounded-lg border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2A2D38] hover:border-gray-600 transition-colors duration-300"
              >
                Next
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}