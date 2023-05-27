"use client";

import KPHeading from "@/components/ui/KPHeading";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import KPParagraph from "@/components/ui/KPParagraph";

function LeadersIntro() {
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
              title="Attention, Visionary Entrepreneurs and Savvy Managers"
            ></AnimatedParagraph>
          </motion.div>

          <KPHeading className="text-left" size="sm" fontWeight="normal">
            Are you ready to embark on a groundbreaking journey, armed with a
            unique idea or industry expertise? Look no further! Khalifa Partners
            is on the lookout for exceptional talents like you, poised to
            transform industries and seize new opportunities.
          </KPHeading>
        </KPRow>
      </KPSection>
      <KPSection>
        <KPRow>
          <KPParagraph>
            At Khalifa Partners, we specialize in nurturing and empowering the
            next generation of leaders, supporting them in founding and
            dominating in their chosen industry. With our extensive investment
            fund, we provide the financial backing necessary to turn your
            innovative ideas into thriving businesses. Whether you&apos;re a
            budding entrepreneur with a game-changing concept or a seasoned
            manager seeking a fresh start, we are here to fuel your success.
            <br />
            What sets us apart is our unwavering commitment to your growth and
            prosperity. Beyond financial support, we offer comprehensive
            operational assistance in key areas such as marketing and software
            development. Our team of experts will work hand-in-hand with you to
            craft robust marketing strategies and develop cutting-edge software
            solutions, ensuring your venture is at the forefront of industry
            innovation.
            <br />
            But it doesn&apos;t end there. We recognize that true success lies
            in the hands of exceptional leaders who possess both sales acumen
            and the ability to manage the day-to-day intricacies of a business.
            That&apos;s why we are actively seeking individuals like you -
            dynamic professionals who can drive sales growth and efficiently
            navigate the ever-evolving business landscape.
            <br />
            To further amplify your potential, we have designed an exclusive
            executive program. This transformative initiative equips you with
            the strategic and operational prowess needed to conquer the market.
            Our experienced mentors will guide you through a comprehensive
            curriculum, tailored to sharpen your leadership skills and elevate
            your business acumen to new heights.
            <br />
            Join us and become part of an unparalleled ecosystem of visionaries,
            collaborators, and innovators. Together, we will build the
            foundations of success, breaking barriers and carving a path towards
            greatness.
            <br />
            If you have the audacity to dream big, the hunger to make a lasting
            impact, and the drive to lead with excellence, we invite you to join
            our ranks. Let&apos;s revolutionize industries, rewrite the rules,
            and create a future brimming with endless possibilities.
          </KPParagraph>
        </KPRow>
      </KPSection>
      <KPSection flexDirection="col">
        <KPRow flexDirection="col" alignItems="start" className="py-20">
          <KPHeading>
            Take the leap, seize the opportunity, and let us empower you to
            redefine success.
          </KPHeading>
          <KPHeading size="sm">
            Khalifa Partners - Where Innovation Meets AmbitionAttention,
            Visionary Entrepreneurs and Savvy Managers.
          </KPHeading>
          <KPParagraph>
            Are you ready to embark on a groundbreaking journey, armed with a
            unique idea or industry expertise? Look no further! Khalifa Partners
            is on the lookout for exceptional talents like you, poised to
            transform industries and seize new opportunities.
          </KPParagraph>
          <KPParagraph>
            At Khalifa Partners, we specialize in nurturing and empowering the
            next generation of leaders, supporting them in founding and
            dominating in their chosen industry. With our extensive investment
            fund, we provide the financial backing necessary to turn your
            innovative ideas into thriving businesses. Whether you&apos;re a
            budding entrepreneur with a game-changing concept or a seasoned
            manager seeking a fresh start, we are here to fuel your success.
          </KPParagraph>
          <KPParagraph>
            What sets us apart is our unwavering commitment to your growth and
            prosperity. Beyond financial support, we offer comprehensive
            operational assistance in key areas such as marketing and software
            development. Our team of experts will work hand-in-hand with you to
            craft robust marketing strategies and develop cutting-edge software
            solutions, ensuring your venture is at the forefront of industry
            innovation.
          </KPParagraph>
          <KPParagraph>
            But it doesn&apos;t end there. We recognize that true success lies
            in the hands of exceptional leaders who possess both sales acumen
            and the ability to manage the day-to-day intricacies of a business.
            That&apos;s why we are actively seeking individuals like you -
            dynamic professionals who can drive sales growth and efficiently
            navigate the ever-evolving business landscape.
          </KPParagraph>
          <KPParagraph>
            To further amplify your potential, we have designed an exclusive
            executive program. This transformative initiative equips you with
            the strategic and operational prowess needed to conquer the market.
            Our experienced mentors will guide you through a comprehensive
            curriculum, tailored to sharpen your leadership skills and elevate
            your business acumen to new heights.
          </KPParagraph>
          <KPParagraph>
            Join us and become part of an unparalleled ecosystem of visionaries,
            collaborators, and innovators. Together, we will build the
            foundations of success, breaking barriers and carving a path towards
            greatness.
          </KPParagraph>
          <KPParagraph>
            If you have the audacity to dream big, the hunger to make a lasting
            impact, and the drive to lead with excellence, we invite you to join
            our ranks. Let&apos;s revolutionize industries, rewrite the rules,
            and create a future brimming with endless possibilities.
          </KPParagraph>
        </KPRow>
      </KPSection>
    </>
  );
}

export default LeadersIntro;
