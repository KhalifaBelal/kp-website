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
      <KPRow className="gap-10" flexDirection="col">
        <KPHeading>The skills we are looking for</KPHeading>
        <div className="flex flex-col items-center justify-center gap-5 aspect-square">
          <KPRow wrapperContainer="disable">
            {dataSliceOne.map((_skill, index) => (
              <Blurb
                key={index}
                title={_skill.skill}
                icon={_skill.icon}
                description={_skill.description}
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
              />
            ))}
          </KPRow>
        </div>
      </KPRow>
    </KPSection>
  );
}

export default ExpertsIntro;
