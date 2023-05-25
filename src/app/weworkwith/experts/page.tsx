import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Expert",
  description: "In progress...",
};

export default function page() {
  return (
    <div>
      <Footer />
    </div>
  );
}
