import PrologisContext from "../context/PrologisContext";
import { useContext , useEffect } from "react";
import PropertiesCard from "./PropertiesCard";
import Supabase from "./Supabase";
import { FilterProperty } from "../context/PrologisActions"


const Houses = ({ grid }) => {
  const { properties } = useContext(PrologisContext);
  const { dispatch } = useContext(PrologisContext);

  useEffect(() => {
    // Fetch data from the 'properties' table in your Supabase project
    const fetchData = async () => {
      const { data: houses_cars, error } = await Supabase.from('houses-cars').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        const FilterResult = FilterProperty("All", houses_cars);
        dispatch({
          type: "FILTER_PROPERTIES",
          payload: FilterResult,
        });
      }
    };

    fetchData();

     // eslint-disable-next-line
    }, []);


  return (
    <div
      id="houses"
      className={`mt-10 ${grid ? "md:w-11/12 mx-auto" : "md:w-6/12"} `}
    >
      {!grid && (
        <div className="mt-5 w-11/12 ml-4 lg:ml-0 mx-auto btn">Houses</div>
      )}
      {properties.filter((d) => d.type !== "Cars").length === 0 ? (
        <div className="w-11/12 mx-auto mt-5 text-xl text-base-400 tracking-wider">
          No Property Found In This Area
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
            .filter((d) => d.type !== "Cars")
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

export default Houses;
