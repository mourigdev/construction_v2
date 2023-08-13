import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext , useEffect } from "react";
import PrologisContext from "../context/PrologisContext";
import { SearchProperties } from "../context/PrologisActions";
import Supabase from "../components/Supabase";

const Search = () => {
  const { dispatch } = useContext(PrologisContext);
  const [text, setText] = useState("");

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the 'properties' table in your Supabase project
    const fetchData = async () => {
      const { data: houses_cars, error } = await Supabase.from('houses-cars').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setProperties(houses_cars);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [Supabase]);


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = SearchProperties(text, properties);
    dispatch({
      type: "SEARCH_PROPERTIES",
      payload: searchResult,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-5 w-full md:w-4/12 md:mr-5 relative"
    >
      <input
        type="text"
        className="mt-5 py-3 pl-3 w-11/12 md:w-full rounded border-1 outline-0 border-green-700 "
        placeholder="Search by City"
        onChange={handleChange}
        value={text}
      />
      <button type="submit">
        <AiOutlineSearch className="font-semibold text-3xl text-green-700 cursor-pointer absolute" />
      </button>
      <div className="flex md:hidden mt-5">
        <a href="#houses" className="btn">
          Houses
        </a>
        <a href="#cars" className="ml-5 btn">
          Cars
        </a>
      </div>
    </form>
  );
};

export default Search;
