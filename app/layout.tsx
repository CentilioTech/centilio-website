import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script' 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Centilio - Your Trusted Growth Engine",
  description: "Centilio is your growth partner. From strategy to execution, we deliver end-to-end solutions that scale your revenue and simplify your operations.",
     keywords: ["growth engine", "business automation", "revenue scaling"],                                                                                      
   authors: [{ name: "Centilio" }],                                                                                                                            
   creator: "Centilio",                                                                                                                                        
   publisher: "Centilio",                                                                                                                                      
   robots: "index, follow",                                                                                                                                    
   openGraph: {                                                                                                                                                
     title: "Centilio - Your Trusted Growth Engine",                                                                                                           
     description: "Growth partner for scaling revenue",                                                                                                        
     url: "https://centilio.com",                                                                                                                              
     siteName: "Centilio",                                                                                                                                     
     images: [{ url: "/images/og-image.jpg" }],                                                                                                                
     type: "website",                                                                                                                                          
   },                                                                                                                                                          
   twitter: {                                                                                                                                                  
     card: "summary_large_image",                                                                                                                              
     title: "Centilio - Your Trusted Growth Engine",                                                                                                           
     description: "Growth partner for scaling revenue",                                                                                                        
     images: ["/images/twitter-image.jpg"],                                                                                                                    
   }, 
  icons: {
    icon: [
      { url: '/images/favicon/centilio-favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon/centilio-favicon.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/favicon.ico', sizes: '48x48', type: 'image/x-icon' }
    ],
    shortcut: '/images/favicon/centilio-favicon.png',
    apple: [
      { url: '/images/favicon/centilio-favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/images/favicon/centilio-favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/centilio-favicon.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/images/favicon/site.webmanifest',
  themeColor: '#0E0F18',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KMJ8PPK');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMJ8PPK"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
