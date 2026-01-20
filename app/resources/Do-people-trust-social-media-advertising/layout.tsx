import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Trust in Digital Advertising | Centilio's Insights – Centilio Blog",
  description: "Explore strategies for brands to build trust with consumers in a challenging digital advertising landscape, featuring insights from Centilio.",
  keywords: ["digital advertising", "trust in advertising", "social media marketing", "consumer trust", "zero-party data", "influencer marketing", "transparency"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "Building Trust in Digital Advertising | Centilio's Insights",
    siteName: "Centilio Blog",
    description: "Explore strategies for brands to build trust with consumers in a challenging digital advertising landscape, featuring insights from Centilio.",
    url: "https://centilio.com/resources/Do-people-trust-social-media-advertising",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Trust in Digital Advertising | Centilio's Insights",
    description: "Explore strategies for brands to build trust with consumers in a challenging digital advertising landscape, featuring insights from Centilio.",
    site: "",
  },
  other: {
    "article:published_time": "2025-01-16T00:00:00+00:00",
    "article:modified_time": "2025-01-16T00:00:00+00:00",
    "article:section": "Digital Marketing",
    "article:tag": "Digital Marketing",
  },
}

export default function DoPeopleTrustSocialMediaAdvertisingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
