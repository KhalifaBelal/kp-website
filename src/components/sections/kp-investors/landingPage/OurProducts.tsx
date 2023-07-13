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
    title: "Irgendwelche infos",
    description: "Lorem Ipsum Dolor sit amet.",
  },
  {
    title: "Irgendwelche infos",
    description: "Lorem Ipsum Dolor sit amet.",
  },
  {
    title: "Irgendwelche infos",
    description: "Lorem Ipsum Dolor sit amet.",
  },
];
const highROIInfo = [
  {
    title: "Kleine infos",
    description: "Lorem Ipsum Dolor sit amet.",
  },
  {
    title: "Wichtige infos",
    description: "Lorem Ipsum Dolor sit amet.",
  },
  {
    title: "Neger infos",
    description: "Lorem Ipsum it amet.",
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
        <KPRow>
          <ProductCards
            cardTitle={"Passive Income"}
            cardDescription={"Discover our Passive Income Models"}
            productsInfo={passiveIncomeInfo}
          />
          <ProductCards
            cardTitle={"High ROI"}
            cardDescription={"Discover our High ROI Models"}
            productsInfo={highROIInfo}
          />
        </KPRow>
      </KPRow>
    </div>
  );
}

export default OurProducts;
