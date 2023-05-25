import Intro from "@/components/sections/Intro";
import dynamic from "next/dynamic";
const Preface = dynamic(() => import("@/components/sections/Preface"));
const WeWorkWith = dynamic(
  () => import("@/components/sections/WeWorkWith")
);
const Concept = dynamic(() => import("@/components/sections/Concept"));
const StrategyStep = dynamic(
  () => import("@/components/sections/StrategyStep")
);
import { strategyStepData as Data } from "@/lib/strategyStepData";
import { prefaceData } from "@/lib/prefaceData";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Intro />
      <Concept />
      <WeWorkWith />
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
