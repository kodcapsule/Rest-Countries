import { BiChevronDown } from "react-icons/bi";

const FilterRegion = ({ handleHide }) => {
  return (
    <div className="dropdown__list">
      <span>Filter by Region</span>
      <BiChevronDown className="icon" onClick={handleHide} />
    </div>
  );
};

export default FilterRegion;
