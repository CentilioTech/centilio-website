import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are Facebook Ads Free? Unveiling the Truth Behind Costs – Centilio Blog",
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "10 Powerful Strategies for Maximum Audience Engagement",
    siteName: "Centilio Blog",
    description: "Dive deep into the realm of audience engagement and discover 10 powerful strategies that brands are utilizing to connect with their customers and boost loyalty.",
    url: "https://centilio.com/resources/10-powerful-strategies-for-maximum-audience-engagement/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Powerful Strategies for Maximum Audience Engagement",
    description: "Dive deep into the realm of audience engagement and discover 10 powerful strategies that brands are utilizing to connect with their customers and boost loyalty.",
    site: "",
  },
  other: {
    "article:published_time": "2023-11-22T16:00:00+00:00",
    "article:modified_time": "2023-11-02T07:01:08+00:00",
    "article:section": "Audience Engagement",
    "article:tag": "Audience Engagement",
  },
}

export default function FacebookAdsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}