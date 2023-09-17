import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPParagraph from "@/ui/KPParagraph";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { kpButtonVariants } from "../ui/KPButton";
import Link from "next/link";

interface PortfolioSectionProps {
  title: string;
  text: string;
  logoPath: string;
  logoName: string;
  websiteUrl?: string;
}

function PortfolioSection({
  title,
  text,
  logoPath,
  logoName,
  websiteUrl,
}: PortfolioSectionProps) {
  return (
    <KPSection height={"padding"}>
      <KPRow className="lg:gap-32">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading size="default" className="text-black">
            {title}
          </KPHeading>
          <KPParagraph className="text-zinc-700">{text}</KPParagraph>
          <div className={websiteUrl ? "" : "hidden"}>
            <Link
              href={websiteUrl ? websiteUrl : ""}
              className={kpButtonVariants()}
              rel="noreferrer"
              target="_blank"
            >
              {"Visit " + title}
            </Link>
          </div>
        </KPRow>
        <Image
          quality={100}
          typeof="image"
          rel="preload"
          unoptimized={false}
          width={500}
          height={500}
          className="aspect-square border-2 border-white shadow-lg shadow-zinc-700 rounded-lg"
          src={logoPath}
          alt={logoName}
        />
      </KPRow>
    </KPSection>
  );
}

export default PortfolioSection;
