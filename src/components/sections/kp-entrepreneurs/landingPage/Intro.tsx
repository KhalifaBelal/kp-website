"use client"

import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { FC } from "react";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import Link from "next/link";

interface IntroProps {
  investors: boolean;
}

const Intro: FC<IntroProps> = ({ investors }) => {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="end">
        <Image
          priority
          quality={100}
          src="/square.png"
          alt="square"
          typeof="image"
          rel="preload"
          unoptimized={false}
          width={150}
          height={150}
          className="aspect-square"
        />
        {investors ? (
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
          >
            <KPHeading className="text-black" size="lg">
              Unite for Success: Building Businesses, Sharing Rewards.
            </KPHeading>
          </KPRow>
        ) : (
          <KPHeading className="text-white" size="lg">
            We diversify our <span className="text-kp-red">Portfolio</span> by
            building companies with{" "}
            <span className="text-kp-red">outstanding personalities</span>.
          </KPHeading>
        )}
      </KPRow>
    </KPSection>
  );
};

export default Intro;
