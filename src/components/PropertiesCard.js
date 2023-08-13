import { AiOutlineArrowRight } from "react-icons/ai";

const PropertiesCard = ({
  grid,
  src,
  description,
  title,
  city,
  address,
  type,
  brand,
  link,
}) => {
  return (
    <div
      className={` ${
        grid && "lg:h-52"
      } card lg:card-side lg:rounded-t-none mt-10 w-11/12 mx-auto bg-base-200 shadow rounded`}
    >
      <figure className="w-full lg:h-full lg:w-6/12">
        <img src={src} alt={title} className="h-full w-full" />
      </figure>
      <div className="card-body p-4 gap-0 w-full lg:w-6/12">
        <h2
          className={`card-title tracking-wider text-xl lg:text-base md:font-semibold text-green-700 font-semibold`}
        >
          {title}
        </h2>
        <p className="w-11/12 mt-1 md:text-sm">{address}</p>
        <p className="font-bold w-11/12 mt-3">{type}</p>
        <p className="w-11/12 mt-1 md:text-sm">{description}</p>
        <p className="text-sm">{brand ? brand : city}</p>

        <div className="card-actions mt-3">
          <a href={link} className="tracking-wider uppercase text-green-700 ">
            Learn More <AiOutlineArrowRight className="inline-block mb-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
