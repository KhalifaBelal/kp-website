"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import KPParagraph from "./KPParagraph";
import { FC } from "react";

interface AnimatedParagraphProps {
  title: string;
}

const AnimatedParagraph: FC<AnimatedParagraphProps> = ({ title }) => {
  return (
    <KPParagraph>
      <motion.span variants={textContainer}>
        {Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </KPParagraph>
  );
};

export default AnimatedParagraph;
