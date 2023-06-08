"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import WeWorkWithAccordion from "@/components/DataAccordion";

function ConceptIntro() {
  return (
    <>
      <KPSection className="bg-zinc-100">
        <KPRow alignItems="start" flexDirection="col">
          <KPHeading className="text-black">
            Join Forces with Khalifa Partners
          </KPHeading>
          <WeWorkWithAccordion item={3} />
        </KPRow>
      </KPSection>
      <KPSection>
        <KPRow variant="intro" flexDirection="col" alignItems="start">
          <KPHeading size="sm" className="text-left">
            From initial strategy to meticulous execution
          </KPHeading>

          <KPHeading className="text-left" size="sm" fontWeight="normal">
            Our team of experts collaborates closely with you to ensure our
            digital solutions are aligned with your business goals. With our
            comprehensive approach, we provide the expertise and guidance you
            need to navigate the digital landscape and achieve sustainable
            growth.
          </KPHeading>
        </KPRow>
      </KPSection>
      <KPSection className="bg-zinc-100">
        <KPRow alignItems="start" flexDirection="col">
          <KPHeading size="sm" fontWeight="normal" className="text-black">
            <span className="font-semibold">Take the first step</span> towards
            digital success with Khalifa Partners. Contact us today to discuss
            how our digital solutions can transform your business and drive your
            online presence to new heights.
          </KPHeading>
          <WeWorkWithAccordion item={4} />
        </KPRow>
      </KPSection>
    </>
  );
}

export default ConceptIntro;
