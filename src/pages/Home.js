import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Country from "../components/country/Country";

import Search from "../components/Search";
import FilterRegion from "../components/FilterRegion";
import Region from "../components/country/Region";

const Home = () => {
  const countries = useLoaderData();
  const [countryName, setCountryName] = useState(countries);
  const [toggle, setToggle] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
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
    const country = countryName.filter((country) => {
      return country.name.common.toLowerCase().includes("fr");
    });
    setCountryName(country);
  };

  const handleHide = (e) => {
    setToggle(!toggle);
  };

  const searchByRegion = (region) => {
    setCountryName(
      countryName.filter((country) => {
        return country.region.toLowerCase().includes("Africa");
      })
    );

    console.log(countryName);
  };

  return (
    <>
      <div className="container top__container">
        <Search handleClick={handleClick} handleSearch={handleSearch} />
        <div className="filter__region">
          <FilterRegion handleHide={handleHide} />
          {toggle && (
            <div className="region_container  ">
              <Region region="Africa" />
              <Region region="Americas" />
              <Region region="Asia" />
              <Region region="Europe" />
              <Region region="Oceania" />
            </div>
          )}
        </div>
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
