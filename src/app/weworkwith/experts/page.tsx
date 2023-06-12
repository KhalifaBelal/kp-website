import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import ContactApproach from "@/components/contactApproach";
import ExpertsIntro from "@/components/sections/expertsPage/ExpertsIntro";
import WhyPartner from "@/components/sections/expertsPage/WhyPartner";
import KPParagraph from "@/components/ui/KPParagraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Experts"
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
