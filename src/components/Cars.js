import PrologisContext from "../context/PrologisContext";
import { useContext } from "react";
import PropertiesCard from "./PropertiesCard";

const Cars = ({ grid }) => {
  const { properties } = useContext(PrologisContext);

  return (
    <div
      id="cars"
      className={`mt-10 ${grid ? "md:w-11/12 mx-auto" : "md:w-5/12"} `}
    >
      {!grid && (
        <div className="mt-5 w-11/12 ml-4 lg:ml-0 mx-auto btn">Cars</div>
      )}

      {properties.filter((d) => d.type === "Cars").length === 0 ? (
        <div className="w-11/12 mx-auto mt-5 text-xl text-base-400 tracking-wider">
          No Car Found In This Area
        </div>
      ) : (
        <div
          className={`grid ${
            grid
              ? "md:w-full gird-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "md:w-11/12 grid-cols-1 cars"
          } `}
        >
          {properties
            .filter((d) => d.type === "Cars")
            .map((d) => (
              <PropertiesCard
                grid={grid}
                key={d.id}
                src={d.src}
                description={d.description}
                title={d.title}
                city={d.city}
                address={d.address}
                type={d.type}
                brand={d.brand}
                link={d.link}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
