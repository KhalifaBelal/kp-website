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
import KPParagraph from "@/components/ui/KPParagraph";
import FlippableCard from "@/components/flippable-card"
import AnimatedCard from "@/components/card/Card";

function Marketplace() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full py-20 bg-zinc-100" id="marketplace">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">Marketplace</KPHeading>
        <AnimatedCard />
      </KPRow>

      <CalcDialog open={isDialogOpen} />
    </div>
  );
}

export default Marketplace;
