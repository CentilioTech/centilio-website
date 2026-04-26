import type { Metadata } from "next"
import Link from "next/link"

// Explicitly override parent layout metadata for this route. Without this,
// the parent layout's <title> and <meta name="robots"> render alongside the
// not-found boundary's, producing duplicate tags in the 404 page HTML.
export const metadata: Metadata = {
  title: "Page Not Found — Centilio",
  description: "The page you were looking for could not be found.",
  robots: "noindex, nofollow",
  openGraph: { images: [] },
  twitter: { images: [] },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl text-gray-300 mb-6">Page not found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you were looking for doesn&apos;t exist or has been moved.
        Try the homepage or use the menu to find what you need.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  )
}
