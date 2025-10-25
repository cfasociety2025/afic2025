import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  title: "Africa Investment Conference 2025 | AfIC 2025 | CFA Society East Africa",
  description: "Africa investing in Africa — Solutions to Challenges",
  keywords: "Africa Investment Conference, AfIC 2025, CFA Society East Africa, investment, finance, Africa, conference",
  openGraph: {
    title: "Africa Investment Conference 2025",
    description: "Africa investing in Africa — Solutions to Challenges",
    url: "https://afic2025.com",
    siteName: "AfIC 2025",
    type: "website",
    images: [
      {
        url: "/metaimage.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Investment Conference 2025",
    description: "Africa investing in Africa — Solutions to Challenges",
    images: ["/metaimage.jpeg"],
  },
  icons: {
    icon: "/aficdarklogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0JRFF4F8SP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0JRFF4F8SP');
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
