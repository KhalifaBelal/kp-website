"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function PortfolioIntro() {
  return (
    <div className="flex items-center justify-start pt-[9.5rem]">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-left text-black">
          Introducing Khalifa Group&apos;s Exemplary Portfolio of Companies
        </KPHeading>
        <KPHeading fontWeight={"normal"} className="text-left text-black">
          At Khalifa Group, we take immense pride in our diverse and exceptional
          portfolio of companies that have been carefully nurtured and brought
          to life through strategic investments and unwavering dedication. Each
          company in our portfolio embodies innovation, sustainable growth, and
          a vision to make a positive impact on the world.
        </KPHeading>     
      </KPRow>
    </div>
  );
}

export default PortfolioIntro;
