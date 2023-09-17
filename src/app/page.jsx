import dynamic from "next/dynamic";
const Solutions = dynamic(
  () => import("@/components/sections/kp-entrepreneurs/landingPage/Solutions")
);
const Concept = dynamic(
  () => import("@/components/sections/kp-entrepreneurs/landingPage/Concept")
);
import Intro from "@/components/sections/kp-entrepreneurs/landingPage/Intro";
import OurPortfolio from "@/components/sections/kp-entrepreneurs/landingPage/OurPortfolio";
import QualificationProcess from "@/components/sections/kp-entrepreneurs/conceptPage/QualificationProcess";
import BusinessIdea from "@/components/sections/kp-entrepreneurs/landingPage/BusinessIdea";
import Footer from "@/components/Footer";
import Philosophy from "@/components/sections/kp-entrepreneurs/landingPage/Philosophy";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Navbar investors={false} />
      <Intro investors={false} />
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
