"use client";

import CalcDialog from "@/components/ui/CalcDialog";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import { useState } from "react";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";
import AnimatedCard from "@/components/card/AnimatedCard";
import KPSection from "@/components/ui/KPSection";

function Marketplace() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const dataSliceOne = Data.slice(0, 2);
  const dataSliceTwo = Data.slice(2, 4);

  return (
    <KPSection
      className="w-full bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100"
      id="marketplace"
    >
      <KPRow flexDirection="col" alignItems="start" className="gap-20">
        <KPHeading className="text-black">Marketplace</KPHeading>
        <KPRow justifyContent="start" className="gap-10">
          {dataSliceOne.map((card, index) => (
            <AnimatedCard
              key={index}
              icon={card.icon}
              title={card.title}
              investmentTarget={card.investmentTarget}
              minimumInvestment={card.minimumInvestment}
              investmentType={card.investmentType}
              investmentReturn={card.return}
              duration={card.duration}
              payout={card.payout}
            />
          ))}
        </KPRow>
        <KPRow justifyContent="start" className="gap-10">
          {dataSliceTwo.map((card, index) => (
            <AnimatedCard
              key={index}
              icon={card.icon}
              title={card.title}
              investmentTarget={card.investmentTarget}
              minimumInvestment={card.minimumInvestment}
              investmentType={card.investmentType}
              investmentReturn={card.return}
              duration={card.duration}
              payout={card.payout}
            />
          ))}
        </KPRow>
      </KPRow>

      <CalcDialog open={isDialogOpen} />
    </KPSection>
  );
}

export default Marketplace;
