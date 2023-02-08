import "./country.css";

import { Link } from "react-router-dom";
const Country = () => {
  return (
    <Link to="country">
      <article className="country">
        <div className="flag__container">
          <img src="https://flagcdn.com/gh.svg" alt="" />
        </div>
        <div className="country__details">
          <h4>NAME</h4>
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
    </Link>
  );
};

export default Country;
