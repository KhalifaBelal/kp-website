import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Head from "next/head";
const Footer = dynamic(() => import("@/components/Footer"));
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

import type { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khalifa Partners | Home",
  description: "People First. Business Lasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-zinc-900 antialiased", montserrat.className)}
    >
      <GoogleAnalytics GA_MEASUREMENT_ID="G-KG3VJEPD33" />
      <Head>
        <link
          rel="preload"
          href="out/_next/static/media/1060bab20f18b5c2-s.p.woff2"
          type="font"
          as="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
      </Head>
      <body className="min-h-screen bg-zinc-900 antialiased">
        <CookieBanner />
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
