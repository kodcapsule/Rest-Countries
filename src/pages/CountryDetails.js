import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import "../components/country/country.css";
const CountryDetails = () => {
  return (
    <main className="container">
      <div className=" country__details">
        <Link to="/" className="back">
          <IoIosArrowRoundBack className="icon" />
          <span>Back</span>
        </Link>
      </div>

      <article className="country_detail">
        <div className="flag__container">
          <img src="https://flagcdn.com/gh.svg" alt="" />
        </div>
        <div className="country__detail_content">
          <h2>ghana</h2>
          <div className="content grid__container grid__cols-2">
            <p>
              Population : <span>Population No</span>
            </p>
            <p>
              Region : <span>Region Name</span>
            </p>
            <p>
              Capital : <span>City</span>
            </p>
            <p>
              Capital : <span>City</span>
            </p>
            <p>
              Capital : <span>City</span>
            </p>
            <p>
              Capital : <span>City</span>
            </p>
            <p>
              Capital : <span>City</span>
            </p>
          </div>
          <div className="border__countries">
            <p>
              Border countries : <span>City</span>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default CountryDetails;
