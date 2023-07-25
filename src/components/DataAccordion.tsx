"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import KPHeading from "@/ui/KPHeading";
import KPParagraph from "@/ui/KPParagraph";
import KPRow from "@/ui/KPRow";
import { FC } from "react";
import { conceptPageData } from "@/lib/conceptPage/conceptPageData";
import { faqData } from "@/lib/kp-invest/faqData";

interface DataAccordionProps {
  item: number;
}

const DataAccordion: FC<DataAccordionProps> = ({ item }) => {
  const dataObjects = [
    conceptPageData.strategy,
    conceptPageData.execution,
    conceptPageData.partnership,
    faqData,
  ];

  return (
    <KPRow wrapperContainer="disable" flexDirection="col" alignItems="start">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {dataObjects[item].map((_item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <KPRow
              key={index}
              wrapperContainer="disable"
              flexDirection="col"
              alignItems="start"
            >
              <AccordionTrigger>
                <KPHeading key={index} size="sm" className="text-black">
                  {_item.title}
                </KPHeading>
              </AccordionTrigger>
              <AccordionContent>
                <KPParagraph className="text-slate-700">
                  {_item.text}
                </KPParagraph>
              </AccordionContent>
            </KPRow>
          </AccordionItem>
        ))}
      </Accordion>
    </KPRow>
  );
};

export default DataAccordion;
