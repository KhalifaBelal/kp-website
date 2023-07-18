import { useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "../ui/KPCard";
import KPRow from "../ui/KPRow";
import KPParagraph from "../ui/KPParagraph";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";

const AnimatedCard = () => {
  const x = useMotionValue(400);
  const y = useMotionValue(400);
  const rotateX = useTransform(y, [0, 800], [-20, 20], {
    clamp: false,
  });
  const rotateY = useTransform(x, [0, 800], [20, -20], {
    clamp: false,
  });

  const [circleX, setCircleX] = useState(-10000);
  const [circleY, setCircleY] = useState(-10000);

  const handleMouse = (event) => {
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
      className="h-full row-span-2"
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
      >
        <div
          className="absolute h-[350px] w-[350px] top-0"
          style={{
            background:
              "radial-gradient(circle,#0141ff 0,rgba(161,252,70,0) 71%)",
            transform: "translateX(-50%)",
            opacity: 0.2,
            borderRadius: "9999px",
            left: "50%",
          }}
        />

        <KPRow className="min-w-[350px] min-h-[350px]">
          <KPParagraph className="card__bio text-zinc-800">
            {Data[0].investmentTarget}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].investmentType}
            <br />
            {Data[0].return}
            <br />
            {Data[0].duration}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].payout}
          </KPParagraph>
          <KPParagraph className="card__bio text-zinc-800">
            {Data[0].investmentTarget}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].investmentType}
            <br />
            {Data[0].return}
            <br />
            {Data[0].duration}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].payout}
          </KPParagraph>
        </KPRow>

        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `radial-gradient( circle at ${circleX}px ${circleY}px, #0141FF55, #0000000f )`,
            opacity: 0.3,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
