import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <head>
        <link rel="preconnect" href="https://staging.khalifapartners.com/" />
        <link rel="dns-prefetch" href="https://staging.khalifapartners.com/" />
      </head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-KG3VJEPD33" />
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900 antialiased">
        <Providers>
          <main>{children}</main>
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
