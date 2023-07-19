import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { kpButtonVariants } from "@/ui/KPButton";
import PortfolioIntro from "../../portfolioPage/PortfolioIntro";
import ContactApproach from "@/components/contactApproach";
import Footer from "@/components/Footer";
import PortfolioSection from "../../PortfolioSection";
import { portfolioData as Data } from "@/lib/portfolioData";

function OurPortfolio() {
  return (
    <div className="bg-gradient-to-br from-zinc-700 via-black to-zinc-700">
      <PortfolioIntro />
      {Data.map((section, index) => (
        <PortfolioSection
          key={index}
          title={section.title}
          text={section.text}
          logoPath={section.logoPath}
          logoName={section.logoName}
          websiteUrl={section.websiteUrl}
        />
      ))}
      <ContactApproach>
        <KPParagraph>
          As you dive into our portfolio, you&apos;ll discover the remarkable
          innovations and groundbreaking solutions that these companies bring to
          the table. We are committed to nurturing their growth, providing
          strategic guidance, and unlocking their full potential. <br />
          <br /> Join us in celebrating the achievements of our portfolio
          companies and witness the transformation they bring to their
          respective industries. <br />
          <br />
          <span className="font-semibold">
            Welcome to the world of Khalifa Partners.
          </span>
        </KPParagraph>
      </ContactApproach>
    </div>
  );
}

export default OurPortfolio;
