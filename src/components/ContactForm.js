import React, { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);

    // Send jsonData to your server here using fetch or axios
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="contactform">
      <div className="w-8/12 lg:w-6/12 mx-auto lg:py-5 lg:px-10">
        <p>
          <span>T:</span> 076-5428436
        </p>
        <p>
          <span>E:</span> info@herculesgroup.ma
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={data.name}
            onChange={handleChange}
            className="block my-5 p-2 w-full border outline-0"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={data.email}
            onChange={handleChange}
            className="block my-5 p-2 w-full border outline-0"
          />
          <textarea
            name="message"
            placeholder="message"
            rows={7}
            value={data.message}
            onChange={handleChange}
            className="block my-5 p-2 w-full border outline-0"
          />
          <button
            className="btn btn-square bg-green-700 text-white"
            style={{ width: "100%" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
