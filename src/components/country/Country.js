import "./country.css";
import { Link } from "react-router-dom";

const Country = ({ countryData }) => {
  return (
    <>
      <article className="country">
        <div className="flag__container">
          <img src={`${countryData.flags.png}`} alt="" />
        </div>
        <div className="country__content">
          <Link to={`${countryData.name.common}`}>
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
