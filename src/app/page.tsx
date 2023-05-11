import Navbar from "@/components/Navbar";
import Concept from "@/components/sections/Concept";
import Intro from "@/components/sections/Intro";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Home",
  description: "People First. Business Lasts.",
};

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar />
      <Intro />
      <Concept />
    </div>
  );
}
