import { useState, useContext , useEffect } from "react";
import PrologisContext from "../context/PrologisContext";
import {
  FilterProperty,
  FilterPrice,
  FilterSize,
  FilterBrand,
} from "../context/PrologisActions";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import Supabase from "./Supabase";

const FilterItems = ({ id, title, items, normal }) => {
  const { dispatch } = useContext(PrologisContext);
  const [isOpen, setIsOpen] = useState(false);
  const [checkedState, setCheckedState] = useState([true, false, false, false]);
  const [size, setSize] = useState({ min: 1, max: "" });
  const [price, setPrice] = useState({ min: 1, max: "" });
  const [Error, setError] = useState("");
  const [brand, setBrand] = useState("");


  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the 'properties' table in your Supabase project
    const fetchData = async () => {
      const { data: houses_cars, error } = await Supabase.from('houses-cars').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setProperties(houses_cars);
        console.log(houses_cars)
      }
    };

    fetchData();
     // eslint-disable-next-line
    }, [Supabase]);


  const handleChecked = (item, position) => {
    const updateCheckedState = checkedState.map((i, index) =>
      index === position ? !i : false
    );

    setCheckedState(updateCheckedState);

    if (checkedState[position] === false) {
      const FilterResult = FilterProperty(item, properties);
      dispatch({
        type: "FILTER_PROPERTIES",
        payload: FilterResult,
      });
    }
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    if (size.min >= size.max) {
      setError("Min Should be Less Than Max");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const FilterResult = FilterSize(size, properties);
      dispatch({
        type: "FILTER_SIZE",
        payload: FilterResult,
      });
    }
  };

  const handlChange = (e, i) => {
    if (i === "min") {
      setSize({ max: size.max, min: e.target.value });
    } else {
      setSize({ min: size.min, max: +e.target.value });
    }
  };

  const handlPriceSubmit = (e) => {
    e.preventDefault();

    if (price.min >= price.max) {
      setError("Min Should be Less Than Max");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const FilterResult = FilterPrice(price, properties);
      console.log(FilterResult);
      dispatch({
        type: "FILTER_PRICE",
        payload: FilterResult,
      });
    }
  };

  const handlPriceChange = (e, i) => {
    if (i === "min") {
      setPrice({ max: price.max, min: e.target.value });
    } else {
      setPrice({ min: price.min, max: +e.target.value });
    }
  };

  const handlBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handlBrandSubmit = (e) => {
    e.preventDefault();

    const carsData = properties.filter((d) => d.type === "Cars");

    const FilterResult = FilterBrand(brand, carsData);
    dispatch({
      type: "FILTER_BRAND",
      payload: FilterResult,
    });
  };

  return (
    <div className="w-full bg-white block">
      <div className="flex justify-between mb-3">
        {title}
        {isOpen ? (
          <AiOutlineArrowUp
            onClick={() => setIsOpen(false)}
            className="ml-2 text-xl text-green-700"
          />
        ) : (
          <AiOutlineArrowDown
            onClick={() => setIsOpen(true)}
            className="ml-2 text-xl text-green-700"
          />
        )}
      </div>
      {isOpen && normal === true && (
        <ul
          tabIndex={id}
          className="w-full  mt-6 menu p-2 shadow bg-base-100 border-2 ml-0 text-black"
        >
          <li tabIndex={id}>
            {items.map((i, index) => (
              <div key={i} className="form-control">
                <label className="cursor-pointer label">
                  <input
                    checked={checkedState[index]}
                    onChange={() => handleChecked(i, index)}
                    type="checkbox"
                    className="checkbox checkbox-accent me-6"
                  />
                  <span className="label-text">{i}</span>
                </label>
              </div>
            ))}
          </li>
        </ul>
      )}

      {isOpen && !normal && (
        <form
          onSubmit={handlSubmit}
          className="w-11/12 flex items-center mt-6 shadow bg-base-100 border-2"
        >
          {items.map((i) => (
            <div key={i} className="form-control w-4/12 p-4">
              <label htmlFor={`${i}`} className="pb-2">
                {i}
              </label>
              <input
                type="number"
                id={`${i}`}
                min={1}
                required
                onChange={(e) => handlChange(e, i)}
                value={i === "min" ? size.min : size.max}
                placeholder={`${i}`}
                className="p-2 rounded shadow border-1 outline-0 border-green-700 me-6 w-full lg:w-40"
              />
            </div>
          ))}
          <button type="submit" className="btn mt-5">
            Filter
          </button>
        </form>
      )}

      {isOpen && normal === "price" && (
        <div className=" mt-6 shadow bg-base-100 border-2 w-11/12">
          <form onSubmit={handlPriceSubmit} className="flex items-center">
            {items.map((i) => (
              <div key={i} className="form-control w-4/12 p-4">
                <label htmlFor={`${i}`} className="pb-2">
                  {i}
                </label>
                <input
                  type="number"
                  id={`${i}`}
                  min={1}
                  required
                  onChange={(e) => handlPriceChange(e, i)}
                  value={i === "min" ? price.min : price.max}
                  placeholder={`${i}`}
                  className="p-2 rounded shadow border-1 outline-0 border-green-700 me-6 w-full lg:w-40"
                />
              </div>
            ))}
            <button type="submit" className="btn lg:ml-6 mt-6 ">
              Filter
            </button>
          </form>
          <div className="block p-4 text-red-600">{Error ? Error : ""}</div>
        </div>
      )}

      {isOpen && normal === "brand" && (
        <form
          onSubmit={handlBrandSubmit}
          className="w-11/12 flex items-center mt-6 shadow bg-base-100 border-2"
        >
          {!items && (
            <div className="form-control w-8/12 p-4 pr-0">
              <label htmlFor="brand name" className="pb-2">
                Brand Name
              </label>
              <input
                type="text"
                id="brand name"
                min={1}
                required
                onChange={handlBrandChange}
                value={brand}
                placeholder="brand name"
                className="input border-r-0 w-full rounded-r-none outline-0 border-green-700 "
              />
            </div>
          )}
          <button
            className="btn btn-square bg-green-700 mt-7 rounded-l-none"
            type="submit"
          >
            <AiOutlineSearch className="font-semibold text-xl text-white" />
          </button>
        </form>
      )}
    </div>
  );
};

export default FilterItems;
