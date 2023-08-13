import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Management = () => {
  const data = [
    {
      id: 1,
      Title: "Comprehensive Property Management",
      text: "From leasing to rent collection and tenant communication, we take care of it all.",
      link: "",
    },
    {
      id: 2,
      Title: "In-house Maintenance Services",
      text: "With our extensive in-house capabilities, we ensure your property stays in prime condition with services like cleaning, repairs, inspections, landscaping, and pest control.",
      link: "",
    },
    {
      id: 3,
      Title: "Innovative Sales Strategies",
      text: "We handle the entire sales process, leveraging innovative marketing strategies to ensure your property reaches the right audience.",
      link: "",
    },
    {
      id: 4,
      Title: "Security and Surveillance",
      text: "Our top-notch security services guarantee the safety and security of your property.",
      link: "",
    },
    {
      id: 5,
      Title: "Efficient Utility Management",
      text: "We take the stress out of managing utilities, so you can focus on more important matters.",
      link: "",
    },
    {
      id: 6,
      Title: "Regular Inspections and Repair",
      text: "With our regular inspection and prompt repair services, we ensure the longevity and value of your property.",
      link: "",
    },
    {
      id: 7,
      Title: "Quality Assurance",
      text: "Our rigorous quality checks and consistent performance tracking ensure reliable and high-quality services at all times.",
      link: "",
    },
    {
      id: 8,
      Title: "Our Expert Team",
      text: "Our team is made up of seasoned professionals with a wealth of experience in property management. They bring their dedication, attention to detail, and a high level of expertise to every project.",
      link: "",
    },
  ];

  const customerData = [
    {
      id: 1,
      Title:
        "Clients MUSTAFA SAOUDI, OWNER, RESIDENTIAL BUILDING",
      subTitle: "TETOUAN",
      src: "assets/customer1.png",
      text: "With Hercules Group managing my property, I've experienced nothing but peace of mind and superior care to every detail.",
    },
    {
      id: 2,
      Title: "Clients FATIMA ZAHRA, OWNER, COMMERCIAL BUILDING",
      subTitle: "CASABLANCA",
      src: "assets/customer2.png",
      text: "The attention to detail, prompt response, and excellent service from the Hercules Group team have made property management effortless.",
    },
  ];
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero7.jpg"
        header="Management"
        text="At Hercules Group, we ensure that your property is not just maintained, but it thrives. We prioritize your return on investment, making us the best choice for comprehensive property management services."
      />
      <Work
        header={"Our Collaborative Approach"}
        text="We strive for complete transparency in our operations, keeping our clients informed at each step. While we encourage client involvement, our goal is to provide a stress-free experience where you can sit back and reap the benefits while we take care of everything."
        src="assets/work.jpg"
      />
      <CustomerSays data={customerData}/>
      <WorkWith data={data} title={"Our Management Philosophy: The Hercules Difference"}/>
      <Footer title={"Whether you own a property developed by us or elsewhere, Hercules Group offers exceptional property management services."} text={" With a large portfolio of high-yielding properties under our management, we've proven our expertise in providing the best returns Get in touch with our expert team today to discuss your needs."}/>
    </div>
  );
};

export default Management;
