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
          <KPHeading className="text-white">About Khalifa Partners</KPHeading>
          <KPParagraph>
            Khalifa Partners is an international business incubator dedicated to building successful businesses around the globe. By focusing on the top 1% of talent, we foster a culture of excellence to create enduring companies that make a lasting impact.
            <br /><br />
            Inspired by our Egyptian heritage, driven by German precision, and motivated by the UAE&apos;s economic vision, we merge diverse strengths to build a robust portfolio of ventures with passionate, talented individuals.
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
