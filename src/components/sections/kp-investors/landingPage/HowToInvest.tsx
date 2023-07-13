import { InvestmentStepsCard } from "@/components/InvestmentStepsCard";
import { kpButtonVariants } from "@/components/ui/KPButton";
import { Card, CardContent, CardTitle } from "@/components/ui/KPCard";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

const investmentSteps = [
  { title: "Step 1: Sign Contract" },
  { title: "Step 2: Transfer Funds" },
  { title: "Step 3: Receive Profits" },
];

function HowToInvest() {
  return (
    <div className="w-full p-10 bg-gradient-to-r from-kp-red via-zinc-900 to-zinc-100">
      <KPRow>
        <KPHeading size="lg" fontWeight="normal">Take the first step!</KPHeading>
        <KPRow flexDirection="col" alignItems="start" wrapperContainer="disable">
          <InvestmentStepsCard
            cardTitle={"How to Invest after choosing your project?"}
            investmentSteps={investmentSteps}
          />
        </KPRow>
      </KPRow>
    </div>
  );
}

export default HowToInvest;
