import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import KPParagraph from "@/components/ui/KPParagraph";

function FundingAdvantage() {
  return (
    <KPRow flexDirection="col" alignItems="start">
      <KPHeading textColor="black">Our Funding Advantage</KPHeading>
      <KPHeading textColor="black" size="sm">
        Unlock the Power of Capital
      </KPHeading>
      <KPParagraph textColor="black">
        <span className="font-semibold">
          Turn your groundbreaking ideas into reality without worrying about
          financing. Our unique funding advantage sets us apart:
        </span>
        <br />
        Access our pool of funds to support your venture&apos;s growth Leverage
        our extensive network of investors for optimal funding opportunities
        Gain expert guidance from industry veterans, entrepreneurs, and
        financial experts
      </KPParagraph>
    </KPRow>
  );
}

export default FundingAdvantage;
