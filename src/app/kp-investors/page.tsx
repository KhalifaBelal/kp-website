import Footer from "@/components/Footer";
import Intro from "@/components/sections/kp-entrepreneurs/landingPage/Intro";
import OurPortfolio from "@/components/sections/kp-investors/landingPage/OurPortfolio";
import LatestInvestments from "@/components/sections/kp-investors/landingPage/LatestInvestments";
import Marketplace from "@/components/sections/kp-investors/landingPage/Marketplace";
import OurMethod from "@/components/sections/kp-investors/landingPage/OurMethod";
import OurProducts from "@/components/sections/kp-investors/landingPage/OurProducts";
import HowToInvest from "@/components/sections/kp-investors/landingPage/HowToInvest";
import InvestorsPortalTeaser from "@/components/sections/kp-investors/landingPage/InvestorsPortalTeaser";
import InvestorResources from "@/components/sections/kp-investors/landingPage/InvestorResources";
import FAQ from "@/components/sections/kp-investors/landingPage/FAQ";

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden ">
      <Intro investors={true} />
      <OurMethod />
      <OurProducts />
      <Marketplace />
      <LatestInvestments />
      <OurPortfolio />
      <HowToInvest />
      <InvestorsPortalTeaser />
      <InvestorResources />
      <FAQ />
      <Footer />
    </div>
  );
}
