import type { MetadataRoute } from "next"

// Required when next.config.ts has output: 'export'. Without this, the build
// errors out with "Failed to collect page data for /robots.txt" (or sitemap.xml).
// We don't have any dynamic data here — both files are pure functions of the
// hard-coded route list — so force-static is exactly right.
export const dynamic = 'force-static'


// Generates /robots.txt at build time. Replaces the previous behaviour of
// returning the rendered Next.js 404 page when crawlers requested /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow common Next.js asset / API surfaces that should never be
        // crawled. /_next/data is internal RSC payload; /api is server routes
        // not intended for indexing.
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://centilio.com/sitemap.xml",
    host: "https://centilio.com",
  }
}
