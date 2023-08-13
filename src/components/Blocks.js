const Blocks = () => {
  const data = [
    {
      id: 1,
      subtitle: "Refining Morocco's skyline, one development at a time.",
      title: "Development",
      image: "development",
    },
    {
      id: 2,
      subtitle: "Your go-to provider for end-to-end construction solutions, ensuring seamless project execution.",
      title: "Construction",
      image: "essentials-platform",
    },
    {
      id: 3,
      subtitle: "Bringing a touch of elegance and simplicity to your spaces with our innovative interior design solutions.",
      title: "Interior Design",
      image: "real-estate",
    },
    {
      id: 4,
      subtitle: "Navigating your investments towards sustainable growth and long-term profitability.",
      title: "Management",
      image: "strategic",
    },
  ];
  return (
    <div className="bg-base-200 w-full mt-20">
      <div className="w-11/12 md:flex md:flex-col lg:flex-row md:items-center md:w-9/12 lg:7/12 mx-auto py-16">
        <div className="md:w-10/12 md:mr-10">
          <h2 className="uppercase font-bold text-3xl tracking-wide text-green-700">
          LAYING THE FOUNDATIONS OF YOUR SUCCESS
          </h2>
          <p className="py-7 text-xl font-light tracking-wider text-base-400">
          At Hercules Group, we believe in doing things differently. We understand that your success lies in the details, which is why we listen and adapt to your needs.
          </p>
          <p className="text-xl font-light tracking-wider text-base-400">
          See how we can help you stay ahead of what's next.
          </p>
        </div>
        <div className="grid gap-4 mt-7 grid-cols-2">
          {data.map((d) => (
            <div
              key={d.id}
              className={` bg-${d.image} span-${d.id} flex text-center cursor-pointer items-center justify-center hover:justify-between h-52 font-bold text-white bg-overlay no-overlay`}
            >
              <p className="ml-10 text-center">{d.title}</p>
              <p className="w-3/12 opacity-0 text-small font-normal">
                {d.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
