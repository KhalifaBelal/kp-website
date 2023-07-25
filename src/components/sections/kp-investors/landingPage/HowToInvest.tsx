import { InvestmentStepsCard } from "@/components/InvestmentStepsCard";
import { ProductCards } from "@/components/ProductCards";
import { kpButtonVariants } from "@/components/ui/KPButton";
import { Card, CardContent, CardTitle } from "@/components/ui/KPCard";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

const investmentSteps = [
  { title: "Sign the Contract: Get started with a straightforward contract signing, outlining your investment terms and expectations." },
  { title: "Transfer Funds: Seamlessly transfer your funds to fuel the growth and success of the chosen project." },
  { title: "Receive Profits: Reap the rewards of your investment as profits are shared upon project completion." },
];

function HowToInvest() {
  return (
    <div className="w-full pb-32 flex items-center justify-center">
      <KPRow>
        <ProductCards
          cardTitle={"How to Invest after choosing your project?"}
          cardDescription={"Join Khalifa Group today and unlock a world of investment opportunities!"}
          productsInfo={investmentSteps}
          children={null}
        />
      </KPRow>
    </div>
  );
}

export default HowToInvest;
