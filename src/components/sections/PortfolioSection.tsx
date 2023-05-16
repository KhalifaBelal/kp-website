import dynamic from "next/dynamic";
const KPSection = dynamic(() => import("@/ui/KPSection"));
const KPRow = dynamic(() => import("@/ui/KPRow"));
const KPHeading = dynamic(() => import("@/ui/KPHeading"));
const KPParagraph = dynamic(() => import("@/ui/KPParagraph"));
import Image from "next/image";

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
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading size="default" className="text-black dark:text-white">
            {title}
          </KPHeading>
          <KPParagraph>{text}</KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square">
          <Image
            priority
            quality={100}
            style={{ objectFit: "contain" }}
            fill
            src={logoPath}
            alt={logoName}
          />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default PortfolioSection;
