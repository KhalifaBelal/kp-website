"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import { weWorkWithData as Data } from "@/lib/weWorkWithData";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { useState } from "react";
import { kpButtonVariants } from "../ui/KPButton";

function WeWorkWith() {
  const [currentItem, setCurrentItem] = useState<string>("entrepreneurs");

  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading>We work with</KPHeading>
        <Tabs defaultValue={Data[0].key} className="max-w-xl w-full">
          <TabsList>
            {Data.map((_www, index) => (
              <TabsTrigger
                key={_www.key}
                value={_www.key}
                onClick={() => setCurrentItem(_www.key)}
              >
                {_www.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Data.map((_www, index) => (
            <TabsContent key={_www.key} value={_www.key}>
              {_www.text}
            </TabsContent>
          ))}
        </Tabs>
        <Link
          href={`/weworkwith/${encodeURIComponent(currentItem)}`}
          passHref
          className={kpButtonVariants()}
        >
          <span>
            Our plan for
            <span className="capitalize"> {currentItem}</span>
          </span>
        </Link>
      </KPRow>
    </KPSection>
  );
}

export default WeWorkWith;
