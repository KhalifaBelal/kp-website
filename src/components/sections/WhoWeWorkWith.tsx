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
    <KPSection>
      <KPRow flexDirection="col" className="gap-10">
        <KPHeading fontWeight="heavy">Who We Work With</KPHeading>

        <KPRow wrapperContainer="disable">
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
          >
            <KPHeading size="sm">
              People with <span className="text-kp-red">{wwww}</span>
            </KPHeading>
            <KPRow wrapperContainer="disable" className="gap-5 lg:gap-20 shadow-inner-morph py-5 px-3 rounded-md">
              <KPRow
                wrapperContainer="disable"
                className="flex-row lg:flex-col lg:items-start"
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
                        _wwww.key === wwww ? "text-kp-red" : "text-zinc-900"
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
