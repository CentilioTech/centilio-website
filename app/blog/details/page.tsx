'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogDetail from '@/components/blog/BlogDetail'

function BlogDetailsContent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug') || ''

  return <BlogDetail slug={slug} />
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0E0F18] flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-t-2 border-blue-400"></div>
        </div>
      </div>
    }>
      <BlogDetailsContent />
    </Suspense>
  )
}