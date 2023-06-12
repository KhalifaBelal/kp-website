"use client";

import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { howToInvestData as Data } from "@/lib/weWorkWith/investorsPage/howToInvestData";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HowToInvest() {
  return (
    <>
      <KPSection flexDirection="col">
        <KPRow flexDirection="col" alignItems="start" className="py-20">
          <KPHeading>How to invest in the Khalifa Partners Fund?</KPHeading>
          <KPHeading size="sm">
            Step into a World of Investment Possibilities:
          </KPHeading>
          <KPParagraph>
            Our Three-Step Investment Plan Investing in Khalifa Partners is a
            gateway to a world of exciting opportunities and the potential for
            significant returns. We&apos;ve designed a simple, three-step plan
            to guide you through the investment process, ensuring a seamless and
            rewarding experience.
          </KPParagraph>
        </KPRow>

        <div className="md:hidden">
          <KPRow flexDirection="col" alignItems="start">
            <KPHeading size="sm">Here&apos;s how it works:</KPHeading>
            {Data.map((_swipe, index) => (
              <KPRow key={index} wrapperContainer="disable">
                <KPHeading className="text-left" size="sm" fontWeight="normal">
                  {_swipe.title}
                </KPHeading>
                <KPParagraph>{_swipe.text}</KPParagraph>
              </KPRow>
            ))}
          </KPRow>
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

      <KPSection className="bg-zinc-100">
        <KPRow alignItems="start" flexDirection="col">
          <KPHeading size="sm" className="text-black">Invest with Confidence:</KPHeading>
          <KPParagraph className="text-zinc-700">
            By following our three-step investment plan, you can invest with
            confidence, knowing that you have a trusted partner by your side.
            We&apos;re committed to providing exceptional service, comprehensive
            support, and access to a world of investment possibilities. Let us
            help you navigate the investment landscape, maximize your returns,
            and achieve your financial goals.
          </KPParagraph>
          <KPParagraph className="text-zinc-700">
            Our dedicated portfolio managers will provide regular updates,
            performance reports, and insights on your investments, ensuring you
            have a clear understanding of your portfolio&apos;s progress. We&apos;ll also
            be available to address any questions or concerns you may have,
            offering strategic advice and guidance to optimize your investment
            portfolio.
          </KPParagraph>
          <KPParagraph className="text-zinc-700">
            Beyond portfolio management, we foster a collaborative and
            transparent relationship with our investors. We regularly organize
            investor events, webinars, and networking opportunities, giving you
            the chance to connect with other like-minded investors and industry
            professionals. This community enables you to stay informed,
            exchange ideas, and explore additional investment opportunities.
          </KPParagraph>
        </KPRow>
      </KPSection>
    </>
  );
}

export default HowToInvest;
