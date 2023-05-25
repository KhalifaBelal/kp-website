"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { howToInvestData as Data } from "@/lib/investors/howToInvestData";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HowToInvest() {
  return (
    <KPSection flexDirection="col">
      <KPRow flexDirection="col" alignItems="start" className="py-20">
        <KPHeading>How to invest in the Khalifa Partners Fund?</KPHeading>
        <KPHeading size="sm">
          Step into a World of Investment Possibilities:
        </KPHeading>
        <KPParagraph>
          Our Three-Step Investment Plan Investing in Khalifa Partners is a
          gateway to a world of exciting opportunities and the potential for
          significant returns. We`&apos;`ve designed a simple, three-step plan
          to guide you through the investment process, ensuring a seamless and
          rewarding experience.
        </KPParagraph>
      </KPRow>

      <div className="md:hidden">
        <KPRow flexDirection="col" alignItems="start">
          <KPHeading size="sm">Here`&apos;`s how it works:</KPHeading>
          {Data.map((_swipe, index) => (
            <KPRow key={index} wrapperContainer="disable">
              <KPHeading size="sm" fontWeight="normal">
                {_swipe.title}
              </KPHeading>
              <KPParagraph>{_swipe.text}</KPParagraph>
            </KPRow>
          ))}
        </KPRow>
      </div>

      <div className="w-full hidden md:flex flex-col px-10 gap-16">
        <KPHeading fontWeight="normal" className="text-center" size="sm">
          Here`&apos;`s how it works:
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
                <KPHeading size="sm" fontWeight="normal">
                  {_swipe.title}
                </KPHeading>
                <KPParagraph>{_swipe.text}</KPParagraph>
              </KPRow>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </KPSection>
  );
}

export default HowToInvest;
