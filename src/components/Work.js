import React from "react";

const Work = ({ header, text, src }) => {
  return (
    <div className="bg-base-200 w-full mt-20">
      <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto py-16 md:flex md:items-center">
        <div className="md:w-6/12">
          <h2 className="uppercase text-3xl font-bold text-green-700  tracking-wide">
            {header}
          </h2>
          <p className="py-7 lg:w-8/12 text-xl font-light tracking-wider text-base-400 mr-5">
            {text}
          </p>
        </div>
        <div className="md:w-6/12">
          <img className="w-full" src={src} alt={header} />
        </div>
      </div>
    </div>
  );
};

export default Work;
