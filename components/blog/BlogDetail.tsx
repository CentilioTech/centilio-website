'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Header from '../layout/Header'
import Footer from '@/components/layout/Footer'
import { BlogPost } from '@/types/blog'
import { fetchBlogBySlug, formatBlogDate, parseKeywords } from '@/lib/blogApi'

interface BlogDetailProps {
  slug: string
}

export default function BlogDetail({ slug }: BlogDetailProps) {
  const router = useRouter()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/blog')
    }
  }

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetchBlogBySlug(slug)
        
        if (response.success && response.data.length > 0) {
          setBlog(response.data[0])
        } else {
          setError('Blog not found')
        }
      } catch (err) {
        setError('Error loading blog. Please try again.')
        console.error('Blog detail fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlogData()
    }
  }, [slug])

  useEffect(() => {
    if (blog?.style) {
      const styleElement = document.createElement('style')
      styleElement.textContent = blog.style
      document.head.appendChild(styleElement)

      return () => {
        if (document.head.contains(styleElement)) {
          document.head.removeChild(styleElement)
        }
      }
    }
  }, [blog?.style])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E0F18]">
        <Header />
        <div className="flex justify-center items-center py-32">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
            <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-t-2 border-blue-400"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#0E0F18]">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-sm text-gray-400">
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
                <li>
                  <button
                    onClick={handleBack}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-white">Error</li>
              </ol>
            </nav>

            <div className="text-red-400 mb-6">
              <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Blog Not Found</h1>
            <p className="text-gray-300 mb-8 text-lg">
              {error || "The blog post you're looking for doesn't exist."}
            </p>
            <button
              onClick={handleBack}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
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
            <li>
              <button
                onClick={handleBack}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Blog
              </button>
            </li>
            <li>
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-white truncate">{blog.Title}</li>
          </ol>
        </nav>

        {/* Back to Blog */}
        <button
          onClick={handleBack}
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </button>

        {/* Featured Image */}
        {/* {blog.Preview_Url && (
          <div className="aspect-video bg-[#1A1D28] rounded-xl overflow-hidden mb-8 relative border border-gray-700">
            <Image
              src={blog.Preview_Url}
              alt={blog.Title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.parentElement!.style.display = 'none'
              }}
            />
          </div>
        )} */}

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.Title}
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
                  <p className="text-white font-medium">By {blog.Created_User_Name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{formatBlogDate(blog.Scheduled_Time)}</span>
              </div>
            </div>
            
            {blog.Keywords && parseKeywords(blog.Keywords).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {parseKeywords(blog.Keywords).map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert  max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: blog.Content }}
              className="blog-content"
            />
          {/* {blog.style ? (
            <div dangerouslySetInnerHTML={{ __html: blog.Content }} />
          ) : (
            <div 
              dangerouslySetInnerHTML={{ __html: blog.Content }}
              className="blog-content"
            />
          )} */}
        </div>

        {/* Tags Section */}
        {blog.Keywords && parseKeywords(blog.Keywords).length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Tags
            </h4>
            <div className="flex flex-wrap gap-3">
              {parseKeywords(blog.Keywords).map((keyword, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-sm bg-[#1A1D28] text-gray-200 rounded-lg border border-gray-700 hover:bg-[#2A2D38] hover:border-gray-600 transition-colors duration-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {/* <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center">
            <button
              onClick={handleBack}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Posts
            </button>
          </div>
        </div> */}
      </motion.article>

      <Footer />
    </div>
  )
}