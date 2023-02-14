import { useState, useEffect } from "react";
import axios from "axios";

import Countrycontainer from "../components/country/Countrycontainer";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Region from "../components/country/Region";

const Home = () => {
  const [countries, setCountries] = useState({});

  // const handleListDisplay = (e) => {
  //   setHideRegion(!hide_region);
  //   e.preventDefault();
  //   console.log(hide_region);
  // };

  useEffect(() => {
    getCountriesData();
  }, []);

  const getCountriesData = async () => {
    try {
      const data = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data.data);
      // console.log(countries);
    } catch (error) {
      console.log(error.message);
    }
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
          <BiChevronDown className="icon" onClick={getCountriesData} />
        </div>

        <ul className="list__items hide">
          <Region region="Africa" />
          <Region region="America" />
          <Region region="Asia" />
          <Region region="Europe" />
          <Region region="Oceania" />
        </ul>
      </div>
      <Countrycontainer countries={countries} />;
    </>
  );
};

export default Home;
