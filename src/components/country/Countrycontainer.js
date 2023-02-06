import { useState } from "react";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import "./country.css";
import Country from "./Country";
import Region from "./Region";

const Countrycontainer = () => {
  const [hideregion, sethHideregion] = useState(false);
  const handlelistdisplay = (e) => {
    sethHideregion(!hideregion);
    e.preventDefault();
    console.log(hideregion);
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
          <Region region="Africa" />
          <Region region="America" />
          <Region region="Asia" />
          <Region region="Europe" />
          <Region region="Oceania" />
        </ul>
      </div>

      <div className="main__content grid__container grid__cols-4">
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </main>
  );
};

export default Countrycontainer;
