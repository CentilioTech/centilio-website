import type { MetadataRoute } from "next"

// Required when next.config.ts has output: 'export'. Without this, the build
// errors out with "Failed to collect page data for /robots.txt" (or sitemap.xml).
// We don't have any dynamic data here — both files are pure functions of the
// hard-coded route list — so force-static is exactly right.
export const dynamic = 'force-static'


// Generates /sitemap.xml at build time. Includes the marketing routes that
// currently exist on production. Excludes duplicates (/home → /, /contactpage
// → /contact) and routes that 404 (e.g. /products, /pricing). Update this
// list when new pages ship; each new public page should be added here so
// search engines pick it up.
const ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/",          changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",     changeFrequency: "monthly", priority: 0.8 },
  { path: "/contactpage", changeFrequency: "monthly", priority: 0.8 },
  // Phase 2 skeleton "Coming soon" pages (Apr 2026 audit). Lower priority
  // than fully built pages until real content ships.
  { path: "/products",     changeFrequency: "monthly", priority: 0.6 },
  { path: "/pricing",      changeFrequency: "monthly", priority: 0.6 },
  { path: "/demo",         changeFrequency: "monthly", priority: 0.6 },
  { path: "/partners",     changeFrequency: "monthly", priority: 0.5 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.5 },
  { path: "/sign",      changeFrequency: "monthly", priority: 0.9 },
  { path: "/seo-bot",   changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog",      changeFrequency: "weekly",  priority: 0.7 },
  { path: "/careers",   changeFrequency: "monthly", priority: 0.5 },
  { path: "/signup",    changeFrequency: "yearly",  priority: 0.6 },
  { path: "/privacy",   changeFrequency: "yearly",  priority: 0.3 },
  { path: "/terms",     changeFrequency: "yearly",  priority: 0.3 },
  { path: "/cookies",   changeFrequency: "yearly",  priority: 0.3 },
  { path: "/gdpr",      changeFrequency: "yearly",  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `https://centilio.com${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
