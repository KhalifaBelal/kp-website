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
    title: "High ROI Unleashed: Discover the Potential of Our Venture Fund",
    description:
      "Are you ready to unlock the untapped potential of our venture fund? Embrace a world of remarkable returns on investment, propelling you towards financial prosperity. At Khalifa Partners, we take pride in curating opportunities with high ROI, where your investments work harder and smarter for you.",
  },
  {
    title: "Path to Financial Prosperity: Your Journey Begins Here",
    description:
      "Invest in your future with our venture fund, where the path to financial prosperity awaits. Watch your investments grow steadily as you embrace the advantage of compounding gains. Our hand-picked ventures have been carefully chosen to align with long-term growth trends, ensuring that you reap the rewards of smart investing.",
  },
  {
    title: "Minimize Risks, Maximize Rewards: Invest with Confidence",
    description:
      "We understand that investing involves risks, but with Khalifa Partners' venture fund, you can invest with confidence. Our team of experts employs meticulous validation strategies, thoroughly researching each opportunity. By minimizing risks, we pave the way for substantial rewards, where all investors can share in the success of our collective efforts. Join us today and embark on a journey towards a more prosperous tomorrow.",
  },
];

const passiveIncomeInfo = [
  {
    title: "Unlock Financial Freedom: Steady Cash Flow",
    description:
      "Experience the power of passive income - a reliable money stream that requires minimal daily involvement. Watch your revenue grow steadily, covering expenses, building savings, and paving the way for endless opportunities.",
  },
  {
    title: "Embrace Time Freedom: Pursue Your Passions",
    description:
      "With passive income, liberate your time for what truly matters. Focus on ventures, passions, or cherished moments with loved ones. Embrace flexibility and break free from the constraints of constant active effort.",
  },
  {
    title: "Build Wealth, Ensure Security",
    description:
      "Passive income nurtures long-term wealth and financial security. Accumulate assets, create a safety net, and achieve your goals with confidence. Reduce stress and reliance on traditional jobs with the power of passive income.",
  },
];
const highROIInfo = [
  {
    title: "Yearly Profits: Your Path to Financial Success",
    description:
      "Discover the power of yearly profits - a proven path to financial success. Embrace longer-term growth potential and witness your investments appreciate steadily. With Khalifa Partners, let your wealth multiply over time and work towards achieving your dreams.",
  },
  {
    title: "Maximize Returns: High ROI Yearly Investments",
    description:
      "Unlock remarkable returns with high ROI yearly investments. Minimize risks through meticulous research and validation. Join our community of investors, big and small, and experience the advantage of collective funding for substantial profits.",
  },
  {
    title: "Secure Your Future: Invest with Confidence",
    description:
      "Invest with confidence in Khalifa Partners' carefully selected ventures. Our transparent approach guarantees profits beforehand, reducing uncertainty. Build a prosperous future with our innovative marketplace and trusted investment opportunities.",
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
          <Link
            href="/"
            replace
            className={kpButtonVariants({ variant: "outline" })}
            onClick={() =>
              document
                .getElementById("marketplace")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <LineChart className="text-zinc-100" />
            Discover Marketplace
          </Link>
        </KPRow>
        <KPRow
          alignItems="start"
          flexDirection={"col"}
          wrapperContainer="disable"
        >
          <ProductCards
            cardTitle={"Passive Income"}
            cardDescription={"Discover our Passive Income Models"}
            productsInfo={passiveIncomeInfo}
            className="max-w-full w-max"
          >
            <div className="flex-1">
              <AnimatedCard
                icon={Data[0].icon}
                title={Data[0].title}
                minimumInvestment={Data[0].minimumInvestment}
                investmentType={Data[0].investmentType}
                investmentReturn={Data[0].return}
                duration={Data[0].duration}
                payout={Data[0].payout}
                showPassiveIncomeCalc={true}
              />
            </div>
          </ProductCards>
          <ProductCards
            cardTitle={"High ROI"}
            cardDescription={"Discover our High ROI Models"}
            productsInfo={highROIInfo}
            className="max-w-full w-max"
          >
            <div className="flex-1">
              <AnimatedCard
                icon={Data[1].icon}
                title={Data[1].title}
                minimumInvestment={Data[1].minimumInvestment}
                investmentType={Data[1].investmentType}
                investmentReturn={Data[1].return}
                duration={Data[1].duration}
                payout={Data[1].payout}
                showYearlyPayoutCalc={true}
              />
            </div>
          </ProductCards>
          <ProductCards
            cardTitle={"Venture Fund"}
            cardDescription={"Discover our Venture Fund"}
            productsInfo={ventureFundInfo}
            className="max-w-full w-max"
          >
            <div className="flex-1">
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
            </div>
          </ProductCards>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default OurProducts;
