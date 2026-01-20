import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "e signature -1 – Centilio Blog",
  description: "Explore the comprehensive features and benefits of Centilio Sign, a cutting-edge electronic signature solution that streamlines document signing processes for businesses.",
  keywords: ["electronic signature", "digital signature", "Centilio Sign", "document signing", "e-signature software"],
  robots: "index, follow",
  openGraph: {
    type: "article",
    title: "e signature -1 – Centilio Blog",
    siteName: "Centilio Blog",
    description: "Explore the comprehensive features and benefits of Centilio Sign, a cutting-edge electronic signature solution that streamlines document signing processes for businesses.",
    url: "https://centilio.com/resources/e-signature--1",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "e signature -1 – Centilio Blog",
    description: "Explore the comprehensive features and benefits of Centilio Sign, a cutting-edge electronic signature solution that streamlines document signing processes for businesses.",
    site: "",
  },
  other: {
    "article:published_time": "2024-08-07T16:00:00+00:00",
    "article:modified_time": "2024-08-07T16:00:00+00:00",
    "article:section": "Electronic Signature",
    "article:tag": "Electronic Signature",
  },
}

export default function ESignatureMinusOneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}