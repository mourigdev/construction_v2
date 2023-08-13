import WorkWithItem from "./WorkWithItem";

const WorkWith = ({data,title}) => {

  return (
    <div className="bg-base-200 text-center py-12">
      <h3 className="text-green-700 font-bold tracking-wider mb-10">
        {title}
      </h3>
      <div className={data.length >6 ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto` 
                      : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-11/12 mx-auto`}>
      
        {data.map((d) => (
          <WorkWithItem
            key={d.id}
            Title={d.Title}
            text={d.text}
            link={d.link}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkWith;
