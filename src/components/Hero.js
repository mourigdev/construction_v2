import Video from "./Video";

const Hero = ({ header, text, src, isVideo }) => {
  return (
    <div className="w-full  mb-8">
      {isVideo ? <Video src={src} /> : <img src={src} alt="hero" />}
      {header ? (
        <div className="w-full text-center bg-gradiant">
          <h2 className="uppercase text-white pt-8 tracking-wider leading-12 text-3xl w-9/12 mx-auto md:text-4xl font-bold ">
            {header}
          </h2>
          <p className="text-white py-8 md:text-xl  tracking-wide w-10/12 lg:w-5/12 mx-auto">
            {text}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Hero.defaultProps = {
  isVideo: false,
};

export default Hero;

// 100% finish
