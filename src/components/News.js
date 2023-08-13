import React from "react";

const News = ({ data }) => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <h2 className="uppercase mb-10 lg:text-3xl md:text-2xl text-2xl font-bold text-green-700 tracking-wider">
        LATEST NEWS
      </h2>
      <div class="grid lg:grid-rows-2 lg:grid-flow-col gap-4">
        {data.map((d) => (
          <div
            class={`${
              d.src ? "row-span-2" : "row-span-1"
            } bg-base-200 rounded-b-lg`}
          >
            {d.src && <img src={d.src} alt={d.Title} />}
            <h3 className="uppercase text-xl p-6 font-bold text-green-700 tracking-wider">
              {d.Title}
            </h3>
            <p className="p-6 pt-0" style={{color:"black"}}>{d.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
