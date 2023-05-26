"use client";

import KPHeading from "@/components/ui/KPHeading";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

function InvestIntro() {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col">
        <motion.div
          variants={staggerContainer(0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <AnimatedParagraph title="We work with investors"></AnimatedParagraph>
        </motion.div>

        <KPHeading size="sm" fontWeight="normal">
          <span className="font-semibold">Unlocking Potential:</span> Invest in
          the Khalifa Partners Investment Fund Are you ready to be part of a
          transformative journey, fueling the growth of innovative startups and
          businesses? Khalifa Partners invites you to invest in our
          groundbreaking investment fund, where we channel capital towards
          high-potential ventures that are poised to disrupt industries and
          shape the future.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default InvestIntro;
