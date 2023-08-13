import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/HomeCards";
import Blocks from "../components/Blocks";
import Slider from "../components/Slider";
import Thriving from "../components/Thriving";
import Global from "../components/Global";
import Footer from "../components/Footer";

const Home = () => {
  const sliderData = [
    {
      id: 1,
      src: "assets/howwework.jpg",
      Title: "HOW WE WORK",
      paragraph:
        "We believe in creating the best environments for our clients, employees, and community members. This includes collaborating with landowners, public sectors, and community groups. Our core values are an integral part of our identity, setting us apart and driving us towards a culture of continuous excellence.",
      action: "Learn More About How We Work",
      small:
        "At Hercules Group, we strive to build enduring relationships with our clients, employees, and communities. We work diligently towards being the ideal partner, nurturing these connections for mutual growth.",
    },
    {
      id: 2,
      src: "assets/ourbusiness.jpg",
      Title: "OUR BUSINESS",
      paragraph:
        "Our interest extends beyond just the properties we develop and construct. We aim to create spaces where businesses can excel, where employees love to work, and where local communities and the environment can benefit. These values are more than just words to us – they are the ethos that defines our work culture.",
      action: "Learn More About What We Do",
      small:
        "We provide extensive construction, development, and real estate services to empower your business's growth and prosperity.",
    },
    {
      id: 3,
      src: "assets/betterfuture.jpg",
      Title: "A BETTER FUTURE",
      paragraph:
        "Like you, we believe sustainability is good business. We strive to be a trusted, long-term partner that maximizes return to our stakeholders while minimizing environmental impacts.",
      action: "Discover Our Impact",
      small:
        "We are committed to being a responsible business partner, seeking to provide superior returns for our stakeholders while reducing our environmental footprint. We consider sustainability a critical aspect of our operations, and we are dedicated to making a positive impact.",
    },
  ];
  return (
    <div>
      <Hero
        isVideo={true}
        src="assets/video.mp4"
        header="CELEBRATING THE FOUNDING OF HERCULES GROUP"
        text="EXPLORE OUR JOURNEY"
      />
      <Cards />
      <Blocks />
      <Slider data={sliderData} />
      <Thriving
        link="/contact"
        src="assets/Customer-Service.jpg"
        Text="Your business is important to us. Whether you're a startup or a multinational corporation, we provide you access to the right properties, skilled people, and innovative solutions you need to succeed year after year."
        Title={"EMBRACE SUCCESS"}
      />
      <Global />
      <Footer />
    </div>
  );
};

export default Home;
