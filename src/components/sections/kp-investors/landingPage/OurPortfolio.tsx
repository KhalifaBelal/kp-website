import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { kpButtonVariants } from "@/ui/KPButton";

function OurPortfolio() {
  return (
    <KPSection id="portfolio">
      <KPRow flexDirection="col" className="text-center max-w-2xl">
        <KPHeading className="text-black">Our Portfolio</KPHeading>
        <KPParagraph className="text-zinc-700">
          Discover our dynamic portfolio of innovative companies, each driving
          positive change in their respective industries. With a diverse range
          of ventures, Khalifa Partners is committed to fostering growth,
          innovation, and impact. Join us in shaping the future of business.
        </KPParagraph>
        <Link
          href="/kp-investors/portfolio"
          className={kpButtonVariants({ variant: "outline" })}
        >
          Our Portfolio
        </Link>
      </KPRow>
    </KPSection>
  );
}

export default OurPortfolio;
