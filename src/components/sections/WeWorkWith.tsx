"use client";

import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";
import WeWorkWithTabs from "@/components/WeWorkWithTabs";

function WeWorkWith() {
  return (
    <KPSection>
      <KPRow>
        <div className="flex flex-col gap-10 items-start justify-center">
          <KPHeading>We work with</KPHeading>
          <WeWorkWithTabs />
          <Link href="/" className={kpButtonVariants({ variant: "outline" })}>
            Read more...
          </Link>
        </div>
      </KPRow>
    </KPSection>
  );
}

export default WeWorkWith;
