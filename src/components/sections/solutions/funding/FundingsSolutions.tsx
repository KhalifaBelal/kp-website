import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import KPParagraph from "@/components/ui/KPParagraph";

function FundingSolutions() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading textColor="black">Tailored Funding Solutions</KPHeading>
        <KPHeading textColor="black" size="sm">
          Customized to Your Needs
        </KPHeading>
        <KPParagraph textColor="black">
          We understand that every venture is unique. That's why we offer
          flexible funding options tailored to your specific requirements.
          Whether you need seed funding, early-stage investment, or growth
          capital, we've got you covered.
        </KPParagraph>
      </KPRow>
    </KPSection>
  );
}

export default FundingSolutions;
