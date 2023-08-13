const Corporate = ({margin, section, title,text}) =>{
    return ( 
        <div className={margin ? "bg-white mt-28" : "bg-white"}>
        <div className="w-11/12 md:flex md:items-center md:justify-between mx-auto py-10 md:py-0 md:ml-auto">
          <div className="md:w-6/12 mr-6">
            <h5 className="text-green-700 font-bold">
              {section}
            </h5>
            <h3 className="uppercase my-5 lg:text-2xl md:text-xl text-xl font-bold text-green-700 tracking-wider">
            {title.toUpperCase()}
            </h3>
            <p>
            {text}
            </p>
          </div>
          <img
            src="assets/research2.jpg"
            alt="research"
            className="md:w-6/12 mt-8 md:mt-0"
          />
        </div>
      </div>
     );
}

export default Corporate;
