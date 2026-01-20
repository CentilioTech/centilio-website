import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparing Top Digital Signature Solutions: Features1 – Centilio Blog",
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "Comparing Top Digital Signature Solutions: Features1",
    siteName: "Centilio Blog",
    description: "Explore Centilio Sign, a trusted electronic signature solution designed to streamline business operations with advanced features, security, and seamless integrations.",
    url: "https://centilio.com/resources/Comparing-Top-Digital-Signature-Solutions:-Features1/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparing Top Digital Signature Solutions: Features1",
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

export default function ComparingTopDigitalSignatureSolutionsFeaturesOneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}