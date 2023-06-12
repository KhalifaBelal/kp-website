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
import { whyInvestData as InvestData } from "@/lib/weWorkWith/investorsPage/whyInvestData";
import { skillsLeadersData as LeadersData } from "@/lib/weWorkWith/leadersPage/skillsLeadersData";
import { whyPartnerData as ExpertsData } from "@/lib/weWorkWith/expertsPage/whyPartnerData";
import { conceptPageData as ConceptData } from "@/lib/conceptPage/conceptPageData";
import { conceptPageData } from "@/lib/conceptPage/conceptPageData";
import { philosophyData as philosophy } from "@/lib/philosophy/philosophyData";

interface DataAccordionProps {
  item: number;
}

const DataAccordion: FC<DataAccordionProps> = ({ item }) => {
  const IntroConceptData = ConceptData.introAccordion;
  const Data = [
    InvestData,
    LeadersData,
    ExpertsData,
    IntroConceptData,
    conceptPageData.phase.strategy,
    conceptPageData.phase.execution,
    conceptPageData.phase.partnership,
    philosophy,
  ];

  return (
    <KPRow wrapperContainer="disable" flexDirection="col" alignItems="start">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {Data[item].map((_item, index) => (
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
