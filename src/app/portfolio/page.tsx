import { portfolioData as Data } from "@/lib/portfolioData";
import PortfolioSection from "@/components/sections/PortfolioSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Portfolio",
  description: "Discover our Hall of Partners.",
};

export default function page() {
  return (
    <div>
      {Data.map((section, index) => (
        <PortfolioSection
          key={index}
          title={section.title}
          text={section.text}
          logoPath={section.logoPath}
          logoName={section.logoName}
        />
      ))}
    </div>
  );
}
