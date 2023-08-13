import { useRef, useEffect } from "react";

const Video = ({ src }) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.log("error attemting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <video
      loop
      autoPlay
      className="w-full lg:h-70 "
      muted
      playsInline
      ref={videoEl}
    >
      <source src={src}></source>
    </video>
  );
};

export default Video;
