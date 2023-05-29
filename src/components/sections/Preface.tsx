import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";
import KPParagraph from "../ui/KPParagraph";

interface PrefaceProps {
  title: string;
  text: string;
  withCta?: boolean;
  ctaText?: string;
  wrapperDisable?: boolean;
}

function Preface({
  title,
  text,
  withCta = false,
  ctaText,
  wrapperDisable,
}: PrefaceProps) {
  return (
    <div className="min-h-screen w-full overflow-hidden flex py-32 flex-col items-start justify-center">
      <KPRow
        variant="intro"
        flexDirection="col"
        alignItems="start"
        wrapperContainer={wrapperDisable ? "disable" : "default"}
        className="text-left"
      >
        <KPHeading size="default" className="text-white">
          {title}
        </KPHeading>
        <KPParagraph>{text}</KPParagraph>
        {withCta ? (
          <Link
            href="/portfolio"
            className={kpButtonVariants({ variant: "outline" })}
          >
            {ctaText}
          </Link>
        ) : null}
      </KPRow>
    </div>
  );
}

export default Preface;
