import PrologisContext from "../context/PrologisContext";
import Filter from "../components/Filter";
import HeroProperties from "../components/HeroProperties";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Houses from "../components/Houses";
import Cars from "../components/Cars";
import Thriving from "../components/Thriving";
import { useContext } from "react";

const Properties = () => {
  const { filterproperties } = useContext(PrologisContext);

  return (
    <div>
      <HeroProperties />
      <div className="block lg:flex lg:w-11/12 lg:mx-auto">
        <Search />
        <Filter />
      </div>
      {filterproperties === "All" ? (
        <div className="md:flex justify-between w-11/12 mx-auto mb-20">
          <Houses />
          <Cars />
        </div>
      ) : (
        <div className="mb-20">
          {filterproperties === "Cars" ? (
            <Cars grid={true} />
          ) : (
            <Houses grid={true} />
          )}
        </div>
      )}

      <Thriving
        src="assets/constructers.jpg"
        Text="Hercules Group's Essentials simplifies business operations for our esteemed customers. With our user-friendly online platform, you can effortlessly oversee your properties, explore warehouse solutions, connect with our support team, and enjoy an array of convenient features, all in a single centralized hub."
        Title={"INTRODUCING HERCULES GROUP'S ESSENTIALS"}
      />
      <Footer />
    </div>
  );
};

export default Properties;
