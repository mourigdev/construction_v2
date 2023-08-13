import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";
import CustomerSays from "../components/CustomerSays";
import WorkWith from "../components/WorkWith";

const Construction = () => {

  const data = [
    {
      id: 1,
      Title: "Quality Construction",
      text: "As industry leaders in residential construction, we're driven by a commitment to quality. Our use of advanced construction methodologies and premium materials ensures durability and longevity in every project we undertake, residential or otherwise.",
      link: "",
    },
    {
      id: 2,
      Title: "Safety First",
      text: " We are steadfast in our commitment to maintaining a safe and secure working environment. By adhering strictly to safety regulations and guidelines, we safeguard our workforce and partners.",
      link: "",
    },
    {
      id: 3,
      Title: "Sustainable Practices",
      text: "Balancing profitability and sustainability is crucial in today's construction industry. At Hercules Group, we incorporate eco-friendly materials and energy-efficient designs wherever possible without compromising our profit objectives.",
      link: "",
    },
    {
      id: 4,
      Title: "Timely Completion",
      text: "We understand the value of time. Our team of professionals meticulously plan and execute each phase to ensure the timely completion of projects.",
      link: "",
    },
    {
      id: 5,
      Title: "Cost-Efficient Solutions",
      text: "With an eye for innovative and cost-effective solutions, Hercules Group offers exceptional value to clients without compromising on quality.",
      link: "",
    },
    {
      id: 6,
      Title: "Construction Consultation Services",
      text: "Leveraging our vast industry experience, we provide comprehensive consultation services that cover everything from project feasibility to design considerations, all tailored to your specific needs.",
      link: "",
    },
    {
      id: 7,
      Title: "Renovation & Remodeling",
      text: "Beyond new constructions, we offer extensive services for renovation and remodeling of existing structures, breathing new life into your property.",
      link: "",
    },
    {
      id: 8,
      Title: "Expert Team",
      text: "At the core of Hercules Group is our experienced team. Industry veterans like Rashid, our construction lead, and Youssera, our in-house architect, bring their unique expertise and passion to every project.",
      link: "",
    },
  ];


  const customerData = [
    {
      id: 1,
      Title:
        "Clients KHALID EL HADRAMI, PROJECT MANAGER, ROYAL PALACE",
      subTitle: "RABAT",
      src: "assets/customer1.png",
      text: "Hercules Group was instrumental in the recent expansion of our palace. Their attention to detail and dedication to delivering top-notch quality were commendable.",
    },
    {
      id: 2,
      Title: "Clients ZAKARIA BOUBKER, CEO, ELITE HOTELS",
      subTitle: "CASABLANCA",
      src: "assets/customer2.png",
      text: "Our new hotel wing, constructed by Hercules Group, stands as a testament to their reliability and commitment to quality.",
    },
  ];
  return (
    <div>
      <Hero
        src="assets/how-we-work-hero4.jpg"
        header="Construction"
        text="At Hercules Group, our dedicated team of builders, engineers, and architects collaboratively work towards constructing superior quality structures. We are committed to creating long-term assets for our clients while positively contributing to our community."
      />
      <Work
        header={"Our Collaborative Approach"}
        text="Every construction project at Hercules Group is a testament to our belief in the power of collaboration. We involve our clients and partners in the construction process, ensuring their vision and objectives are reflected in the final product. Our commitment to transparency, engagement, and mutual respect fosters a relationship of trust with our clients and partners, as showcased in their testimonials below."
        src="assets/work2.jpg"
      />
      <CustomerSays data={customerData} />
      <WorkWith data={data} title={"Our Construction Philosophy: The Hercules Difference"}/>
      <Footer title={"Transform your construction vision into reality."} text={"Get in touch with our expert team today and let us help build your future!"}/>
    </div>
  );
};

export default Construction;
