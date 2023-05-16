"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import { whoWeWorkWithData as Data } from "@/lib/whoWeWorkWithData";
import { useState } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";

function WhoWeWorkWith() {
  const [wwww, setWwww] = useState("ideas");
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start" className="gap-10">
        <KPHeading>
          Who We <br /> Work With
        </KPHeading>
        <KPRow flexDirection="col" alignItems="start" wrapperContainer="disable">
          <KPHeading size="sm">
            People with <span className="text-kp-red">{wwww}</span>
          </KPHeading>
          <KPRow
            wrapperContainer="disable"
            className="flex-row rounded-md border-b border-zinc-300 dark:border-zinc-700 shadow-lg w-auto mx-0"
          >
            {Data.map((_wwww, index) => (
              <KPButton
                key={index}
                onClick={() => {
                  setWwww(_wwww.key);
                }}
                className={kpButtonVariants({ variant: "link" })}
              >
                <span
                  className={`font-semibold ${
                    _wwww.key === wwww ? "text-kp-red" : ""
                  }`}
                >
                  {_wwww.title}
                </span>
              </KPButton>
            ))}
          </KPRow>
          <div className="max-w-md">
            {Data.map((_wwww, index) => (
              <KPParagraph key={index}>
                {_wwww.key === wwww ? _wwww.text : null}
              </KPParagraph>
            ))}
          </div>
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default WhoWeWorkWith;
