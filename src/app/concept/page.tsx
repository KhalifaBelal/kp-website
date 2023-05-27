import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import ExpertsIntro from "@/components/sections/experts/ExpertsIntro";
import WhyPartner from "@/components/sections/experts/WhyPartner";
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/weWorkWith/contactApproach";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Concept",
  description: "In progress...",
};

export default function page() {
  return (
    <>
      <ExpertsIntro />
      <WhyPartner />
      <ContactApproach>
        <KPParagraph>
          <span className="font-semibold">Contact us</span> today to explore
          partnership opportunities and unleash your potential as an execution
          partner with Khalifa Partners. Let&apos;s embark on a transformative
          journey, leveraging our collective expertise to create remarkable
          digital experiences for our partners.
        </KPParagraph>
      </ContactApproach>

      <Footer />
    </>
  );
}
