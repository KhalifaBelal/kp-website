import dynamic from "next/dynamic";
import PyramidDark from "@/glb-models/PyramidDark";
import PyramidLight from "@/glb-models/PyramidLight";
const KPSection = dynamic(() => import("@/ui/KPSection"));
const KPRow = dynamic(() => import("@/ui/KPRow"));
const KPHeading = dynamic(() => import("@/ui/KPHeading"));
const KPParagraph = dynamic(() => import("@/ui/KPSection"));

function Concept() {
  return (
    <KPSection>
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-black dark:text-white">Concept</KPHeading>
          <KPParagraph>
            Our business model consists of founding a company together with you
            and supporting you strategically and operationally in the areas of
            software development, marketing and sales, as well as financing your
            idea. In our executive programm, we strengthen your current personal
            and professional weaknesses and build on your strengths to optimally
            prepare you for the management of your company.
          </KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square dark:hidden">
          <PyramidDark />
        </div>
        <div className="relative w-full aspect-square hidden dark:block">
          <PyramidLight />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default Concept;
