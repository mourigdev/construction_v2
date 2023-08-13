import { useRef, useEffect } from "react";

const Meet = () => {
  const videoEl = useRef(null);
  const videoEl2 = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.log("error attemting to play", error);
      });

    videoEl2 &&
      videoEl2.current &&
      videoEl2.current.play().catch((error) => {
        console.log("error attemting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="mt-20 py-20 bg-base-200">
      <div className="w-8/12 mx-auto md:flex md:items-center md:justify-between">
      <h2 className="text-green-700 font-bold py-10 text-3xl">Meet Our Team Members</h2>
      </div>
      <div className="w-8/12 mx-auto md:flex md:items-center md:justify-between">
      <p className="text-xl w-10/12 pb-10 font-light tracking-wider text-base-400">
          At Hercules Group, we have a diverse and talented team that brings a wealth of expertise and passion to their roles. Let us introduce you to some of our exceptional individuals:
          </p>
      </div>

      <div className="w-8/12 mx-auto md:flex  md:justify-between">

        <div className="video md:w-6/12">
        {/* <h2 className="text-green-700 font-bold py-10 text-3xl">Meet Our Team Members</h2> */}
          <img
            className="w-full lg:h-70 "
            src="assets/majo.jpg"
            alt="mojo"
          />
        
          <p className="text-xl  pb-10 font-light tracking-wider text-base-400 mt-10" >
          Amira, Marketing Specialist: "Working at Hercules Group has been a transformative experience for me. The company's unwavering commitment to personal and professional growth has empowered me to exceed my own expectations and has had a profound impact on both my career and personal life."
          </p>
        </div>
        <div className="video md:w-6/12 md:ms-20">
          {/* <h2 className="text-green-700 font-bold py-10 text-3xl">
            MEET TIMOR
          </h2> */}
          <img
            className="w-full lg:h-70"
            src="assets/majo2.jpg"
            alt="mojo2"
          />
          <p className="text-xl  pb-10 font-light tracking-wider text-base-400 mt-10" >
          Sabir, Project Manager: "Hercules Group has provided me with endless opportunities for professional development and growth. The collaborative environment, coupled with a strong sense of purpose, has enabled me to tackle complex challenges with confidence and deliver outstanding results."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet;
