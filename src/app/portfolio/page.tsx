import { portfolioData as Data } from "@/lib/portfolioData";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactApproach from "@/components/contactApproach";
import Footer from "@/components/Footer";
import KPParagraph from "@/components/ui/KPParagraph";
import PortfolioIntro from "@/components/sections/portfolioPage/PortfolioIntro";

export default function page() {
  return (
    <>
      <PortfolioIntro />
      {Data.map((section, index) => (
        <PortfolioSection
          key={index}
          title={section.title}
          text={section.text}
          logoPath={section.logoPath}
          logoName={section.logoName}
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

      <Footer />
    </>
  );
}
