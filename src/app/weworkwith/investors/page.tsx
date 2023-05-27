import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import InvestIntro from "@/components/sections/investors/InvestIntro";
import WhyInvest from "@/components/sections/investors/WhyInvest";
import HowToInvest from "@/components/sections/investors/HowToInvest";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPHeading from "@/components/ui/KPHeading";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description: "Coming soon...",
};

export default function page() {
  return (
    <div>
      <InvestIntro />
      <WhyInvest />
      <HowToInvest />
      <KPRow flexDirection="default" className="py-32">
        <KPHeading>
          People <span className="text-kp-red">First</span>. Business Lasts.
        </KPHeading>
        <KPParagraph>
          <span className="font-semibold">Contact us</span> today to begin your
          investment journey with Khalifa Partners. Together, we&apos;ll embark on a
          path of strategic investment, unlocking the potential of
          transformative ventures and creating a brighter future.
        </KPParagraph>
      </KPRow>

      <Footer />
    </div>
  );
}
