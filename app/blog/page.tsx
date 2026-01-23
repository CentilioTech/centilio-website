import { Suspense } from 'react'
import Blog from '@/components/blog/Blog'

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogLoadingFallback />}>
      <Blog />
    </Suspense>
  )
}

function BlogLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0E0F18] flex justify-center items-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-t-2 border-blue-400"></div>
      </div>
    </div>
  )
}
