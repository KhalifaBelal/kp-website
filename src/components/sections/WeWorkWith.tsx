"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import { weWorkWithData as Data } from "@/lib/weWorkWithData";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";
import { useEffect, useState } from "react";

function WeWorkWith() {
  const [currentItem, setCurrentItem] = useState("entrepreneurs");

  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading>We work with</KPHeading>
        <Tabs defaultValue={Data[0].key} className="max-w-xl w-full">
          <TabsList>
            {Data.map((_www, index) => (
              <TabsTrigger
                key={index}
                value={_www.key}
                onClick={() => setCurrentItem(_www.key)}
              >
                {_www.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Data.map((_www, index) => (
            <TabsContent key={index} value={_www.key}>
              {_www.text}
            </TabsContent>
          ))}
        </Tabs>
        <Link
          href={`/weworkwith/${currentItem}`}
          className={kpButtonVariants({ variant: "default" })}
        >
          <span>
            Our plan for <span className="capitalize">{currentItem}</span>
          </span>
        </Link>
      </KPRow>
    </KPSection>
  );
}

export default WeWorkWith;
