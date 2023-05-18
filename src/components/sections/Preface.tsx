import dynamic from "next/dynamic";
const KPSection = dynamic(() => import("@/ui/KPSection"));
const KPRow = dynamic(() => import("@/ui/KPRow"));
const KPHeading = dynamic(() => import("@/ui/KPHeading"));
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
        <KPHeading size="default" className="text-black dark:text-white">
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
