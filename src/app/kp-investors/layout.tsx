import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP | For Investors",
  description: "People First. Business Lasts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar investors={true} />
      <main className="bg-zinc-100">{children}</main>
    </>
  );
}
