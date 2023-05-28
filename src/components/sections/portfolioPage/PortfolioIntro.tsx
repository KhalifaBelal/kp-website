"use client"

import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

function PortfolioIntro() {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col">
        <motion.div
          variants={staggerContainer(0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <AnimatedParagraph title="Introducing Our Portfolio of Companies" />
        </motion.div>

        <KPHeading size="sm" fontWeight="normal">
          Invest At Khalifa Partners, our diverse portfolio comprises a
          collection of exceptional companies, each making waves in their
          respective industries. We are proud to present our visionary ventures
          that are driving innovation, disruption, and growth. Let's explore the
          remarkable stories and achievements of each company:
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default PortfolioIntro;
