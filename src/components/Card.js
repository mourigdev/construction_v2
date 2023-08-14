import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ src, Title, paragraph, action, slid , noHeight}) => {
  return (
    <div className="card  w-11/12  mx-auto bg-base-200 shadow rounded ">
      <figure>
        {noHeight ? <img src={src} alt={Title} /> : <img className="h-[250px] w-full" src={src} alt={Title} />  }
      </figure>
      <div className="card-body">
        <h2
          className={`card-title ${
            !slid ? "font-normal" : ""
          } tracking-wider text-2xl md:text-xl md:font-semibold text-green-700 ${
            slid ? "font-bold" : ""
          }`}
        >
          {Title}
        </h2>
        <p className="w-11/12 mt-2">{paragraph}</p>
        {action && (
          <div className="card-actions mt-8">
            <Link
              to="/properties"
              className="tracking-wider uppercase text-green-700 "
            >
              {action} <AiOutlineArrowRight className="inline-block mb-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
