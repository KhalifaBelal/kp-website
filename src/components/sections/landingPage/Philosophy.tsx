import { kpButtonVariants } from "@/components/ui/KPButton";
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import Image from "next/image";
import Link from "next/link";

function Philosophy() {
  return (
    <KPSection id="philosophy" className="gap-5 p-0">
      <KPRow flexDirection="col" alignItems="start" className="flex-1 lg:p-16">
        <KPHeading>Our Philosophy</KPHeading>
        <KPParagraph>
          At Khalifa Partners, our philosophy is deeply rooted in the wisdom of
          the ancient Egyptian pyramids. We believe in constructing enduring
          companies, just as the pyramids were meticulously built to stand the
          test of time. With a focus on a strong foundation, precision,
          collaboration, endurance, and leaving a lasting legacy, we build
          businesses that embody the strength and enduring spirit of the
          pyramids. Join us on our journey to create extraordinary ventures that
          shape the future
        </KPParagraph>
        <Link
          href="/philosophy"
          className={kpButtonVariants({ variant: "outline" })}
        >
          Our Philosophy
        </Link>
      </KPRow>
      <div className="relative w-[100%] lg:flex-[1.5] aspect-square">
        <Image
          priority
          quality={100}
          typeof="image"
          rel="preload"
          unoptimized={false}
          fill
          src="/philosophy.png"
          alt="philosophy"
        />
      </div>
    </KPSection>
  );
}

export default Philosophy;
