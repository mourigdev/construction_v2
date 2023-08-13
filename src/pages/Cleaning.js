import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Cleaning = () => {

    const data = [
    {
      id: 1,
      Title: "Design for Living",
      text: "Our primary focus is on residential design, though we are also well-equipped to handle a broad spectrum of projects including commercial, hospitality, and retail spaces.",
      link: "",
    },
    {
      id: 2,
      Title: "Individualized Design Solutions",
      text: "No two projects are the same for us. We believe in crafting bespoke designs that echo your unique personal style and cater to your specific lifestyle needs.",
      link: "",
    },
    {
      id: 3,
      Title: "Full-Service Design",
      text: "We offer a comprehensive suite of services, from conceptual design and space planning to selection of color schemes, furniture, and accessories. You can choose to involve us in certain aspects or entrust us with the entire process – we're flexible!",
      link: "",
    },
    {
      id: 4,
      Title: "Transparent Practices",
      text: "Our relationships with top industry suppliers and vendors ensure that you receive high-quality products and services. Rest assured, all partnerships are transparent, with no knowledge transfer to clients.",
      link: "",
    },
    {
      id: 5,
      Title: "Our Expert Team",
      text: "The backbone of Hercules Group's interior design services is our highly skilled and experienced team. Comprised of industry professionals with an eye for detail and a passion for creating beautiful spaces, our team brings their expertise to every project, ensuring each design we undertake is completed to the highest standard.",
      link: "",
    },
    {
      id: 6,
      Title: "Emphasis on Sustainability",
      text: "As a modern design firm, we recognize the importance of sustainable design practices. We strive to incorporate environmentally-friendly materials and energy-efficient designs wherever possible, without compromising on aesthetics or functionality.",
      link: "",
    }
  ];

  const customerData = [
    {
      id: 1,
      Title:
        "SAID EL MANDJRA, CEO, PEARL RESIDENCES",
      subTitle: "TANGIER",
      src: "assets/customer1.png",
      text: "he Hercules Group brought our vision for Pearl Residences to life with stunning interior design that is both stylish and functional. Their expertise and commitment to quality are truly commendable.",
    },
    {
      id: 2,
      Title: "NOUR BERRADA, OWNER, ART LOFT",
      subTitle: "CASABLANCA",
      src: "assets/customer2.png",
      text: "Hercules Group's interior design team exceeded our expectations with their innovative ideas and attention to detail. They transformed our loft into a work of art.",
    },
  ];
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero6.jpg"
        header="Interior Design"
        text="we believe that the interior design of a home or commercial space speaks volumes about its inhabitants or owners. With our expert team of interior designers, we aim to transform your space into a personalized haven that beautifully encapsulates your individual style and preferences"
      />
      <Work
        header={"Our Collaborative Approach"}
        text="At Hercules Group, we understand that successful interior design is a deeply collaborative and personal journey. We invite our clients to take an active part in the design process, ensuring that their personal tastes, lifestyle needs, and functional requirements are beautifully woven into the final design. Your involvement can be as much or as little as you desire - our expert team is adept at translating even the most abstract ideas into stunning design realities."
        src="assets/work3.jpg"
      />
      <CustomerSays data={customerData} />
      <WorkWith data={data} title="Our Interior Design Philosophy: The Hercules Difference"/>
      <Footer title={"Want to transform your space into a reflection of your style and personality?"} text={"Get in touch with our expert team today to discuss your interior design needs."}/>
    </div>
  );
};

export default Cleaning;
