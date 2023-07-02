"use client";

import dynamic from "next/dynamic";
const Preface = dynamic(() => import("@/components/sections/Preface"));
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { prefaceData } from "@/lib/prefaceData";

function ConceptSteps() {
  return (
    <>
      <KPSection flexDirection="col">
        <KPRow flexDirection="col" alignItems="start" className="py-20">
          <KPHeading>Our Executive Program</KPHeading>
          <KPHeading size="sm">
            The Three-Part Plan for Startup Success: Strategy, Execution, and
            Partnership
          </KPHeading>
          <KPParagraph>
            Launching a startup is an exhilarating journey filled with
            opportunities and challenges. To navigate the complexities of the
            business landscape successfully, it&apos;s crucial to have a
            well-defined plan. This three-part plan, comprising strategy,
            execution, and partnership, provides a solid foundation for startups
            to thrive and achieve their goals. By integrating these elements,
            entrepreneurs can establish a robust framework that maximizes their
            chances of success.
          </KPParagraph>
        </KPRow>
      </KPSection>
      <Preface
        title={prefaceData[0].title}
        introText={prefaceData[0].text}
        phase={4}
      />
      <Preface
        title={prefaceData[1].title}
        introText={prefaceData[1].text}
        phase={5}
      />
      <Preface
        title={prefaceData[2].title}
        introText={prefaceData[2].text}
        withCta
        ctaText="Portfolio"
        phase={6}
      />
    </>
  );
}

export default ConceptSteps;
