"use client";

import dynamic from "next/dynamic";
const StrategyStep = dynamic(
  () => import("@/components/sections/StrategyStep")
);
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { strategyStepData as Data } from "@/lib/strategyStepData";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { prefaceData } from "@/lib/prefaceData";
import StrategyModel from "@/components/glb-models/StrategyModel";

function QualificationProcess() {
  return (
    <>
      <KPSection flexDirection="col">
        <KPRow flexDirection="col" alignItems="start" className="py-20">
          <KPHeading>Our Qualification Process</KPHeading>
          <KPParagraph>
            At Khalifa Partners, we have a rigorous qualification process in
            place to ensure that we select the most suitable individuals to join
            our team as General Managers for our companies. We believe that
            finding the right partners is crucial for our collective success.
            Here&apos;s an overview of our three-step qualification process
          </KPParagraph>
        </KPRow>

        <div className="md:hidden">
          {Data.map((step, index) => (
            <StrategyStep
              key={index}
              model={index}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>

        <div className="w-full hidden md:flex flex-col px-10 gap-16">
          <KPHeading fontWeight="normal" className="text-center" size="sm">
            Here&apos;s how it works:
          </KPHeading>
          <Swiper
            navigation={true}
            pagination={{ type: "progressbar" }}
            watchSlidesProgress
            modules={[Navigation, Pagination]}
            slidesPerView={1.175}
          >
            {Data.map((_swipe, index) => (
              <SwiperSlide key={index}>
                <KPRow flexDirection="col" alignItems="start">
                  <div className="relative aspect-square max-w-[200px] w-full">
                    <StrategyModel model={_swipe.model} />
                  </div>
                  <KPHeading>{_swipe.title}</KPHeading>
                  <KPParagraph>{_swipe.text}</KPParagraph>
                </KPRow>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </KPSection>
    </>
  );
}

export default QualificationProcess;
