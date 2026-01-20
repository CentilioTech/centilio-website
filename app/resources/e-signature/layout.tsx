import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "e signature – Centilio Blog",
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "e signature",
    siteName: "Centilio Blog",
    description: "Centilio Sign emerges as a trusted and reliable choice for businesses seeking enhanced efficiency and security in their electronic signature processes.",
    url: "https://centilio.com/resources/e-signature/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "e signature",
    description: "Centilio Sign emerges as a trusted and reliable choice for businesses seeking enhanced efficiency and security in their electronic signature processes.",
    site: "",
  },
  other: {
    "article:published_time": "2024-08-07T00:00:00+00:00",
    "article:modified_time": "2024-08-07T00:00:00+00:00",
    "article:section": "Electronic Signatures",
    "article:tag": "Electronic Signatures",
  },
}

export default function ESignatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}