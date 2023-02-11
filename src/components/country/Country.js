import "./country.css";

import { Link } from "react-router-dom";
const Country = () => {
  return (
    <article className="country">
      <div className="flag__container">
        <img src="https://flagcdn.com/gh.svg" alt="" />
      </div>
      <div className="country__content">
        <Link to="country/name">
          <h3>NAME</h3>
        </Link>
        <p>
          Population : <span>Population No</span>
        </p>
        <p>
          Region : <span>Region Name</span>
        </p>
        <p>
          Capital : <span>City</span>
        </p>
      </div>
    </article>
  );
};

export default Country;
