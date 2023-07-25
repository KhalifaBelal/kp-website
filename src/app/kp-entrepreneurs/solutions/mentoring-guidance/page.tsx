import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import ConceptSteps from "@/components/sections/kp-entrepreneurs/conceptPage/ConceptSteps";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions",
};

export default function page() {
  return (
    <>
      <ConceptSteps/>

      <Footer />
    </>
  );
}
