import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { whyInvestData as Data } from "@/lib/investors/whyInvestData";

function WhyInvest() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start" className="gap-16">
        <KPHeading className="text-black">
          Why Invest in Khalifa Partners' Investment Fund?
        </KPHeading>

        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
          className="gap-10"
        >
          {Data.map((_investItem, index) => (
            <KPRow
              wrapperContainer="disable"
              flexDirection="col"
              alignItems="start"
            >
              <KPHeading key={index} size="sm" className="text-black">
                {_investItem.title}
              </KPHeading>
              <KPParagraph className="text-slate-700">
                {_investItem.text}
              </KPParagraph>
            </KPRow>
          ))}
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default WhyInvest;
