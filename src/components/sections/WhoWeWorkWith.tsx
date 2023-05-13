"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import { whoWeWorkWithData as Data } from "@/lib/whoWeWorkWithData";
import { useState } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";
import Icons from "@/components/Icons";

function WhoWeWorkWith() {
  const [wwww, setWwww] = useState("ideas");
  return (
    <KPSection variant="autoHeight">
      <KPRow
        flexDirection="col"
        alignItems="start"
        justifyContent="start"
        className="gap-10"
      >
        <KPRow wrapperContainer="disable">
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
            justifyContent="start"
          >
            <KPHeading size="sm">
              Who Whe Work With: <br />
              People with <span className="text-kp-red">{wwww}</span>
            </KPHeading>
            <KPRow
              wrapperContainer="disable"
              justifyContent="start"
              className="w-full border-b border-kp-red shadow-sm pb-6 flex-row"
            >
              {Data.map((_wwww, index) => (
                <KPButton
                  key={index}
                  onClick={() => {
                    setWwww(_wwww.key);
                  }}
                  className={kpButtonVariants({ variant: "outline" })}
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
          </KPRow>
          <KPRow justifyContent="start" wrapperContainer="disable">
            <div className="max-w-md">
              {Data.map((_wwww, index) => (
                <KPParagraph key={index}>
                  {_wwww.key === wwww ? _wwww.text : null}
                </KPParagraph>
              ))}
            </div>
          </KPRow>
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default WhoWeWorkWith;

// import KPHeading from "@/components/ui/KPHeading";
// import KPRow from "@/ui/KPRow";
// import KPParagraph from "@/ui/KPParagraph";
// import KPSection from "@/ui/KPSection";
// import { whoWeWorkWithData as Data } from "@/lib/whoWeWorkWithData";

// function WhoWeWorkWith() {
//   return (
//     <KPSection>
//       <KPRow flexDirection="col" className="gap-10">
//         <KPHeading fontWeight="heavy">Who We Work With</KPHeading>
//         <KPRow wrapperContainer="disable">
//           {Data.map((wwww, index) => (
//             <KPRow
//               wrapperContainer="disable"
//               alignItems="start"
//               flexDirection="col"
//             >
//               <KPHeading size="sm" key={index}>
//                 {wwww.title}
//               </KPHeading>
//               <KPParagraph key={index}>{wwww.text}</KPParagraph>
//             </KPRow>
//           ))}
//         </KPRow>
//       </KPRow>
//     </KPSection>
//   );
// }

// export default WhoWeWorkWith;
