"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function InvestIntro() {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col" alignItems="start">
        <KPHeading className="text-left">We work with investors</KPHeading>

        <KPHeading size="sm" fontWeight="normal" className="text-left">
          <span className="font-semibold">Unlocking Potential:</span> Invest in
          the Khalifa Partners Investment Fund Are you ready to be part of a
          transformative journey, fueling the growth of innovative startups and
          businesses? Khalifa Partners invites you to invest in our
          groundbreaking investment fund, where we channel capital towards
          high-potential ventures that are poised to disrupt industries and
          shape the future.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default InvestIntro;
