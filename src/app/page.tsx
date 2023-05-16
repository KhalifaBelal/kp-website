import dynamic from "next/dynamic";
const MobileMenu = dynamic(async () => import("@/components/MobileMenu"));
const Navbar = dynamic(async () => import("@/components/Navbar"));
const Concept = dynamic(() => import("@/components/sections/Concept"));
const Intro = dynamic(async () => import("@/components/sections/Intro"));
const Preface = dynamic(() => import("@/components/sections/Preface"));
const StrategyStep = dynamic(
  () => import("@/components/sections/StrategyStep")
);
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import { strategyStepData as Data } from "@/lib/strategyStepData";

import type { Metadata } from "next";
import { prefaceData } from "@/lib/prefaceData";

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
