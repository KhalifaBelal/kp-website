import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import Pyramid from "@/components/glb-models/Pyramid";
import KPSection from "@/ui/KPSection";

function Concept() {
  return (
    <KPSection id="concept" height={"auto"}>
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-white">Concept</KPHeading>
          <KPParagraph>
            At Khalifa Partners, our unique business model revolves around
            identifying and partnering with exceptional individuals who possess
            the drive, vision, and leadership to create successful companies. We
            believe that outstanding personalities are the driving force behind
            transformative ventures. By providing these individuals with the
            necessary financial support, resources and mentorship in exchange
            for equity, we empower them to turn their ideas into thriving
            businesses.
          </KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square">
          <Pyramid />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default Concept;
