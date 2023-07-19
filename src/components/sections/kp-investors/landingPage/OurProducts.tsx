"use client";

import { ProductCards } from "@/components/ProductCards";
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

const cards = [
  {
    title: "Passive Income",
    description: "Discover our Passive Income Models",
  },
  {
    title: "High ROI",
    description: "Discover our High ROI Models",
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
    <div className="w-full py-20 bg-zinc-100" id="our-products">
      <KPRow alignItems="start">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
          className="min-w-max"
        >
          <KPHeading className="text-black">Our Products</KPHeading>
          <Link
            href="/kp-investors"
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
        <KPRow alignItems="start" wrapperContainer="disable">
          <ProductCards
            cardTitle={"Passive Income"}
            cardDescription={"Discover our Passive Income Models"}
            productsInfo={passiveIncomeInfo}
            className="max-w-full w-max"
          />
          <ProductCards
            cardTitle={"High ROI"}
            cardDescription={"Discover our High ROI Models"}
            productsInfo={highROIInfo}
            className="max-w-full w-max"
          />
        </KPRow>
      </KPRow>
    </div>
  );
}

export default OurProducts;
