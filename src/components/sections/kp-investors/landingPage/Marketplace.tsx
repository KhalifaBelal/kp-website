"use client";

import CalcDialog from "@/components/ui/CalcDialog";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import { useEffect, useState } from "react";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";
import KPParagraph from "@/components/ui/KPParagraph";
import "./marketplace.css";
import Image from "next/image";
import { Building } from "lucide-react";
import KPSection from "@/components/ui/KPSection";

var demoButtons: string | any[] | NodeListOf<Element>;

function start() {
  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll(".js-modify");
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener("click", toggleEffect);
  }

  // Add event "click" to "save buttons"
  var saveButtons = document.querySelectorAll(".js-save");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", toggleActive);
  }
}

// Toggle "effect" classes
function toggleEffect(this: any) {
  var target = document.querySelector(this.dataset.target);
  target.dataset.effect = this.dataset.effect;

  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove("active");
  }

  toggleActive.call(this);
}

// Toggle "active" class
function toggleActive(this: any) {
  this.classList.toggle("active");
}

// Invoke "start ()" function
window.addEventListener("load", start);

function Marketplace() {
  useEffect(() => {
    start();
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <KPSection>
      <div className="card" data-effect="zoom">
        <button className="card__save  js-save" type="button">
          <i className="fa  fa-bookmark"></i>
        </button>
        <figure className="card__image">
          <img
            src="../../../../philosophy.png"
            alt="Short description"
          />
        </figure>
        <div className="card__header">
          <figure className="card__profile">
            <Building className="img p-6" />
          </figure>
        </div>
        <div className="card__body">
          <h3 className="card__name">Real Estate Flipping</h3>

          <KPParagraph className="card__bio">
            {Data[0].investmentTarget}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].investmentType}
            <br />
            {Data[0].return}
            <br />
            {Data[0].duration}
            <br />
            {Data[0].minimumInvestment}
            <br />
            {Data[0].payout}
          </KPParagraph>
        </div>
        <div className="card__footer">
          <p className="card__date">Feb 10 2018</p>
          <p className=""></p>
        </div>
      </div>
    </KPSection>
  );
}

export default Marketplace;

// <div className="w-full py-20 bg-zinc-100" id="marketplace">
//   <KPRow flexDirection="col" alignItems="start">
//     <KPHeading className="text-black">Marketplace</KPHeading>
//     <KPRow
//       wrapperContainer="disable"
//       flexDirection="col"
//       alignItems="start"
//     >
//       <div className="flex flex-col gap-4 w-full items-center justify-center container">
//         {Data.map((_item, index) => (
//           <Card
//             key={index}
//             className="box relative p-1 min-w-[80vw] min-h-[80vh] bg-[url('/restaurant.png')] bg-no-repeat bg-cover bg-blend-overlay bg-black/75"
//           >
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 {_item.title}
//               </CardTitle>
//               <span className="bg-red-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
//                 P
//               </span>
//             </CardHeader>
//             <CardContent className="content">
//               <KPParagraph>{_item.investmentTarget}</KPParagraph>
//               <KPParagraph>{_item.minimumInvestment}</KPParagraph>
//               <KPParagraph>{_item.investmentType}</KPParagraph>
//               <KPParagraph>{_item.return}</KPParagraph>
//               <KPParagraph>{_item.duration}</KPParagraph>
//               <KPParagraph>{_item.minimumInvestment}</KPParagraph>
//               <KPParagraph>{_item.payout}</KPParagraph>
//             </CardContent>
//             <KPButton
//               className={
//                 (kpButtonVariants({
//                   variant: "subtle",
//                   fullWidth: "enabled",
//                   size: "sm",
//                 }),
//                 "absolute bottom-0 left-0 right-0")
//               }
//             >
//               <div onClick={handleOpenDialog}>Calculate</div>
//             </KPButton>
//           </Card>
//         ))}
//       </div>
//     </KPRow>
//   </KPRow>

//   <CalcDialog open={isDialogOpen} />
// </div>
