import dynamic from "next/dynamic";
const Partnership = dynamic(
  () => import("@/components/sections/kp-entrepreneurs/landingPage/Partnership")
);
const Concept = dynamic(
  () => import("@/components/sections/kp-entrepreneurs/landingPage/Concept")
);
import Intro from "@/components/sections/kp-entrepreneurs/landingPage/Intro";
import OurPortfolio from "@/components/sections/kp-entrepreneurs/landingPage/OurPortfolio";
import QualificationProcess from "@/components/sections/kp-entrepreneurs/conceptPage/QualificationProcess";
import WhoWeWorkWith from "@/components/sections/kp-entrepreneurs/landingPage/WhoWeWorkWith";
import Footer from "@/components/Footer";
import Philosophy from "@/components/sections/kp-entrepreneurs/landingPage/Philosophy";
import Navbar from "@/components/Navbar";
import Founders from '@/components/sections/kp-entrepreneurs/landingPage/Founders';

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar investors={false} />
      <Intro investors={false} />
      <Concept />
      <Partnership />
      <WhoWeWorkWith />
      <OurPortfolio />
      <Founders />
      <Philosophy />
      <Footer />
    </div>
  );
}
