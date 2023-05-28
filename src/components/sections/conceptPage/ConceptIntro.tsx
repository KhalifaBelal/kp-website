"use client";

import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import WeWorkWithAccordion from "@/components/DataAccordion";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

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
          <motion.div
            variants={staggerContainer(0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <AnimatedParagraph
              className="text-left"
              title="From initial strategy to meticulous execution"
            />
          </motion.div>

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
