const SectionTitle = ({title, description}) => {
  return (
    <div className="mb-[80px]">
      <h3 className="text-[#55E6A5] text-md mb-[16px]">{title}</h3>
      <h2 className="h">
        {description}
      </h2>
    </div>
  );
};

export default SectionTitle;
