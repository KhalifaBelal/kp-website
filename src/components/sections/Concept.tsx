import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import Pyramid from "@/components/glb-models/Pyramid";
import KPSection from "@/ui/KPSection";

function Concept() {
  return (
    <KPSection id="concept-section">
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-white">Concept</KPHeading>
          <KPParagraph>
            Our business model consists of founding a company together with you
            and supporting you strategically and operationally in the areas of
            software development, marketing and sales, as well as financing your
            idea. In our executive programm, we strengthen your current personal
            and professional weaknesses and build on your strengths to optimally
            prepare you for the management of your company.
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
