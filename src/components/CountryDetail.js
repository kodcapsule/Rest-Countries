import axios from "axios";
import { useLoaderData } from "react-router-dom";

const CountryDetail = () => {
  const country = useLoaderData();
  return (
    <article className="country_detail">
      <img src={`${country.data[0].flags.png}`} alt="country flag" />

      <div className="country__detail_content">
        <h2>{country.data[0].name.common}</h2>
        <div className="content grid__container grid__cols-2">
          <p>
            Population : <span>100,000,000,000,000</span>
          </p>
          <p>
            Region : <span>{country.data[0].region}</span>
          </p>
          <p>
            Capital : <span>{country.data[0].capital}</span>
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

export const fetchCountry = async ({ params }) => {
  const { country_name } = params;
  const data = await axios.get(
    `https://restcountries.com/v3.1/name/${country_name}`
  );
  return data;
};
