import { FC } from "react";
import dynamic from "next/dynamic";
const PortfolioSection = dynamic(
  () => import("@/components/sections/PortfolioSection")
);
import { portfolioData as Data } from "@/lib/portfolioData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Portfolio",
  description: "Discover our Hall of Partners.",
};

const page: FC = () => {
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
};

export default page;
