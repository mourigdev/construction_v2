import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";

const SliderFull = ({ data }) => {
  return (
    <div className="bg-base-200 ">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <h2 className="uppercase pt-10 font-bold text-3xl tracking-wide text-green-700">
          WE MAKE A DIFFERENCE
        </h2>
        <p className="py-7 text-xl font-light tracking-wider text-base-400">
        When you join Hercules Group, you become part of a team that is dedicated to making a difference. We actively contribute to the communities we serve through various initiatives, including volunteer programs, charitable partnerships, and sustainable practices. Together, we can create a positive impact that extends beyond our business operations.
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mb-10"
        >
          {data.map((d) => (
            <SwiperSlide key={d.id}>
              <Card src={d.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderFull;
