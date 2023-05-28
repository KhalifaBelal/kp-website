import dynamic from "next/dynamic";
const WeWorkWith = dynamic(() => import("@/components/sections/WeWorkWith"));
const Concept = dynamic(() => import("@/components/sections/Concept"));
const Footer = dynamic(() => import("@/components/Footer"));
import Intro from "@/components/sections/Intro";
import Preface from "@/components/sections/Preface";
import { prefaceData } from "@/lib/prefaceData";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Intro />
      <Concept />
      <WeWorkWith />
      <Preface
        title={prefaceData[2].title}
        text={prefaceData[2].text}
        withCta
        ctaText="Portfolio"
      />
      <Footer />
    </div>
  );
}
