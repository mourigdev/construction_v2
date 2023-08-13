import React from "react";

const Fivethrait = ({ header, src }) => {
  return (
    <div className="bg-blue-400 mb-20 w-full md:flex ">
      <div className="md:w-6/12">
        <div className="md:p-0 lg:py-36 md:py-8 mx-auto lg:w-9/12 md:w-11/12 p-12">
          <h2 className="uppercase lg:text-3xl md:text-2xl text-2xl font-bold text-white tracking-wider ">
            {header}
          </h2>
          <ol className="list-decimal md:mt-6 lg:mt-10 ml-5 lg:font-bold   text-white text-xl tracking-wide">
            <li className="mt-2">Client-centric excellence: Exceeding expectations, delivering value.</li>
            <li className="mt-2">Entrepreneurial mindset: Innovate, risk, improve.</li>
            <li className="mt-2"> Excellence and integrity: Ethical, respectful, high standards.</li>
            <li className="mt-2">Collaboration and teamwork: Together, diverse, shared ideas.</li>
            <li className="mt-2">Growth-oriented mindset: Embrace challenges, continuous learning.</li>
          </ol>
          <p className="py-7 lg:text-xl md:text-sm font-light tracking-wider text-white mr-5">
          Sound like you? Join the Hercules Group Company and make a significant impact.
          </p>
        </div>
      </div>
      <div className="md:w-6/12">
        <img className="w-full" src={src} alt={header} />
      </div>
    </div>
  );
};

export default Fivethrait;
