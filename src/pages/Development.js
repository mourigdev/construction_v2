import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Devlopment = () => {
  const data = [
    {
      id: 1,
      Title: "Our Development Approach",
      text: "we believe in transforming visions into reality. Our development process is meticulously planned and executed, taking into account the unique needs of our clients, the surrounding environment, and the local community.",
      link: "",
    },
    {
      id: 2,
      Title: "Collaborative Partnerships",
      text: " Successful development is a team effort. That's why we've cultivated strong relationships with a network of trusted partners, including local contractors, architects, real estate brokers, and community leaders. Our collaborations ensure the highest quality results on every project.",
      link: "",
    },
    {
      id: 3,
      Title: "Specialized Projects",
      text: "Our portfolio spans a diverse range of projects, from luxury villas and apartment complexes to commercial buildings and infrastructural developments. Each project is a testament to our commitment to quality, innovation, and client satisfaction.",
      link: "",
    },
    {
      id: 4,
      Title: "Conception to Completion",
      text: "We're with you every step of the way. From the initial concept and planning stages to the final construction and finishing touches, Hercules Group is committed to delivering excellent results that exceed our clients' expectations.",
      link: "",
    },
    {
      id: 5,
      Title: "Navigating Challenges",
      text: "Development comes with its own set of unique challenges. At Hercules Group, we anticipate potential obstacles and use our expertise to develop effective solutions. Our proactive approach minimizes risk and ensures a smooth execution of each project.",
      link: "",
    },
    {
      id: 6,
      Title: "Sustainable Development Practices",
      text: "We believe in building for the future. That's why we incorporate sustainable practices into our developments, ensuring our projects are not only high-quality and beautiful, but also environmentally friendly.",
      link: "",
    },
    {
      id: 7,
      Title: "Client Testimonials",
      text: "Our clients' satisfaction is our success. We take pride in the positive feedback we receive from our clients, who commend our commitment to quality, timeliness, and clear communication. Our testimonials are a testament to the high level of service we provide.",
      link: "",
    },
    {
      id: 8,
      Title: "Our Expert Team",
      text: "The backbone of Hercules Group is our highly skilled and experienced team. Comprised of industry professionals with decades of experience, our team brings their expertise and passion to every project, ensuring each development we undertake is completed to the highest standard.",
      link: "",
    },
  ];

  const customerData = [
    {
      id: 1,
      Title:
        "Clients YASSER EL BOUZIDI, CEO, LUXURY VILLAS",
      subTitle: "MARRAKECH",
      src: "assets/customer1.png",
      text: "Hercules Group has walked with Luxury Villas through every developmental phase. Their unwavering support and dedication have been nothing short of exemplary.",
    },
    {
      id: 2,
      Title: "Clients AHMED AMINE, MANAGING DIRECTOR, DREAM APARTMENTS",
      subTitle: "CASABLANCA",
      src: "assets/customer2.png",
      text: "Hercules Group has consistently shown an unwavering commitment to their clients. They make us feel like we are their top priority.",
    },
  ];
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero.jpg"
        header="Devlopment"
        text="Our team is committed to building relationships with our clients and partners, paving the way for mutual growth and success."
      />
      <Work
        header={"Our Collaborative Approach"}
        text="Hercules Group's distinctive approach lies in our genuine interest in the successes of our clients and partners. We do not see ourselves as mere service providers; we are your strategic partners in realizing your vision. From ideation to execution, our team strives to foster a collaborative environment that encourages dialogue, shared creativity, and innovative problem-solving. The mutual respect and trust we nurture with our clients stand as testimonies to our commitment, as captured in their own words below."
        src="assets/work.jpg"
      />
      <CustomerSays data={customerData}/>
      <WorkWith data={data} title={"Our Development Philosophy: The Hercules Difference"}/>
      <Footer title={"Turn your visions into reality with our meticulous development process."} text={"Contact our expert team today to discuss your unique needs !"}/>
    </div>
  );
};

export default Devlopment;
