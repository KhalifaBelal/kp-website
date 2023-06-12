import dynamic from "next/dynamic";
const WeWorkWith = dynamic(
  () => import("@/components/sections/landingPage/WeWorkWith")
);
const Concept = dynamic(
  () => import("@/components/sections/landingPage/Concept")
);
const Philosophy = dynamic(
  () => import("@/components/sections/landingPage/Philosophy")
);
const Footer = dynamic(() => import("@/components/Footer"));
import Intro from "@/components/sections/landingPage/Intro";
import OurPortfolio from "@/components/sections/landingPage/OurPortfolio";
import QualificationProcess from "@/components/sections/conceptPage/QualificationProcess";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Intro />
      <Concept />
      <WeWorkWith />
      <QualificationProcess />
      <OurPortfolio />
      <Philosophy />
      <Footer />
    </div>
  );
}
