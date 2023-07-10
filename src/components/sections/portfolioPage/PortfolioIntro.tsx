"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function PortfolioIntro() {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-left">
          Indroducing our portfolio of companies
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default PortfolioIntro;
