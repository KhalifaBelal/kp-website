import dynamic from "next/dynamic";
const Solutions = dynamic(
  () => import("@/components/sections/landingPage/Solutions")
);
const Concept = dynamic(
  () => import("@/components/sections/landingPage/Concept")
);
import Intro from "@/components/sections/landingPage/Intro";
import OurPortfolio from "@/components/sections/landingPage/OurPortfolio";
import QualificationProcess from "@/components/sections/conceptPage/QualificationProcess";
import BusinessIdea from "@/components/sections/landingPage/BusinessIdea";
import Footer from "@/components/Footer";
import Philosophy from "@/components/sections/landingPage/Philosophy";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Intro />
      <Concept />
      <Solutions />
      <BusinessIdea />
      <QualificationProcess />
      <OurPortfolio />
      <Philosophy />
      <Footer />
    </div>
  );
}
