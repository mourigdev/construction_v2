import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import Financials from "../components/Financials";
import Report from "../components/Report";
import Glance from "../components/Glance";
import Research from "../components/Research";
import Corporate from "../components/Corporate";

const Investor = () => {
  const newsData = [
    {
      id: 1,
      src: "assets/ourpeople.jpg",
      Title:
        "Hercules Group secures strategic partnerships",
      date: "Hercules Group secures strategic partnerships with experienced contractors and talented architects, paving the way for future high-profile residential and commercial projects. Stay tuned for more exciting news and updates about our projects and collaborations.",
    },
    {
      id: 2,
      Title: "Annual Investor Event",
      date: "Join us at our annual Investor Event to learn more about Hercules Group's achievements, our vision for the future, and exciting investment opportunities. Our next event will be announced soon.",
    },
    {
      id: 3,
      Title:
        "About Hercules Group",
      date: "Hercules Group is a dynamic real estate start-up in Morocco that combines innovative design, quality construction, and strategic management services. We leverage our local understanding and international exposure to create high-quality, sustainable living spaces that cater to the modern Moroccan lifestyle.",
    },
  ];

  return (
    <div>
      <Hero
        src="assets/hero-img.jpg"
        header="Investor Relations - Hercules Group"
        // text="JULY 18, 2023 - 11:00 AM ET"
      />
      <News data={newsData} />
      <Financials />
      <Report />
      <Corporate margin={true}
      section="Investment Opportunities"
      title="WE'VE BUILT A range of investment opportunities"
      text="Hercules Group offers a range of investment opportunities tailored to suit the needs of our investors. From equity investments to strategic partnerships, we provide a platform for you to be part of Morocco's thriving real estate sector. For more details on investment opportunities, please contact us. " />
      <Glance />
      <Research />
      <Footer mt={0} />
    </div>
  );
};

export default Investor;
