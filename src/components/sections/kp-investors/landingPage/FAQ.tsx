import DataAccordion from "@/components/DataAccordion";
import { InvestmentStepsCard } from "@/components/InvestmentStepsCard";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import { Card, CardContent, CardTitle } from "@/components/ui/KPCard";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

function FAQ() {
  return (
    <div className="w-full p-10 flex flex-col gap-10">
      <KPRow flexDirection="col">
        <KPHeading className="text-black">
          FAQ
        </KPHeading>
        <DataAccordion item={2} />
      </KPRow>
      <KPRow flexDirection="col">
        <KPHeading size="lg" className="text-black">
          Still got questions?
        </KPHeading>
        <Link
          className={kpButtonVariants({ variant: "outline" })}
          href="https://linktr.ee/baselkhalifa"
          rel="noreferrer"
          target="_blank"
        >
          Contact us
        </Link>
      </KPRow>
    </div>
  );
}

export default FAQ;
