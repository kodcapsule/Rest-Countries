import { BsSearch } from "react-icons/bs";

const Search = ({ handleClick, handleSearch }) => {
  return (
    <div className="search__input">
      <BsSearch className="icon" onClick={handleClick} />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
