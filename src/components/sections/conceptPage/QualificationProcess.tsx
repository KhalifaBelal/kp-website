"use client";

import dynamic from "next/dynamic";
const Preface = dynamic(() => import("@/components/sections/Preface"));

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
          <KPHeading size="sm" fontWeight="normal">
            Launching a startup is an exhilarating journey filled with
            opportunities and challenges. To navigate the complexities of the
            business landscape successfully, it&apos;s crucial to have a well-defined
            plan. This three-part plan, comprising strategy, execution, and
            partnership, provides a solid foundation for startups to thrive and
            achieve their goals. By integrating these elements, entrepreneurs
            can establish a robust framework that maximizes their chances of
            success.
          </KPHeading>
        </KPRow>

        <Preface title={prefaceData[0].title} text={prefaceData[0].text} />
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
        <Preface title={prefaceData[1].title} text={prefaceData[1].text} />
      </KPSection>
    </>
  );
}

export default QualificationProcess;
