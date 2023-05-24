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

function HowToInvestIntro() {
  return (
    <KPSection flexDirection="col">
      <KPRow flexDirection="col" alignItems="start" className="py-20">
        <KPParagraph>How to invest in the Khalifa Partners Fund?</KPParagraph>
        <KPHeading size="sm" fontWeight="normal">
          <span className="font-semibold">
            Step into a World of Investment Possibilities:
          </span>{" "}
          Our Three-Step Investment Plan Investing in Khalifa Partners is a
          gateway to a world of exciting opportunities and the potential for
          significant returns. We've designed a simple, three-step plan to guide
          you through the investment process, ensuring a seamless and rewarding
          experience.
        </KPHeading>
      </KPRow>
      <div className="w-full hidden md:flex flex-col px-10 gap-16">
        <KPHeading className="text-center" size="sm">
          Here's how it works:
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

export default HowToInvestIntro;
