"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { weWorkWithData as Data } from "@/lib/weWorkWithData";

const WeWorkWithTabs: FC = () => {
  return (
    <Tabs defaultValue={Data[0].key} className="max-w-xl w-full">
      <TabsList>
        {Data.map((_www, index) => (
          <TabsTrigger key={index} value={_www.key}>
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
  );
};

export default WeWorkWithTabs;
