import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP | For Entrepreneurs",
  description: "People First. Business Lasts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
