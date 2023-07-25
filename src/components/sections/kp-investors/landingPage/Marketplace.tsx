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
      <KPRow flexDirection="col" alignItems="start" className="gap-10">
        <KPHeading className="text-black">Marketplace</KPHeading>
        <KPRow
          wrapperContainer="disable"
          justifyContent="start"
          className="gap-10"
        >
          {dataSliceOne.map((card, index) => (
            <AnimatedCard
              key={index}
              icon={card.icon}
              title={card.title}
              minimumInvestment={card.minimumInvestment}
              investmentType={card.investmentType}
              investmentReturn={card.return}
              duration={card.duration}
              payout={card.payout}
              showPassiveIncomeCalc={true}
            />
          ))}
        </KPRow>
        <KPRow
          wrapperContainer="disable"
          justifyContent="start"
          className="gap-10"
        >
          <AnimatedCard
            icon={Data[2].icon}
            title={Data[2].title}
            minimumInvestment={Data[2].minimumInvestment}
            investmentType={Data[2].investmentType}
            investmentReturn={Data[2].return}
            duration={Data[2].duration}
            payout={Data[2].payout}
            showActiveIncomeCalc={true}
          />
        </KPRow>
      </KPRow>

      <CalcDialog open={isDialogOpen} />
    </KPSection>
  );
}

export default Marketplace;
