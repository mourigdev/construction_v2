import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import FilterItems from "./FilterItems";

const Filter = () => {
  const data = [
    {
      id: 1,
      title: "Property Type",
      items: ["All", "Building", "Land To Sale", "Cars"],
      normal: true,
    },
    {
      id: 2,
      title: "Building Size",
      items: ["min", "max"],
      normal: false,
    },
    {
      id: 3,
      title: "Price",
      items: ["min", "max"],
      normal: "price",
    },
    {
      id: 4,
      title: "Car Brand",
      normal: "brand",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tracking-wider py-3 md:w-8/12 md:mx-auto pl-5 md:pl-0 text-white font-bold">
      <div className=" block mt-5">
        <label
          tabIndex={0}
          className="cursor-pointer text-black flex items-center "
        >
          Filter
          {isOpen ? (
            <AiOutlineMinus
              onClick={() => setIsOpen(false)}
              className="ml-2 text-xl text-green-700"
            />
          ) : (
            <AiOutlinePlus
              onClick={() => setIsOpen(true)}
              className="ml-2 text-xl text-green-700"
            />
          )}
        </label>
        {isOpen && (
          <ul
            tabIndex={0}
            className="w-11/12 md:w-8/12 mt-6 menu p-2 shadow bg-base-100 border-2 text-black"
          >
            <li>
              {data.map((d) => (
                <FilterItems
                  key={d.id}
                  id={d.id}
                  title={d.title}
                  items={d.items}
                  normal={d.normal}
                />
              ))}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
