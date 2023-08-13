import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero src="assets/how-we-work-hero8.jpg" />
      <h4
        className="px-10"
        style={{
          textAlign: "center",
          color: "#002c41",
          fontSize: "3rem",
        }}
      >
        Contact
      </h4>
      <ContactForm></ContactForm>
      <Footer />
    </div>
  );
};

export default Contact;
