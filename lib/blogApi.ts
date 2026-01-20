import { BlogApiResponse, BlogDetailResponse } from '@/types/blog'

const API_BASE_URL = 'https://seobot.centilio.com/blog'
const ORG_ID = 332

export const fetchBlogs = async (page: number = 1, limit: number = 6): Promise<BlogApiResponse> => {
  try {
    const url = `${API_BASE_URL}?org_id=${ORG_ID}&limit=${limit}&cursor=${page}`
    
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

export const fetchBlogBySlug = async (slug: string): Promise<BlogDetailResponse> => {
  try {
    const url = `${API_BASE_URL}?org_id=${ORG_ID}&slug=${slug}`
    
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    throw error
  }
}

export const formatBlogDate = (dateString: string): string => {
  try {
    const [datePart] = dateString.split(' ')
    const [day, month, year] = datePart.split('/')
    
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    
    const monthIndex = parseInt(month) - 1
    const monthName = monthNames[monthIndex] || 'Unknown'
    
    return `${monthName} ${parseInt(day)}, ${year}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

export const extractExcerpt = (content: string, maxLength: number = 120): string => {
  if (!content) return ''
  const textContent = content.replace(/<[^>]*>/g, '').trim()
  if (textContent.length <= maxLength) return textContent
  return textContent.substring(0, maxLength) + '...'
}

export const parseKeywords = (keywords: string | undefined): string[] => {
  if (!keywords) return []
  return keywords.split(',').map(k => k.trim()).filter(k => k.length > 0).slice(0, 3)
}