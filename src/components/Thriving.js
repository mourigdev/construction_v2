import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Thriving = ({ Title, Text, src, link }) => {
  return (
    <div className="bg-base-200 py-16 mb-16">
      <div className="mx-auto w-11/12 md:w-9/12 lg:7/12 md:flex md:items-center">
        <div className="md:w-6/12">
          <h2 className="text-3xl font-bold text-green-700  tracking-wide">
            {Title}
          </h2>
          <p className="py-7 text-xl font-light tracking-wider text-base-400 mr-5">
            {Text}
          </p>
          {link && (
            <Link className="text-green-700 hidden md:block" to={link}>
              LET US SHOW YOU HOW IT WORKS
              <AiOutlineArrowRight className="inline-block mb-1" />
            </Link>
          )}
        </div>
        <img src={src} alt="customer service" className="mb-5 md:w-6/12" />
        {link && (
          <Link className="text-green-700 md:hidden" to={link}>
            LET US SHOW YOU HOW IT WORKS
            <AiOutlineArrowRight className="inline-block mb-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Thriving;
