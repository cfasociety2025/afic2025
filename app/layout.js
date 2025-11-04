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
        
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4279781629012441');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4279781629012441&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
