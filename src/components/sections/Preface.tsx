import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";
import DataAccordion from "../DataAccordion";

interface PrefaceProps {
  title: String;
  introText: String;
  withCta?: Boolean;
  ctaText?: String;
  phase: number;
}

function Preface({
  title,
  introText,
  withCta = false,
  ctaText,
  phase,
}: PrefaceProps) {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start" className="text-left">
        <KPHeading className="text-black">{title}</KPHeading>
        <KPHeading className="text-black" size="sm" fontWeight="normal">
          {introText}
        </KPHeading>
        <DataAccordion item={phase} />
        {withCta ? (
          <Link
            href="/kp-entrepreneurs/portfolio"
            className={kpButtonVariants({ variant: "outline" })}
          >
            {ctaText}
          </Link>
        ) : null}
      </KPRow>
    </KPSection>
  );
}

export default Preface;
