import "./country.css";

import { Link } from "react-router-dom";
const Country = ({ countryData }) => {
  // console.log(countryData);
  return (
    <article className="country">
      <div className="flag__container">
        {/* <img src="https://flagcdn.com/w320/bw.png" alt="" /> */}
        <img src={`${countryData.flags.png}`} alt="" />
      </div>
      <div className="country__content">
        <Link to="country/name">
          <h3>{countryData.name.common}</h3>
        </Link>
        <p>
          Population : <span>{countryData.population}</span>
        </p>
        <p>
          Region : <span>{countryData.region}</span>
        </p>
        <p>
          Capital : <span>{countryData.capital}</span>
        </p>
      </div>
    </article>
  );
};

export default Country;
