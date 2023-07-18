import { FC, HTMLAttributes, ReactNode, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "../ui/KPCard";
import KPRow from "../ui/KPRow";
import KPParagraph from "../ui/KPParagraph";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";
import Image from "next/image";
import Icons from "../Icons";
import KPHeading from "../ui/KPHeading";

interface AnimatedCardProps {
  title: String;
  investmentTarget?: String;
  minimumInvestment: String;
  investmentType: String;
  investmentReturn: String;
  duration?: String;
  payout: String;
  icon: ReactNode;
}

const AnimatedCard: FC<AnimatedCardProps> = ({
  title,
  investmentTarget,
  minimumInvestment,
  investmentType,
  investmentReturn,
  duration,
  payout,
  icon,
}) => {
  const x = useMotionValue(400);
  const y = useMotionValue(400);
  const rotateX = useTransform(y, [0, 800], [-10, 10], {
    clamp: false,
  });
  const rotateY = useTransform(x, [0, 800], [10, -10], {
    clamp: false,
  });

  const [circleX, setCircleX] = useState(-10000);
  const [circleY, setCircleY] = useState(-10000);

  const handleMouse = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.top);
    y.set(event.clientY - rect.left);
    setCircleX(event.clientX - rect.top);
    setCircleY(event.clientY - rect.left);
  };

  const handleMouseLeave = () => {
    animate(x, 400, { duration: 0.5 });
    animate(y, 400, { duration: 0.5 });
    setCircleX(-10000);
    setCircleY(-10000);
  };

  return (
    <motion.div
      className="h-full"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1400,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="py-5"
      >
        <KPRow flexDirection="col" alignItems="start">
          <div className="flex items-center gap-2">
            {icon}

            <KPHeading size="sm" className="text-black z-50">
              {title}
            </KPHeading>
          </div>

          <KPParagraph className="text-black z-50">
            Investment Target:{" "}
            <span className="font-semibold">{investmentReturn}</span>
            <br />
            Minimum Investment:{" "}
            <span className="font-semibold">{minimumInvestment}</span>
            <br />
            Investment Type:{" "}
            <span className="font-semibold">{investmentType}</span>
            <br />
            Return: <span className="font-semibold">{investmentReturn}</span>
            <br />
            Duration: <span className="font-semibold">{duration}</span>
            <br />
            Payout: <span className="font-semibold">{payout}</span>
          </KPParagraph>
        </KPRow>
        <div
          className="absolute top-0 left-0 h-full w-full border-2 border-white rounded-xl"
          style={{
            backgroundImage: `radial-gradient( circle at ${circleX}px ${circleY}px, #fff, #000000aa )`,
            opacity: 0.15,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
