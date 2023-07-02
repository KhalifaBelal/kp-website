"use client"

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/contactApproach";
import Intro from "@/components/sections/solutions/funding/Intro";
import About from "@/components/sections/solutions/funding/About";
import FundingAdvantage from "@/components/sections/solutions/funding/FundingAdvantage";
import FundingSolutions from "@/components/sections/solutions/funding/FundingsSolutions";

import type { Metadata } from "next";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import MainPage from "@/components/sections/solutions/funding/MainPage";


export default function page() {
  return (
    <>
      <Intro />
      <About />
      <MainPage />
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
