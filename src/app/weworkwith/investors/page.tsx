import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import InvestIntro from "@/components/sections/investorsPage/InvestIntro";
import WhyInvest from "@/components/sections/investorsPage/WhyInvest";
import HowToInvest from "@/components/sections/investorsPage/HowToInvest";
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/contactApproach";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors"
};

export default function page() {
  return (
    <>
      <InvestIntro />
      <WhyInvest />
      <HowToInvest />
      <ContactApproach>
        <KPParagraph>
          <span className="font-semibold">Contact us</span> today to begin your
          investment journey with Khalifa Partners. Together, we&apos;ll embark
          on a path of strategic investment, unlocking the potential of
          transformative ventures and creating a brighter future.
        </KPParagraph>
      </ContactApproach>

      <Footer />
    </>
  );
}
