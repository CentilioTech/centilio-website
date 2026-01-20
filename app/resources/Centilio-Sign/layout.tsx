import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centilio Sign – Centilio Blog",
  description: "Discover how mēkā, a leading product design agency, revolutionizes medical device design with Centilio Sign. Learn about advanced features, user-centered design, and innovative solutions that enhance patient care and streamline healthcare processes.",
  keywords: ["Centilio Sign", "medical device design", "product design", "mēkā", "healthcare technology", "user-centered design"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "Centilio Sign – Medical Device Innovation",
    siteName: "Centilio Blog",
    description: "Discover how mēkā, a leading product design agency, revolutionizes medical device design with Centilio Sign. Learn about advanced features, user-centered design, and innovative solutions that enhance patient care and streamline healthcare processes.",
    url: "https://centilio.com/resources/Centilio-Sign",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centilio Sign – Medical Device Innovation",
    description: "Discover how mēkā, a leading product design agency, revolutionizes medical device design with Centilio Sign. Learn about advanced features, user-centered design, and innovative solutions that enhance patient care and streamline healthcare processes.",
    site: "",
  },
  other: {
    "article:published_time": "2024-11-14T00:00:00+00:00",
    "article:modified_time": "2024-11-14T00:00:00+00:00",
    "article:section": "Medical Technology",
    "article:tag": "Medical Technology",
  },
}

export default function CentilioSignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
