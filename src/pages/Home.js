import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Country from "../components/country/Country";

import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Region from "../components/country/Region";

const Home = () => {
  const countries = useLoaderData();
  const [countryName, setCountryName] = useState(countries);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value) {
      setCountryName(
        countryName.filter((country) => {
          return country.name.common.toLowerCase().includes(e.target.value);
        })
      );
    } else if (e.target.value === "") setCountryName(countries);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCountryName(
      countryName.filter((country) => {
        return country.name.common.toLowerCase().includes(e.target.value);
      })
    );

    console.log(countryName);
  };

  return (
    <>
      <div className="container top__container">
        <div className="search__input">
          <BsSearch className="icon" onClick={handleClick} />
          <input
            type="search"
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
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
      <main className="container">
        {countries && (
          <div className="main__content grid__container grid__cols-4">
            {countryName.map((country) => {
              return (
                <Country countryData={country} key={country.name.common} />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;

// Loader function
export const fetchCountriesData = async () => {
  const data = await axios.get("https://restcountries.com/v3.1/all");
  return data.data;
};
