import "./globals.css";

export const metadata = {
  title: "Africa Investment Conference 2025 | AfIC 2025 | CFA Society East Africa",
  description: "Join 300+ finance leaders at Africa's premier investment conference. March 15-16, 2025. Discover next-generation strategies for Africa's digital transformation.",
  keywords: "Africa Investment Conference, AfIC 2025, CFA Society East Africa, investment, finance, Africa, conference",
  openGraph: {
    title: "Africa Investment Conference 2025",
    description: "Africa's premier investment conference - March 15-16, 2025",
    url: "https://afic2025.com",
    siteName: "AfIC 2025",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
