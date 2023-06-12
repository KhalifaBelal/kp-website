"use client";

import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";
import Blurb from "@/components/ui/Blurb";
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SkillsLeaders() {
  const dataSliceOne = Data.slice(0, 4);
  const dataSliceTwo = Data.slice(4, 8);

  return (
    <KPSection flexDirection="col" className="gap-10">
      <KPRow flexDirection="col">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading>
            Khalifa Partners - Where Innovation Meets Ambition
          </KPHeading>
          <KPHeading size="sm">
            Take the leap, seize the opportunity, and let us empower you to
            redefine success.
          </KPHeading>
          <KPParagraph>
            At Khalifa Partners, we believe in empowering managers to focus on
            the daily operations of their business without the burden of
            managing specific fields of work. That&apos;s why we provide a
            unique opportunity where our resources are dedicated to offering the
            following skills, allowing you to excel in your core
            responsibilities:
          </KPParagraph>
        </KPRow>
        <KPRow flexDirection="col">
          <KPRow wrapperContainer="disable" className="items-stretch">
            {dataSliceOne.map((_skill, index) => (
              <Blurb
                key={index}
                title={_skill.skill}
                icon={_skill.icon}
                description={_skill.description}
              />
            ))}
          </KPRow>
          <KPRow wrapperContainer="disable" className="items-stretch">
            {dataSliceTwo.map((_skill, index) => (
              <Blurb
                key={index}
                title={_skill.skill}
                icon={_skill.icon}
                description={_skill.description}
              />
            ))}
          </KPRow>
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default SkillsLeaders;
