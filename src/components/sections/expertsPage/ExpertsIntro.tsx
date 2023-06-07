"use client";

import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPBlurb from "@/components/ui/KPBlurb";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";
import KPAnimBlurb from "@/components/ui/KPAnimBlurb";
import KPHeading from "@/components/ui/KPHeading";
import Icons from "@/components/Icons";

function ExpertsIntro() {
  const dataSliceOne = Data.slice(0, 4);
  const dataSliceTwo = Data.slice(4, 8);

  return (
    <KPSection>
      <KPRow flexDirection="col">
        <KPHeading>The skills we are looking for</KPHeading>
        <KPRow flexDirection="col" wrapperContainer="disable">
          <KPRow wrapperContainer="disable">
            {dataSliceOne.map((_skill, index) => (
              <KPAnimBlurb
                key={index}
                title={_skill.skill}
                iconIndex={index}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
                }
              />
            ))}
          </KPRow>
          <KPRow wrapperContainer="disable">
            {dataSliceTwo.map((_skill, index) => (
              <KPAnimBlurb
                key={index}
                title={_skill.skill}
                iconIndex={index}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
                }
              />
            ))}
          </KPRow>
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default ExpertsIntro;
