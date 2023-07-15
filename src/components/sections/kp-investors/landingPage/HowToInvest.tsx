import { InvestmentStepsCard } from "@/components/InvestmentStepsCard";
import { ProductCards } from "@/components/ProductCards";
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
    <div className="w-full py-10">
      <KPRow>
        <KPHeading size="lg" fontWeight="normal" className="text-black">
          Take the first step!
        </KPHeading>
        <KPRow
          flexDirection="col"
          alignItems="start"
          wrapperContainer="disable"
        >
          <ProductCards
            cardTitle={"How to Invest after choosing your project?"}
            cardDescription={""}
            productsInfo={investmentSteps}
          />
        </KPRow>
      </KPRow>
    </div>
  );
}

export default HowToInvest;
