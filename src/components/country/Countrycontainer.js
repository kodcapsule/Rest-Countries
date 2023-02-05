import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import "./country.css";
import Country from "./Country";

const Countrycontainer = () => {
  const handlelistdisplay = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <main className="container">
      <div className="top__container">
        <div className="serach__input">
          <BsSearch className="icon" />
          <input type="searc" placeholder="Search for a country..." />
        </div>
        <div className="dropdown__list">
          <span>Filter by Region</span>
          <BiChevronDown className="icon" onClick={handlelistdisplay} />
        </div>

        <ul className="list__items hide">
          <li className="region">Africa</li>
          <li className="region">America</li>
          <li className="region">Asia</li>
          <li className="region">Europe</li>
          <li className="region">Oceania</li>
        </ul>
      </div>

      <div className="content">
        <Country />
      </div>
    </main>
  );
};

export default Countrycontainer;
