import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparing Top Digital Signature Solutions: Features – Centilio Blog",
  description: "Explore Centilio Sign, a trusted electronic signature solution designed to streamline business operations with advanced features, security, and seamless integrations.",
  keywords: ["digital signature solutions", "Centilio Sign", "electronic signatures", "document signing", "business features", "signature comparison"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "Comparing Top Digital Signature Solutions: Features",
    siteName: "Centilio Blog",
    description: "Explore Centilio Sign, a trusted electronic signature solution designed to streamline business operations with advanced features, security, and seamless integrations.",
    url: "https://centilio.com/resources/Comparing-Top-Digital-Signature-Solutions:-Features",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparing Top Digital Signature Solutions: Features",
    description: "Explore Centilio Sign, a trusted electronic signature solution designed to streamline business operations with advanced features, security, and seamless integrations.",
    site: "",
  },
  other: {
    "article:published_time": "2024-08-05T00:00:00+00:00",
    "article:modified_time": "2024-08-05T00:00:00+00:00",
    "article:section": "Digital Signatures",
    "article:tag": "Digital Signatures",
  },
}

export default function ComparingTopDigitalSignatureSolutionsFeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
