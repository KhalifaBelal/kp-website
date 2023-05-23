import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";

interface PrefaceProps {
  title: string;
  text: string;
  withCta?: boolean;
  ctaText?: string;
}

function Preface({ title, text, withCta = false, ctaText }: PrefaceProps) {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col">
        <KPHeading size="default" className="text-white">
          {title}
        </KPHeading>
        <KPHeading size="sm" fontWeight="normal">
          {text}
        </KPHeading>
        {withCta ? (
          <Link
            href="/portfolio"
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
