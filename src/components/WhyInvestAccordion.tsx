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
import { whyInvestData as Data } from "@/lib/investors/whyInvestData";

export function WhyInvestAccordion() {
  return (
    <KPRow wrapperContainer="disable" flexDirection="col" alignItems="start">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {Data.map((_investItem, index) => (
          <AccordionItem value={`item-${index + 1}`}>
            <KPRow
              key={index}
              wrapperContainer="disable"
              flexDirection="col"
              alignItems="start"
            >
              <AccordionTrigger>
                <KPHeading key={index} size="sm" className="text-black">
                  {_investItem.title}
                </KPHeading>
              </AccordionTrigger>
              <AccordionContent>
                <KPParagraph className="text-slate-700">
                  {_investItem.text}
                </KPParagraph>
              </AccordionContent>
            </KPRow>
          </AccordionItem>
        ))}
      </Accordion>
    </KPRow>
  );
}
