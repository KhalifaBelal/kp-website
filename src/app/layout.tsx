import "@/styles/globals.css";
import Providers from "@/components/Providers";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

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
          <Navbar />
          <CookieBanner />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
