import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a Gmail Signature | Email Personalization Guide – Centilio Blog",
  description: "Learn how to create professional email signatures for Gmail and other email platforms. Complete guide to email personalization and electronic signatures.",
  keywords: ["gmail signature", "email signature", "electronic signature", "email personalization", "professional email", "Centilio Sign"],
  robots: "max-image-preview:large",
  openGraph: {
    type: "article",
    title: "How to Create a Gmail Signature | Email Personalization Guide",
    siteName: "Centilio Blog",
    description: "Learn how to create professional email signatures for Gmail and other email platforms. Complete guide to email personalization and electronic signatures.",
    url: "https://centilio.com/resources/How-can-I-create-an-electronic-signature-for-my-email_1",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create a Gmail Signature | Email Personalization Guide",
    description: "Learn how to create professional email signatures for Gmail and other email platforms. Complete guide to email personalization and electronic signatures.",
    site: "",
  },
  other: {
    "article:published_time": "2024-11-14T00:00:00+00:00",
    "article:modified_time": "2024-11-14T00:00:00+00:00",
    "article:section": "Email Marketing",
    "article:tag": "Email Marketing",
  },
}

export default function HowCanICreateAnElectronicSignatureForMyEmailOneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
