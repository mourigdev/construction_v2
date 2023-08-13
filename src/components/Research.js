import React from "react";

const Research = () => {
  return (
    <div>
      <div className="bg-base-200 ">
        <div className="w-11/12 md:w-10/12 py-20 lg:w-8/12 mx-auto mt-28">
          <h2 className="uppercase mb-4 lg:text-3xl md:text-2xl text-2xl font-bold text-green-700 tracking-wider">
          Corporate Responsibility
          </h2>
          <p>We believe in fair and transparent dealings.</p>
          <div className="md:flex md:justify-between md:items-center mt-8">
            <img
              src="assets/research1.jpg"
              className="md:w-6/12"
              alt="research"
            />
            <div className="bg-white border-t-2 border-green-700 w-full mt-8 md:mt-0 p-8 md:w-6/12 md:ml-10">
              {/* <h5 className="text-green-700 font-bold">NEARSHORING PAPER</h5>
              <p className="text-sm mt-3">June 2023</p> */}
              <h3 className="uppercase my-5 lg:text-2xl md:text-xl text-xl font-bold text-green-700 tracking-wider">
              {"we are committed".toUpperCase()}
              </h3>
              <p>
              At Hercules Group, we are committed to ethical business practices, environmental sustainability, and social responsibility. Our projects are designed to minimize environmental impact and enhance the communities we operate in. We believe in fair and transparent dealings with our stakeholders and are committed to establishing a positive corporate culture.</p>
              {/* <p className="mt-3 text-green-700 font-bold">Read More</p> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Corporate
      section="OUR CORPORATE RESPONSIBILITY"
      title="WE'VE BUILT A STRONG FOUNDATION FOR SOUND CORPORATE GOVERNANCE"
      text="At Prologis, our Board of Directors sets high standards for our
            employees, officers, and directors, recognizing good
            environmental, social, and governance (ESG) practices as the most
            essential elements of our business philosophy." /> */}
    </div>
  );
};

export default Research;
