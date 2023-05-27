import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import LeadersIntro from "@/components/sections/leaders/LeadersIntro";
import SkillsLeaders from "@/components/sections/leaders/SkillsLeaders";
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/weWorkWith/contactApproach";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Leaders",
  description: "In progress...",
};

export default function page() {
  return (
    <>
      <LeadersIntro />
      <SkillsLeaders />
      <ContactApproach>
        <KPParagraph>
          In exchange for these invaluable skills and resources, we propose a
          partnership based on equity. This mutually beneficial arrangement
          allows you to focus on managing the day-to-day business while we
          handle the expertise required to excel in these critical areas.
          <br />
          <br />
          <span className="font-semibold">Join Khalifa Partners</span> today and
          unlock the full potential of your business. With our support in social
          media management, content creation, SEO, SEA, Facebook Ads, TikTok
          Ads, web design, software development, and branding, you can
          confidently drive growth and achieve long-term success while we
          contribute our specialized resources and skills.
        </KPParagraph>
      </ContactApproach>

      <Footer />
    </>
  );
}
