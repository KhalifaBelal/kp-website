"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import { weWorkWithData as Data } from "@/lib/solutions/weWorkWithData";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { useState } from "react";
import { kpButtonVariants } from "@/ui/KPButton";

function Solutions() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentItem = Data[currentIndex];

  const handleTabChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    return currentItem;
  };

  return (
    <KPSection id="solutions">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading>
          Our Digital <span className="text-kp-red">Solutions</span>
        </KPHeading>
        <Tabs defaultValue={Data[0].title} className="max-w-[40rem] w-full">
          <TabsList>
            {Data.map((_item, index) => (
              <TabsTrigger
                key={index}
                value={_item.title}
                onClick={() => {
                  handleTabChange(index);
                }}
              >
                {_item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Data.map((_item, index) => (
            <TabsContent key={index} value={_item.title}>
              {_item.text}
            </TabsContent>
          ))}
        </Tabs>
        <Link
          href={`/solutions/${decodeURIComponent(currentItem.path)}`}
          passHref
          className={kpButtonVariants()}
        >
          <span className="capitalize">{currentItem.ctaText}</span>
        </Link>
      </KPRow>
    </KPSection>
  );
}

export default Solutions;
