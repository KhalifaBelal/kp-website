import dynamic from "next/dynamic";
const Preface = dynamic(() => import("@/components/sections/Preface"));
const WhoWeWorkWith = dynamic(
  () => import("@/components/sections/WhoWeWorkWith")
);
import { strategyStepData as Data } from "@/lib/strategyStepData";
import { prefaceData } from "@/lib/prefaceData";
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Concept from "@/components/sections/Concept";
import Intro from "@/components/sections/Intro";
import StrategyStep from "@/components/sections/StrategyStep";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Home",
  description: "People First. Business Lasts.",
};

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar />
      <MobileMenu />
      <Intro />
      <Concept />
      <WhoWeWorkWith />
      <Preface title={prefaceData[0].title} text={prefaceData[0].text} />
      {Data.map((step, index) => (
        <StrategyStep
          key={index}
          model={index}
          title={step.title}
          text={step.text}
        />
      ))}
      <Preface title={prefaceData[1].title} text={prefaceData[1].text} />
      <Preface
        title={prefaceData[2].title}
        text={prefaceData[2].text}
        withCta
        ctaText="Portfolio"
      />
    </div>
  );
}
