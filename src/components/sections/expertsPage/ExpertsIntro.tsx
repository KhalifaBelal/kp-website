"use client";

import Footer from "@/components/Footer";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

function ExpertsIntro() {
  return (
    <>
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
              title="Join Forces with Khalifa Partners"
            />
          </motion.div>

          <KPHeading className="text-left" size="sm" fontWeight="normal">
            <span className="font-semibold">
              Empowering Talents and Agency Owners in Digital Excellence:
            </span>{" "}
            Are you a talented professional or an agency owner specializing in
            social media management, content creation, SEO, SEA, Facebook Ads,
            TikTok Ads, web design, software development, or branding? Khalifa
            Partners invites you to become our valued execution partner,
            collaborating with us to deliver exceptional digital solutions to
            our esteemed partners.
          </KPHeading>
        </KPRow>
      </KPSection>
    </>
  );
}

export default ExpertsIntro;
