// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Global = () => {
  const data = [
    {
      id: 1,
      Number: "100+ SATISFIED CLIENTS",
      description: "A testament to our commitment to superior service and client satisfaction.",
    },
    {
      id: 2,
      Number: "10+ ICONIC DEVELOPMENTS IN TANGER",
      description:
        "Adding value to Morocco's cityscape, one project at a time.",
    },
    {
      id: 3,
      Number: "CONTRIBUTING TO TANGER'S ECONOMIC GROWTH",
      description:
        "Our real estate developments play a significant role in the city's economic upliftment.",
    },
    {
      id: 4,
      Number: "500+ PEOPLE EMPLOYED ANNUALLY",
      description: "Through our projects, we generate numerous jobs and foster local employment.",
    },
    {
      id: 5,
      Number: "IMPACTING 1,000+ LIVES THROUGH OUR COMMUNITY INITIATIVES",
      description:
        "commitment extends beyond business, with a focus on enriching local communities.",
    },
  ];

  return (
    <div className="bg-video bg-overlay cursor-auto">
      <div className="mx-auto w-11/12 text-white py-12">
        <h2 className="text-4xl font-bold w-11/12 leading-large">
        A NATIONAL REACH WITH LOCAL IMPACT
        </h2>
        <p className="md:leading-10 leading-7 md:text-xl text-white md:font-light md:tracking-wider md:text-base-400 md:w-8/12">
        Our partnerships have real, tangible effects in our local communities and around the nation.
        </p>
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={window.innerWidth <= 768 ? 1 : 3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-10 "
        >
          {data.map((d) => (
            <SwiperSlide key={d.id}>
              {
              d.id === 1
              ?
              <div className="ml-12 mr-10 md:mx-0 mt-12 md:mt-4 ">
                <h3 className="font-bold text-2xl md:mb-3  md:text-center">
                  {d.Number}
                </h3>
                <p className="text-base-400 text-xl md:text-sm  md:text-center">
                  {d.description}
                </p>
              </div>
              :
              <div className="ml-12 mr-10 md:mx-0 mt-12 md:mt-4 ">
              <h3 className="font-bold text-2xl md:mb-3  md:text-center">
                {d.Number}
              </h3>
              <p className="text-base-400 text-xl md:text-sm  md:text-center">
                {d.description}
              </p>
            </div>
              }
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Global;
