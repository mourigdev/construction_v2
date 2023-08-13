import { Link } from "react-router-dom";

const Properties = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-auto w-11/12  py-12">
        <h2 className="text-3xl font-bold w-11/12 leading-large">
          PROPERTIES IN YOUR AREA
        </h2>
        <p className="leading-7 mb-7">
          We weren't able to load any properties. Try our advanced search
          instead.
        </p>
        <Link className="text-green-700" to={"/"}>
          VIEW OUR PROPERTIES
        </Link>
      </div>
    </div>
  );
};

export default Properties;
