import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const CountryDetail = ({ countryData }) => {
  const country = useLoaderData();
  console.log(country);
  return (
    <article className="country_detail">
      <img src="https://flagcdn.com/gh.svg" alt="country flag" />

      <div className="country__detail_content">
        <h2>Ghana</h2>
        <div className="content grid__container grid__cols-2">
          <p>
            Population : <span>100,000,000,000,000</span>
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
            Capital : <span>100,000,000,000</span>
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
          <span> Border countries:</span>

          <ul>
            <li>Togo</li>
            <li>Togo</li>
            <li>Togo</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CountryDetail;

export const fetchCountry = async () => {
  const data = await axios.get("https://restcountries.com/v3.1/name/ghana");
  return data.data;
};
