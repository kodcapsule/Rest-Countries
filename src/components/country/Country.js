import "./country.css";
import CountryDetail from "../CountryDetail";

import { Link } from "react-router-dom";
import { useState } from "react";

const Country = ({ countryData }) => {
  const [country, setCountry] = useState(countryData);
  const handleCountryClick = () => {
    <CountryDetail countryData={country} />;
    console.log(country);
  };

  return (
    <>
      <article className="country">
        <div className="flag__container">
          <img src={`${countryData.flags.png}`} alt="" />
        </div>
        <div className="country__content">
          <Link to="country" onClick={handleCountryClick}>
            <h3>{countryData.name.common}</h3>
          </Link>
          <p>
            Population : <span>{countryData.population.toLocaleString()}</span>
          </p>
          <p>
            Region : <span>{countryData.region}</span>
          </p>
          <p>
            Capital : <span>{countryData.capital}</span>
          </p>
        </div>
      </article>
    </>
  );
};

export default Country;
