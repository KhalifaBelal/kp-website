"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";
import Blurb from "@/components/ui/Blurb";

function ConceptIntro() {
  const dataSliceOne = Data.slice(0, 4);
  const dataSliceTwo = Data.slice(4, 8);
  return (
    <>
      <KPSection>
        <KPRow variant="intro" flexDirection="col" alignItems="start">
          <KPHeading className="text-left ">Our Approach</KPHeading>
          <KPParagraph className="text-left ">
            At Khalifa Partners, we believe in a collaborative approach that
            aligns our success with yours. We offer our digital solutions and
            expertise in exchange for equity in your company, creating a true
            partnership that drives mutual growth. By taking a vested interest
            in your success, we are fully committed to delivering exceptional
            results and providing the necessary resources to help your business
            thrive.
          </KPParagraph>
        </KPRow>
      </KPSection>
      <KPSection flexDirection="col" className="gap-10">
        <KPRow flexDirection="col" alignItems="start">
          <KPHeading className="text-left">
            Introducing our comprehensive digital solutions
          </KPHeading>

          <KPParagraph className="text-left ">
            At Khalifa Partners, we are committed to helping businesses thrive
            in the digital landscape. We understand the evolving needs of modern
            businesses and offer a range of comprehensive digital solutions
            designed to elevate your brand, expand your reach, and drive
            tangible results. From strategic planning to execution, our digital
            solutions encompass various key aspects to create a holistic
            approach to your online presence.
          </KPParagraph>
        </KPRow>
        <KPRow flexDirection="col">
          <KPRow flexDirection="col" wrapperContainer="disable">
            <KPRow wrapperContainer="disable">
              {dataSliceOne.map((_skill, index) => (
                <Blurb
                  key={index}
                  title={_skill.skill}
                  icon={_skill.icon}
                  description={_skill.description}
                  className="aspect-square"
                />
              ))}
            </KPRow>
            <KPRow wrapperContainer="disable">
              {dataSliceTwo.map((_skill, index) => (
                <Blurb
                  key={index}
                  title={_skill.skill}
                  icon={_skill.icon}
                  description={_skill.description}
                  className="aspect-square"
                />
              ))}
            </KPRow>
          </KPRow>
        </KPRow>
      </KPSection>
      <KPSection className="bg-zinc-100">
        <KPRow variant="intro" flexDirection="col" alignItems="start">
          <KPHeading className="text-left text-black">
            From initial strategy to meticulous execution
          </KPHeading>

          <KPParagraph className="text-left text-zinc-700">
            Our team of experts collaborates closely with you to ensure our
            digital solutions are aligned with your business goals. With our
            comprehensive approach, we provide the expertise and guidance you
            need to navigate the digital landscape and achieve sustainable
            growth.
          </KPParagraph>
        </KPRow>
      </KPSection>
    </>
  );
}

export default ConceptIntro;
