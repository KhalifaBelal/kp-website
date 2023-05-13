import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";

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
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900 antialiased">
        <Providers>
          <MobileMenu />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
