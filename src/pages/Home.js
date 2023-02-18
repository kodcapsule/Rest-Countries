import { useLoaderData } from "react-router-dom";
import axios from "axios";

import Countrycontainer from "../components/country/Countrycontainer";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Region from "../components/country/Region";

const Home = () => {
  const countries = useLoaderData();

  return (
    <>
      <div className="container top__container">
        <div className="search__input">
          <BsSearch className="icon" />
          <input type="search" placeholder="Search for a country..." />
        </div>
        <div className="dropdown__list">
          <span>Filter by Region</span>
          <BiChevronDown className="icon" />
        </div>

        <ul className="list__items hide">
          <Region region="Africa" />
          <Region region="America" />
          <Region region="Asia" />
          <Region region="Europe" />
          <Region region="Oceania" />
        </ul>
      </div>

      {countries && <Countrycontainer countries={countries} />}
    </>
  );
};

export default Home;

export const fetchCountriesData = async () => {
  const data = await axios.get("https://restcountries.com/v3.1/all");
  return data.data;
};
