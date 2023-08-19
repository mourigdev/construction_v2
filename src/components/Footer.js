import { color } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = ({ mt, title, text }) => {
  return (
    <footer className={`mt-${mt}`}>
      <div className="bg-gradiant text-center">
        <h3 className="pt-12 text-white text-3xl font-bold mx-5	">

        {title}
        </h3>
        <p className="mt-5 md:text-2xl text-white md:font-light md:tracking-wider md:text-base-400 w-10/12 mx-auto">
        {text}
        </p>
        <ul className="mt-10 md:flex md:items-center md:justify-between pb-24 md:w-10/12 md:mx-auto">
          <li className="mb-16 md:mb-0">
            <Link
              className="text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/contact"}
            >
              CONTACT US
            </Link>
          </li>
          <li className="mb-16 md:mb-0">
            <Link
              className="text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/Investor"}
            >
              Investor Relations
            </Link>
          </li>
          <li className="mb-8 md:mb-0">
            <Link
              className=" text-white border-b-2 border-white transition duration-500 hover:border-2 p-2 transition"
              to={"/Careers"}
            >
               Careers
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-foot md:w-11/12 md:mx-auto md:mt-16 md:flex md:justify-between">
        <div className="w-40 md:w-4/12 mx-auto md:mx-0 my-7">
          <Link to={"/"}>
            <img
              src="assets/logo.png"
              className="w-full md:w-7/12"
              alt="Logo"
            />
          </Link>
        </div>
        <ul className="text-center md:w-4/12 md:text-left">
          <li className="mt-5">
            <Link
              to={"/properties"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Properties
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/Development"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Development
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/Construction"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Construction
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/Careers"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Career
            </Link>
          </li>
        </ul>
        <ul className="text-center md:w-4/12 md:text-left">
          <li className="mt-5">
            <Link
              to={"/InteriorDesign"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Interior Design
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to={"/contact"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Contact Us
            </Link>
          </li>{" "}
          <li className="mt-5">
            <Link
              to={"/Investor"}
              className="transition ease-in-out duration-500 text-green-700 font-semibold py-1 hover:border-b-2 hover:border-green-700 hover:border-solid"
            >
              Investor Relations
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-20 mb-5 text-black text-center">
        &copy; {new Date().getFullYear()} HERCULES GROUP . All rights reserved.
      </p>
      <p className="text-black text-center mt-10 pb-3">
      Developed By <a className="font-bold" href="http://mourigdev.netlify.com" target="_blank">Mourig Abdellah</a> 
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  mt: 28,
};

export default Footer;
