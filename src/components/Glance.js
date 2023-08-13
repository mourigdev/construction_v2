const Glance = () => {
  const data = [
    // {
    //   id: 1,
    //   Title: "$208B",
    //   text: "Assets Under Management",
    // },
    // {
    //   id: 2,
    //   Title: "$5.2B",
    //   text: "Annual Net Operating Income",
    // },
    {
      id: 3,
      Title: "260,000",
      text: "Square Feet",
    },
    {
      id: 4,
      Title: "136",
      text: "Properties",
    },
    {
      id: 5,
      Title: "6",
      text: "Cities",
    },
    {
      id: 6,
      Title: "360",
      text: "Customers",
    },
    // {
    //   id: 7,
    //   Title: "96.0%",
    //   text: "USD Net Equity",
    // },
    // {
    //   id: 8,
    //   Title: "A / A3",
    //   text: "Credit Ratings*",
    // },
  ];
  return (
    <div className="py-12">
      <div className="w-11/12 md:w-10/12 text-center lg:w-8/12 mx-auto mt-28">
        <h3 className="uppercase mb-10 lg:text-3xl md:text-2xl text-2xl font-bold text-green-700 tracking-wider">
          Hercules Group AT A GLANCE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto">
          {data.map((d) => (
            <div key={d.id} className="bg-base-200 rounded-b-lg p-5">
              <h5 className="text-green-700 text-3xl font-bold mb-3">
                {d.Title}
              </h5>
              <p className="text-sm text-black mb-5">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glance;
