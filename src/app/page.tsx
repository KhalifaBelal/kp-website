import Intro from "@/components/sections/Intro";
import dynamic from "next/dynamic";
const Preface = dynamic(() => import("@/components/sections/Preface"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
const WhoWeWorkWith = dynamic(
  () => import("@/components/sections/WhoWeWorkWith")
);
const Concept = dynamic(() => import("@/components/sections/Concept"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
const StrategyStep = dynamic(
  () => import("@/components/sections/StrategyStep"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);
import { strategyStepData as Data } from "@/lib/strategyStepData";
import { prefaceData } from "@/lib/prefaceData";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Intro />
      <Suspense fallback={null}>
        <Concept />
      </Suspense>
      <Suspense fallback={null}>
        <WhoWeWorkWith />
      </Suspense>
      <Suspense fallback={null}>
        <Preface title={prefaceData[0].title} text={prefaceData[0].text} />
      </Suspense>
      <Suspense fallback={null}>
        {Data.map((step, index) => (
          <StrategyStep
            key={index}
            model={index}
            title={step.title}
            text={step.text}
          />
        ))}
      </Suspense>
      <Suspense fallback={null}>
        <Preface title={prefaceData[1].title} text={prefaceData[1].text} />
      </Suspense>
      <Suspense fallback={null}>
        <Preface
          title={prefaceData[2].title}
          text={prefaceData[2].text}
          withCta
          ctaText="Portfolio"
        />
      </Suspense>
    </div>
  );
}
