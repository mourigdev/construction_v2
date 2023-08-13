// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";
import { useState } from "react";

const Slider = ({ p, data }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const selectedSlide = data.filter((d) => d.id === activeSlide);

  return (
    <>
      {window.innerWidth <= 768 ? (
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
              <Card
                Title={d.Title}
                paragraph={d.paragraph}
                src={d.src}
                action={d.action}
                slid={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="md:w-9/12 lg:7/12 mx-auto flex  justify-between mt-20">
          <div className="flex w-4/12 flex-col">
            {data.map((d) => (
              <div
                key={d.id}
                onClick={() => setActiveSlide(d.id)}
                className={`card mb-6 lg:rounded-t-none lg:card-side bg-base-200 transition cursor-pointer hover:bg-green-700 shadow ${
                  activeSlide === d.id ? "active-bg-green-700" : ""
                }`}
              >
                <div className={`card-body ${p && "p-4"}`}>
                  <h2 className="card-title text-green-700">{d.Title}</h2>
                  <p className="text-xs md:hidden lg:block">{d.small}</p>
                </div>
                {/* <figure className="pr-4 w-8/12 ">
                  <img
                    className="md:hidden lg:block"
                    src={d.src}
                    alt={d.Title}
                  />
                </figure> */}
              </div>
            ))}
          </div>
          {selectedSlide.map((s) => (
            <div key={s.id} className="ml-6 w-8/12 relative mb-28">
              <img src={s.src} alt={s.Title} className="lg:w-10/12 md:w-full" />
              <h3 className="lg:w-10/12 md:w-full absolute-header p-4 text-2xl font-bold tracking-wide">
                {s.Title}
              </h3>
              <p className="w-9/12 mt-4 text-base-400">{s.paragraph}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Slider;
