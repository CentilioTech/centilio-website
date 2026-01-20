import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Importance of Digital Signatures for Your Business | Centilio – Centilio Blog",
  description: "Discover the importance of digital signatures for your business with Centilio Sign. Learn how digital signatures enhance security, streamline operations, and improve customer experience while ensuring legal validity and compliance.",
  keywords: ["digital signatures", "Centilio Sign", "electronic signature", "business security", "document management", "digital transformation"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "The Importance of Digital Signatures for Your Business | Centilio",
    siteName: "Centilio Blog",
    description: "Discover the importance of digital signatures for your business with Centilio Sign. Learn how digital signatures enhance security, streamline operations, and improve customer experience while ensuring legal validity and compliance.",
    url: "https://centilio.com/resources/digital-signature-importance",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Importance of Digital Signatures for Your Business | Centilio",
    description: "Discover the importance of digital signatures for your business with Centilio Sign. Learn how digital signatures enhance security, streamline operations, and improve customer experience while ensuring legal validity and compliance.",
    site: "",
  },
  other: {
    "article:published_time": "2024-08-04T00:00:00+00:00",
    "article:modified_time": "2024-08-04T00:00:00+00:00",
    "article:section": "Digital Signatures",
    "article:tag": "Digital Signatures",
  },
}

export default function DigitalSignatureImportanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}