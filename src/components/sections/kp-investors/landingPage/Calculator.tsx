"use client";

import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import { KPInput } from "@/components/ui/KPInput";

import { FC, HTMLAttributes, useState } from "react";
import { KPLabel } from "@/components/ui/KPLabel";

interface CalculatorProps extends HTMLAttributes<HTMLElement> {}

const Calculator: FC<CalculatorProps> = ({}) => {
  const [investmentSum, setInvestmentSum] = useState(0);
  const months = 6 * 12;
  const roi = 0.33;
  const [monthlyPayout, setMonthlyPayout] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);

  const handleChange = () => {
    const roi = 0.33;
    setMonthlyPayout((investmentSum * roi) / 12);
    setTotalPayout(monthlyPayout * months);
  };

  const handleInvestmentSumChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvestmentSum(Number(event.target.value));
  };

  return (
    <KPRow wrapperContainer="disable">
      <Card className="">
        <CardHeader>
          <CardTitle>Calculate your profits</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <KPLabel htmlFor="name">Investment Sum</KPLabel>
                <KPInput
                  id="text"
                  placeholder="Sum"
                  value={investmentSum}
                  onChange={handleInvestmentSumChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <KPButton variant="outline" onClick={() => setInvestmentSum(0)}>
            Cancel
          </KPButton>
          <KPButton onClick={handleChange}>Calculate</KPButton>
        </CardFooter>
      </Card>
      {/* <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Your numbers</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <h1>{investmentSum}</h1>
                <br />
                <h1>{monthlyPayout}</h1>
                <br />
                <h1>{months}</h1>
                <br />
                <h1>{totalPayout}</h1>
              </div>
            </div>
          </form>
        </CardContent>
      </Card> */}
    </KPRow>
  );
};

export default Calculator;
