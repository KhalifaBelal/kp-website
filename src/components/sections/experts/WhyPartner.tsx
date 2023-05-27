import WeWorkWithAccordion from "@/components/weWorkWith/WeWorkWithAccordion";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function WhyPartner() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start" className="gap-16">
        <KPHeading className="text-black">
          Why Invest in Khalifa Partners&apos; Investment Fund?
        </KPHeading>
        <WeWorkWithAccordion item={2} />
      </KPRow>
    </KPSection>
  );
}

export default WhyPartner;
