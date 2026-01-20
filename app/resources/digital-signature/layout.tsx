import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Signature Solutions for Modern Business – Centilio Blog",
  description: "Comprehensive guide to digital signatures and electronic signature solutions. Learn about Centilio Sign's features, security, and benefits for business automation.",
  keywords: ["digital signature", "electronic signature", "Centilio Sign", "document signing", "business automation", "secure signatures"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "Digital Signature Solutions for Modern Business",
    siteName: "Centilio Blog",
    description: "Comprehensive guide to digital signatures and electronic signature solutions. Learn about Centilio Sign's features, security, and benefits for business automation.",
    url: "https://centilio.com/resources/digital-signature",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signature Solutions for Modern Business",
    description: "Comprehensive guide to digital signatures and electronic signature solutions. Learn about Centilio Sign's features, security, and benefits for business automation.",
    site: "",
  },
  other: {
    "article:published_time": "2024-08-01T00:00:00+00:00",
    "article:modified_time": "2024-08-01T00:00:00+00:00",
    "article:section": "Digital Signatures",
    "article:tag": "Digital Signatures",
  },
}

export default function DigitalSignatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
