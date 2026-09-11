import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import FloatingCall from "@/components/layout/FloatingCall";
import { constructMetadata, getOrganizationSchema } from "@/lib/metadata";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationSchema();

  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} ${rajdhani.variable} scroll-smooth`}>
      <head>
        <link rel="preload" as="image" href="/siyaram_profile_sm.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-deep-navy font-body-md antialiased selection:bg-primary-container selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[80px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
      </body>
    </html>
  );
}
