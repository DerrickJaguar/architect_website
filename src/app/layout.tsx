import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Above Architects - Excellence in Architecture & Design | Uganda",
  description: "Leading architectural firm in Uganda specializing in residential, commercial, and mixed-use design. Excellence in Architecture & Design.",
  keywords: ["Above Architects", "Architecture Uganda", "Interior design", "Landscaping", "Construction", "Consultancy", "Kampala architects", "Uganda architecture"],
  authors: [{ name: "Above Architects" }],
  openGraph: {
    title: "Above Architects - Architectural Company in Uganda",
    description: "Explore Architecture at its best with Above Architects Uganda",
    url: "https://www.abovearchitects.com",
    siteName: "Above Architects",
    images: [
      {
        url: "/images/AboveLogo.png",
        width: 1200,
        height: 630,
        alt: "Above Architects Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Above Architects - Excellence in Architecture & Design",
    description: "Leading architectural firm in Uganda",
    images: ["/images/AboveLogo.png"],
  },
  icons: {
    icon: [
      { url: "/images/AboveLogo.png" },
      { url: "/images/AboveLogo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/AboveLogo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/AboveLogo.png",
    shortcut: "/images/AboveLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          src="https://kit.fontawesome.com/707ca0a07c.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans text-gray-800 antialiased`}
        suppressHydrationWarning
      >
        <PageLoader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}

