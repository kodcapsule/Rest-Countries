import { useState } from "react";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

import "./country.css";
import Country from "./Country";
import Region from "./Region";

const Countrycontainer = () => {
  const [hide_region, setHideRegion] = useState(false);
  const handleListDisplay = (e) => {
    setHideRegion(!hide_region);
    e.preventDefault();
    console.log(hide_region);
  };
  return (
    <main className="container">
      <div className="top__container">
        <div className="search__input">
          <BsSearch className="icon" />
          <input type="search" placeholder="Search for a country..." />
        </div>
        <div className="dropdown__list">
          <span>Filter by Region</span>
          <BiChevronDown className="icon" onClick={handleListDisplay} />
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
