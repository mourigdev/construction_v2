import { createContext, useReducer , useEffect , useState } from "react";
import PrologisReducers from "./PrologisReducers";
import Supabase from "../components/Supabase";

const PrologisContext = createContext();

export const PrologisProvider = ({ children }) => {

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

  const initialState = {
    properties: properties,
    filterproperties: "All",
  };
  

  const [state, dispatch] = useReducer(PrologisReducers, initialState);

  return (
    <PrologisContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PrologisContext.Provider>
  );
};

export default PrologisContext;
