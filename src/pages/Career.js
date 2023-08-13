import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import CustomerSays from "../components/CustomerSays";
import SliderFull from "../components/SliderFull";
import Meet from "../components/Meet";
import Fivethrait from "../components/Fivethrait";
import CareerText from "../components/CareerText";

const Career = () => {
  const sliderData = [
    {
      id: 1,
      src: "assets/ourpeople.jpg",
      Title: "Putting People First: Our Foundation for Success",
      paragraph:
        "At Hercules Group, our success is built on the foundation of our people. We believe in creating an environment that values and supports the growth and well-being of our team members. Our culture is characterized by a strong sense of camaraderie, collaboration, and personal development.",
      action: "Expolore open position",
      small:
        "At Hercules Group, we prioritize the well-being and growth of our team members. Our culture fosters camaraderie...",
    },
    {
      id: 2,
      src: "assets/commited.jpg",
      Title: "We're committed to inclusion & diversity",
      paragraph:
        "Diversity and inclusion are at the core of who we are. We recognize that a diverse team brings together unique perspectives, experiences, and talents, which fuel our innovation and drive our success. We actively foster an inclusive workplace that embraces individuals from all backgrounds, cultures, and walks of life.",
      action: "Expolore open position",
      small:
        "Diversity and inclusion are at the core of who we are. We recognize that a diverse team brings together unique perspectives, experiences ...",
    },
    {
      id: 3,
      src: "assets/future.jpg",
      Title: "Shaping the Future: Innovation and Disruption at Hercules Group",
      paragraph:
        "Innovation is at the heart of everything we do. As a forward-thinking organization, we constantly seek new ways to disrupt the real estate industry, push boundaries, and shape the future. We encourage our team members to think outside the box, challenge conventions, and explore innovative solutions that deliver exceptional value to our clients.",
      action: "Expolore open position",
      small:
        "Innovation is at the heart of everything we do. As a forward-thinking organization...",
    },
    {
      id: 4,
      src: "assets/listen.jpg",
      Title: "We listen, question, and commit",
      paragraph:
        "Collaboration is a fundamental pillar of our culture. We believe in the power of open communication, active listening, and constructive questioning. We encourage our team members to challenge the status quo, share their ideas, and engage in meaningful discussions. By fostering a culture of mutual respect and collaboration, we create an environment where everyone's voice is heard, and collective commitment leads to extraordinary outcomes.",
      action: "Expolore open position",
      small: "Collaboration is a fundamental pillar of our culture. We believe in the power of open communication ...",
    },
  ];

  const customerData = [
    {
      id: 1,
      Title: "Douae Jawhari",
      subTitle: "Community Workforce Initiative Coordinator",
      src: "assets/stevan.jpg",
      text: "«Joining Hercules Group has allowed me to leverage my skills and expertise in a new and exciting context. The company's commitment to making a positive impact in the community aligns perfectly with my own values, making it an ideal fit for me.»",
    },
    {
      id: 2,
      Title: "Ahmed Makhloufi",
      subTitle: "Project Manager",
      src: "assets/nicola.jpg",
      text: "«Hercules Group is a place where innovation, collaboration, and personal growth thrive. The support and trust I receive from my colleagues and leaders have empowered me to step out of my comfort zone, embrace change, and achieve remarkable outcomes. It's a dynamic and inspiring environment to work in.»",
    },
  ];

  const CareerSilder = [
    {
      id: 1,
      src: "assets/diffrence1.jpg",
    },
    {
      id: 2,
      src: "assets/diffrence2.jpg",
    },
    {
      id: 3,
      src: "assets/diffrence3.jpg",
    },
    {
      id: 4,
      src: "assets/diffrence4.jpg",
    },
    {
      id: 5,
      src: "assets/diffrence5.jpg",
    },
  ];

  return (
    <div>
      <Hero
        src="assets/career.jpg"
        header="CAREERS WITH US"
        text="EXPLORE OPEN POSITIONS"
      />
      <Slider p={true} data={sliderData} />
      <Meet />
      <Fivethrait
        header={"Our culture is shaped by five key traits that drive our success:"}
        src={"assets/five.jpg"}
      />
      <CustomerSays bghouse={false} data={customerData} />
      <SliderFull data={CareerSilder} />
      <CareerText />
      <Footer />
    </div>
  );
};

export default Career;
