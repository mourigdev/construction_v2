const WorkWithItem = ({ Title, text, link }) => {
  return (
    <div className="bg-white rounded p-5">
      <h5 className="text-green-700 mb-3">{Title}</h5>
      <p className="text-sm text-black mb-5">{text}</p>
      {link && (
        <a className="text-green-700 tracking-wider" href={link}>
          LEARN MORE
        </a>
      )}
    </div>
  );
};

export default WorkWithItem;
