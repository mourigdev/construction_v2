const CustomerSays = ({ bghouse, data }) => {
  return (
    <div>
      <div
        className={`${
          bghouse ? "bg-house py-20" : "bg-career py-20 lg:pb-20"
        } flex flex-col relative  items-center justify-center font-bold text-white bg-overlay`}
      >
        <h3 className="ml-0 md:ml-10 text-4xl leading-12 w-10/12 md:w-6/12 text-center mb-10">
        In their own words
        </h3>
        <div className="flex top-12-rem left-5 flex-col lg:flex-row lg:justify-between  p-4 mt-12 w-11/12 md:w-8/12 mx-auto rounded absolute">
          {data.map((d) => (
            <div className="customer-item bg-base-100 rounded lg:w-6/12 lg:mr-4 lg:shadow p-4 ">
              <div className="flex items-center">
                {/* <img
                  src={d.src}
                  alt="customers"
                  className="w-28 rounded-full"
                /> */}
                <div className="text">
                  <h3 className="text-green-700 ml-5">{d.Title}</h3>
                  <h5 className="font-normal text-green-700 ml-5 mt-1">
                    {d.subTitle}
                  </h5>
                </div>
              </div>
              <p className="text-xl text-black mt-4 font-light tracking-wide">
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CustomerSays.defaultProps = {
  bghouse: true,
};

export default CustomerSays;
