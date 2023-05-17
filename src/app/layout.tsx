import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import Square from "../../public/square.png";
import dynamic from "next/dynamic";
import Head from "next/head";
const CookieBanner = dynamic(async () => import("@/components/CookieBanner"));
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"));

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
      <GoogleAnalytics GA_MEASUREMENT_ID="G-KG3VJEPD33" />
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900 antialiased">
        <Providers>
          <CookieBanner />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
