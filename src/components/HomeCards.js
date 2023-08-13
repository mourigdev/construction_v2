import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import PrologisContext from "../context/PrologisContext";
import { SearchProperties } from "../context/PrologisActions";
import { Propertiesdata } from "./Propertiesdata";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(PrologisContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const properties = SearchProperties(text, Propertiesdata);
    dispatch({
      type: "SEARCH_PROPERTIES",
      payload: properties,
    });
    navigate("/properties");
  };

  const data = [
    {
      id: 1,
      src: "assets/broadmoor.jpg",
      Title: "A Complete Service Spectrum",
      paragraph:
        "At Hercules Group, we are your comprehensive hub for all your construction, development, and real estate needs. We take immense pride in being a one-stop solution, orchestrating every phase of the process. Whether it's conceptualising a project, bringing it to life through meticulous construction, managing the complexities of real estate, or ensuring an impeccable sale, Hercules Group is there with you every step of the way.",
      action: "search for properties",
    },
    {
      id: 2,
      src: "assets/automation.jpg",
      Title: "Unmatched Quality and Profound Experience",
      paragraph:
        "Our team is an ensemble of highly experienced and diverse professionals, bringing together decades of experience and a wide range of skills. With our extensive 30+ years in construction, our fresh architectural insights, and our profound expertise in properties, Hercules Group guarantees exceptional quality and service. We breathe life into projects with a perfect blend of traditional craftsmanship and modern innovation, delivering results that not only meet but exceed expectations.",
      action: "search for properties",
    },
    {
      id: 3,
      src: "assets/GB22_Logo.jpg",
      Title: "Your Vision, Our Mission",
      paragraph:
        "At Hercules Group, our clients are at the heart of everything we do. We listen, we understand, and we deliver. From the very first vision to the final execution, we are committed to turning your dreams into reality. We provide a bespoke service, tailoring our solutions to your unique needs and ensuring that you remain involved and informed every step of the way. With Hercules Group, you're not just getting a service provider, but a partner dedicated to making your vision come to life.",
      action: "search for properties",
    },
  ];
  return (
    <>
      <div className="md:w-11/12 lg:w-8/12 mx-auto mt-40 grid gap-10 grid-cols-1 md:grid-cols-3 md:gap-2 ">
        {data.map((d) => (
          <Card
            key={d.id}
            Title={d.Title}
            src={d.src}
            paragraph={d.paragraph}
            action={d.action}
          />
        ))}
      </div>
      <div className="rounded bg-base-200 mx-auto w-11/12 card mt-20 md:w-9/12 lg:7/12 mx-auto">
        <div className="card-body">
          <h2 className="card-title text-green-700">
            AVAILABLE PROPERTY SEARCH
          </h2>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text ">
                Search by City
              </span>
            </label>
            <form onSubmit={handleSubmit} className="flex mt-4 md:w-full">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered border-r-0 w-full  md:w-11/12 rounded-r-none "
              />
              <button
                className="btn btn-square bg-green-700 rounded-l-none"
                type="submit"
              >
                <AiOutlineSearch className="font-semibold text-3xl text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
