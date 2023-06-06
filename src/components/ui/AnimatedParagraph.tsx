"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import KPParagraph from "./KPParagraph";
import { FC, HTMLAttributes } from "react";

interface AnimatedParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
}

const AnimatedParagraph: FC<AnimatedParagraphProps> = ({
  title,
  className,
}) => {
  return (
    <KPParagraph>
      <motion.span variants={textContainer} className={className}>
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
