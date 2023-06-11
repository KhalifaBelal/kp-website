"use client";

import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";
import Blurb from "@/components/ui/Blurb";
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

function SkillsLeaders() {
  const dataSliceOne = Data.slice(0, 4);
  const dataSliceTwo = Data.slice(4, 8);

  return (
    <KPSection flexDirection="col" className="gap-10">
      <KPRow flexDirection="col">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading>
            Khalifa Partners - Where Innovation Meets Ambition
          </KPHeading>
          <KPHeading size="sm">
            Take the leap, seize the opportunity, and let us empower you to
            redefine success.
          </KPHeading>
          <KPParagraph>
            At Khalifa Partners, we believe in empowering managers to focus on
            the daily operations of their business without the burden of
            managing specific fields of work. That&apos;s why we provide a
            unique opportunity where our resources are dedicated to offering the
            following skills, allowing you to excel in your core
            responsibilities:
          </KPParagraph>
        </KPRow>
        <KPRow flexDirection="col" className="md:hidden">
          <KPRow wrapperContainer="disable">
            {dataSliceOne.map((_skill, index) => (
              <Blurb
                key={index}
                title={_skill.skill}
                icon={_skill.icon}
                description={_skill.description}
                className="aspect-square"
              />
            ))}
          </KPRow>
          <KPRow wrapperContainer="disable">
            {dataSliceTwo.map((_skill, index) => (
              <Blurb
                key={index}
                title={_skill.skill}
                icon={_skill.icon}
                description={_skill.description}
                className="aspect-square"
              />
            ))}
          </KPRow>
        </KPRow>
      </KPRow>
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
                  {_swipe.skill}
                </KPHeading>
                <KPParagraph>{_swipe.description}</KPParagraph>
              </KPRow>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </KPSection>
  );
}

export default SkillsLeaders;
