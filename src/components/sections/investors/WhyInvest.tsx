import { WhyInvestAccordion } from "@/components/WhyInvestAccordion";
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function WhyInvest() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start" className="gap-16">
        <KPHeading className="text-black">
          Why Invest in Khalifa Partners&apos; Investment Fund?
        </KPHeading>
        <WhyInvestAccordion />
      </KPRow>
    </KPSection>
  );
}

export default WhyInvest;
