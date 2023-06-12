"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function PortfolioIntro() {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col" alignItems="start">
        <KPHeading className="text-left">
          Indroducing our portfolio of companies
        </KPHeading>

        <KPHeading size="sm" fontWeight="normal" className="text-left">
          Invest At Khalifa Partners, our diverse portfolio comprises a
          collection of exceptional companies, each making waves in their
          respective industries. We are proud to present our visionary ventures
          that are driving innovation, disruption, and growth. Let&apos;s
          explore the remarkable stories and achievements of each company:
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default PortfolioIntro;
