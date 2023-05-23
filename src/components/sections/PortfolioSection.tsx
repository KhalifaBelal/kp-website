import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPParagraph from "@/ui/KPParagraph";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";

interface PortfolioSectionProps {
  title: string;
  text: string;
  logoPath: string;
  logoName: string;
}

function PortfolioSection({
  title,
  text,
  logoPath,
  logoName,
}: PortfolioSectionProps) {
  return (
    <KPSection>
      <KPRow className="lg:gap-32">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading size="default" className="text-white">
            {title}
          </KPHeading>
          <KPParagraph>{text}</KPParagraph>
        </KPRow>
          <Image
            priority
            quality={100}
            typeof="image"
            rel="preload"
            unoptimized={false}
            width={500}
            height={500}
            className="aspect-square"
            src={logoPath}
            alt={logoName}
          />
      </KPRow>
    </KPSection>
  );
}

export default PortfolioSection;
