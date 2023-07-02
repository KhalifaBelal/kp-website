import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import { fundingData as Data } from "@/lib/solutions/fundingData";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainPage() {
  return (
    <KPSection className="bg-zinc-100">
      <div className="md:hidden">
        {Data.map((step, index) => (
          <div key={index} className="py-10">{step.object}</div>
        ))}
      </div>
      <div className="w-full hidden md:flex flex-col px-10 gap-16">
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
                {_swipe.object}
              </KPRow>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </KPSection>
  );
}

export default MainPage;
