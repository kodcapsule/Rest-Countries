import { useState } from "react";

import Countrycontainer from "../components/country/Countrycontainer";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Region from "../components/country/Region";

const Home = () => {
  const [hide_region, setHideRegion] = useState(false);
  const handleListDisplay = (e) => {
    setHideRegion(!hide_region);
    e.preventDefault();
    console.log(hide_region);
  };

  return (
    <>
      <div className="container top__container">
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
      <Countrycontainer />;
    </>
  );
};

export default Home;
