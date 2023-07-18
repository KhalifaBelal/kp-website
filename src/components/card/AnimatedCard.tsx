import { FC, HTMLAttributes, ReactNode, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "../ui/KPCard";
import KPRow from "../ui/KPRow";
import KPParagraph from "../ui/KPParagraph";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";
import Image from "next/image";
import Icons from "../Icons";
import KPHeading from "../ui/KPHeading";
import { KPButton, kpButtonVariants } from "../ui/KPButton";
import Calculator from "../sections/kp-investors/landingPage/Calculator";
import { KPInput } from "../ui/KPInput";

interface AnimatedCardProps {
  title: String;
  investmentTarget?: String;
  minimumInvestment: String;
  investmentType: String;
  investmentReturn: String;
  duration?: String;
  payout: String;
  icon: ReactNode;
  showPassiveIncomeCalc?: boolean;
  showYearlyPayoutCalc?: boolean;
  showActiveIncomeCalc?: boolean;
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
  showPassiveIncomeCalc,
  showYearlyPayoutCalc,
  showActiveIncomeCalc,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const rotateX = useTransform(y, [0, 800], [-10, 10], {
  //   clamp: false,
  // });
  // const rotateY = useTransform(x, [0, 800], [10, -10], {
  //   clamp: false,
  // });

  const [circleX, setCircleX] = useState(10000);
  const [circleY, setCircleY] = useState(10000);

  const handleMouse = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // x.set(event.clientX - rect.top);
    // y.set(event.clientY - rect.left);
    setCircleX(event.clientX - rect.top);
    setCircleY(event.clientY - rect.left);
  };

  const handleMouseLeave = () => {
    animate(x, 400, { duration: 0.5 });
    animate(y, 400, { duration: 0.5 });
    setCircleX(-10000);
    setCircleY(-10000);
  };

  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [monthlyResult, setMonthlyResult] = useState<string | null>(null);

  const handleSubmitPassiveIcome = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform the calculation
    const calculatedResult = (
      number * (33 / 100) * 6 +
      number
    ).toLocaleString();
    setResult(calculatedResult);
    const calculatedMonthlyResult = (
      (number * (33 / 100) * 6 + number) /
      72
    ).toLocaleString();
    setMonthlyResult(calculatedMonthlyResult);
  };

  const handleYearlyPayout = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform the calculation
    const calculatedResult = (number * (40 / 100) + number).toLocaleString();
    setResult(calculatedResult);
  };

  const handleSubmitActiveIcome = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform the calculation
    const calculatedResult = (
      number * (30 / 100) * 3 +
      number
    ).toLocaleString();
    setResult(calculatedResult);
  };

  return (
    <motion.div
      className="h-full w-full"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 14000,
      }}
    >
      <motion.div
        // style={{
        //   rotateX,
        //   rotateY,
        // }}
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
            <span className="font-semibold">{investmentTarget}</span>
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

          {showPassiveIncomeCalc ? (
            <div className="z-50 flex flex-col gap-2">
              <div>
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Return:
                </KPHeading>
                {result !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${result}` + "€"}
                  </KPHeading>
                )}
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Monthly Payout:
                </KPHeading>
                {monthlyResult !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${monthlyResult}` + "€"}
                  </KPHeading>
                )}
              </div>
              <form onSubmit={handleSubmitPassiveIcome}>
                <label htmlFor="numberInput">Investment: </label>
                <KPInput
                  min={20000}
                  defaultValue={20000}
                  type="number"
                  id="numberInput"
                  required
                  value={number}
                  onChange={(event) =>
                    setNumber(parseFloat(event.target.value))
                  }
                />
                <br />
                <KPButton
                  className={kpButtonVariants({ variant: "subtle" })}
                  type="submit"
                >
                  Submit
                </KPButton>
              </form>
            </div>
          ) : null}
          {showActiveIncomeCalc ? (
            <div className="z-50 flex flex-col gap-2">
              <div>
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Return:
                </KPHeading>
                {result !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${result}` + "€"}
                  </KPHeading>
                )}
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Monthly Payout:
                </KPHeading>
                {monthlyResult !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${monthlyResult}` + "€"}
                  </KPHeading>
                )}
              </div>
              <form onSubmit={handleSubmitActiveIcome}>
                <label htmlFor="numberInput">Investment: </label>
                <KPInput
                  min={10000}
                  defaultValue={10000}
                  type="number"
                  id="numberInput"
                  required
                  value={number}
                  onChange={(event) =>
                    setNumber(parseFloat(event.target.value))
                  }
                />
                <br />
                <KPButton
                  className={kpButtonVariants({ variant: "subtle" })}
                  type="submit"
                >
                  Submit
                </KPButton>
              </form>
            </div>
          ) : null}
          {showYearlyPayoutCalc ? (
            <div className="z-50 flex flex-col gap-2">
              <div>
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Return:
                </KPHeading>
                {result !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${result}` + "€"}
                  </KPHeading>
                )}
                <KPHeading fontWeight="normal" size="sm" className="text-black">
                  Your Monthly Payout:
                </KPHeading>
                {monthlyResult !== null && (
                  <KPHeading size="sm" className="text-black">
                    {`${monthlyResult}` + "€"}
                  </KPHeading>
                )}
              </div>
              <form onSubmit={handleYearlyPayout}>
                <label htmlFor="numberInput">Investment: </label>
                <KPInput
                  min={10000}
                  defaultValue={10000}
                  type="number"
                  id="numberInput"
                  required
                  value={number}
                  onChange={(event) =>
                    setNumber(parseFloat(event.target.value))
                  }
                />
                <br />
                <KPButton
                  className={kpButtonVariants({ variant: "subtle" })}
                  type="submit"
                >
                  Submit
                </KPButton>
              </form>
            </div>
          ) : null}
        </KPRow>
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full border-2 border-black rounded-xl"
          style={{
            backgroundImage: `radial-gradient( circle at ${circleX}px ${circleY}px, #c1272d, #fff )`,
            opacity: 0.15,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
