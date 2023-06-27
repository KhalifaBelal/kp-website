import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import SkillsLeaders from "@/components/sections/leadersPage/SkillsLeaders";
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/contactApproach";

import type { Metadata } from "next";
import ConceptSteps from "@/components/sections/conceptPage/ConceptSteps";

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
