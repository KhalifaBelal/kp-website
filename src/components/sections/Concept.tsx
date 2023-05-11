import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import PyramidDark from "@/glb-models/PyramidDark";
import PyramidLight from "@/glb-models/PyramidLight";

function Concept() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <KPRow>
            <KPRow flexDirection="col" alignItems="start">
              <KPHeading size="default" fontWeight="heavy" className="text-black dark:text-white">
                Concept
              </KPHeading>
              <KPParagraph>
                Our business model consists of founding a company together with
                you and supporting you strategically and operationally in the
                areas of software development, marketing and sales, as well as
                financing your idea. In our executive programm, we strengthen
                your current personal and professional weaknesses and build on
                your strengths to optimally prepare you for the management of
                your company.
              </KPParagraph>
            </KPRow>
            <div className="relative w-full aspect-square dark:hidden">
              <PyramidDark />
            </div>
            <div className="relative w-full aspect-square hidden dark:block">
              <PyramidLight />
            </div>
          </KPRow>
        </div>
      </div>
    </div>
  );
}

export default Concept;
