import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";
import * as React from "react";
import {
  DialogClose,
  DialogCloseProps,
  DialogProps,
} from "@radix-ui/react-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";

import { useState } from "react";
import { KPButton } from "@/components/ui/KPButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/KPDialog";
import { KPInput } from "@/components/ui/KPInput";
import { KPLabel } from "@/components/ui/KPLabel";
import { FC } from "react";
import Calculator from "../sections/kp-investors/landingPage/Calculator";

interface CalcDialogProps {
  open: boolean;
}

const CalcDialog: FC<CalcDialogProps> = ({ open }) => {
  const [investmentSum, setInvestmentSum] = useState(0);
  const months = 6 * 12;
  const roi = 0.33;
  const [monthlyPayout, setMonthlyPayout] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);
  const [close, setClose] = useState(false);

  const handleChange = () => {
    setMonthlyPayout((investmentSum * roi) / 12);
    setTotalPayout(monthlyPayout * months);
  };

  const handleInvestmentSumChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvestmentSum(Number(event.target.value));
  };

  return close === false ? (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>Calculate your Profits</DialogHeader>
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
        <form>
          <KPHeading fontWeight="normal" size="sm" className="text-black">
            Your numbers
          </KPHeading>
          <div className="grid w-full items-center justify-between gap-4 mt-3">
            <div className="flex flex-col space-y-1.5">
              <h1>Investment: {investmentSum}</h1>
              <br />
              <h1>Monthly Payout: {monthlyPayout}</h1>
              <br />
              <h1>Months: {months}</h1>
              <br />
              <h1>Total Payout: {totalPayout}</h1>
            </div>
          </div>
        </form>
        <DialogFooter>
          <KPButton variant="outline" onClick={() => setClose(true)}>
            Cancel
          </KPButton>
          <KPButton onClick={handleChange}>Calculate</KPButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default CalcDialog;
