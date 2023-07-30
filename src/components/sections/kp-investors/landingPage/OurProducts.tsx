"use client";

import { ProductCards } from "@/components/ProductCards";
import AnimatedCard from "@/components/card/AnimatedCard";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import KPParagraph from "@/components/ui/KPParagraph";
import { cn } from "@/lib/utils";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import { BellRing, LineChart } from "lucide-react";
import Link from "next/link";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";

const cards = [
  {
    title: "Venture Fund",
    description: "Discover our Venture Fund",
  },
  {
    title: "Passive Income",
    description: "Discover our Passive Income Models",
  },
  {
    title: "High ROI",
    description: "Discover our High ROI Models",
  },
];

const ventureFundInfo = [
  {
    description:
      "At Khalifa Partners, our VentureX Fund is dedicated to financing visionary ideas with the potential to change industries. We invest in and build these transformative projects, strategically positioning them for success. In just three years, we capitalize on their growth and sell, unlocking substantial profits. Join us on this exhilarating journey of innovation and reward as we turn big ideas into lucrative realities.",
  },
];

const passiveIncomeInfo = [
  {
    description:
      "Experience the power of financial growth with Khalifa Partners' Passive Income Plus. Our focus is on established businesses with proven track records, seeking funds to expand their operations. We meticulously validate their financials and craft a 3-year revenue-sharing contract, providing capital for their growth in exchange for a percentage of their revenue. Embrace the potential of steady monthly income and witness your portfolio flourish with Passive Income Plus.",
  },
];
const highROIInfo = [
  {
    description:
      "Khalifa Partners' High ROI Elite Fund is your gateway to exceptional returns through strategic asset flipping. Our team excels at identifying lucrative opportunities, primarily in real estate. With precision and expertise, we acquire assets, enhance their value, and sell them for substantial profits. Seize the opportunity to be part of a dynamic fund that redefines high-return investing through strategic asset management.",
  },
];

function OurProducts() {
  return (
    <div className="w-full py-20 bg-zinc-100" id="products">
      <KPRow alignItems="start" flexDirection={"col"}>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
          className="min-w-max"
        >
          <KPHeading className="text-black">Our Products</KPHeading>
        </KPRow>
        <KPRow
          wrapperContainer="disable"
          className="items-center justify-center"
        >
          <div className="flex-1">
            <AnimatedCard
              icon={Data[0].icon}
              title={Data[0].title}
              minimumInvestment={Data[0].minimumInvestment}
              investmentType={Data[0].investmentType}
              investmentReturn={Data[0].return}
              payout={Data[0].payout}
              showPassiveIncomeCalc={true}
              infoText={passiveIncomeInfo[0].description}
            />
          </div>
          <div className="flex-1">
            <AnimatedCard
              icon={Data[1].icon}
              title={Data[1].title}
              minimumInvestment={Data[1].minimumInvestment}
              investmentType={Data[1].investmentType}
              investmentReturn={Data[1].return}
              payout={Data[1].payout}
              showYearlyPayoutCalc={true}
              infoText={highROIInfo[0].description}
            />
          </div>
          <div className="flex-1">
            <AnimatedCard
              icon={Data[2].icon}
              title={Data[2].title}
              minimumInvestment={Data[2].minimumInvestment}
              investmentType={Data[2].investmentType}
              investmentReturn={Data[2].return}
              payout={Data[2].payout}
              showActiveIncomeCalc={true}
              infoText={ventureFundInfo[0].description}
            />
          </div>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default OurProducts;
