import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-zinc-900 antialiased",
        montserrat.className
      )}
    >
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-900 antialiased">
        <Providers>
          <MobileMenu />

          <Navbar />
          <main>{children}</main>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}