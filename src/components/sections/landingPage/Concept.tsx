import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import Pyramid from "@/components/glb-models/Pyramid";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { kpButtonVariants } from "../../ui/KPButton";

function Concept() {
  return (
    <KPSection id="concept" itemID="concept">
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-white">Concept</KPHeading>
          <KPParagraph>
            Welcome to Khalifa Partners, where we revolutionize the way startups
            and businesses grow by offering comprehensive digital solutions in
            marketing, software development, and funding. We understand that
            building and scaling a successful business requires more than just
            great ideas; it demands access to the right resources, expertise,
            and capital. That&apos;s why we&apos;ve developed a unique business
            model that goes beyond traditional service providers.
          </KPParagraph>
          <Link href="/concept" className={kpButtonVariants({variant: "outline"})} >More to the Business Model</Link>
        </KPRow>
        <div className="relative w-full aspect-square">
          <Pyramid />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default Concept;
