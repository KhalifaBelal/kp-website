"use client";

import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";
import Blurb from "@/components/ui/Blurb";
import KPHeading from "@/components/ui/KPHeading";

function ExpertsIntro() {
  const dataSliceOne = Data.slice(0, 4);
  const dataSliceTwo = Data.slice(4, 8);

  return (
    <KPSection>
      <KPRow flexDirection="col">
        <KPHeading>The skills we are looking for</KPHeading>
        <KPRow flexDirection="col">
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
  );
}

export default ExpertsIntro;
