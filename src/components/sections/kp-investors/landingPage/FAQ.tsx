import DataAccordion from "@/components/DataAccordion";
import { kpButtonVariants } from "@/components/ui/KPButton";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

function FAQ() {
  return (
    <div className="w-full p-10 flex flex-col gap-20">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">
          FAQ
        </KPHeading>
        <DataAccordion item={2} />
      </KPRow>
      <KPRow>
        <KPHeading className="text-black">
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
