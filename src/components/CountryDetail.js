import axios from "axios";
import { useLoaderData } from "react-router-dom";

const CountryDetail = () => {
  const country = useLoaderData();
  return (
    <article className="country_detail">
      <img src={`${country.flags.png}`} alt="country flag" />
      <div className="country__detail_content">
        <h2>{country.name.common}</h2>
        <div className="content grid__container grid__cols-2">
          <p>
            Native Name : <span>{country.name.common}</span>
          </p>
          <p>
            Population : <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            Region : <span>{country.region}</span>
          </p>
          <p>
            Sub region : <span>{country.subregion}</span>
          </p>
          <p>
            Capital : <span>{country.capital}</span>
          </p>
          <p>
            Currency :{" "}
            <span>
              {Object.values(Object.values(country.currencies)[0])[0]}
            </span>
          </p>
          <p>
            Languages : <span>{Object.values(country.languages)[0]}</span>
          </p>
        </div>
        <div className="border__countries">
          <span> Border countries:</span>
          <ul>
            {country.borders &&
              country.borders.map((border) => {
                return <li key={border}>{border}</li>;
              })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CountryDetail;

// Loader function
export const fetchCountry = async ({ params }) => {
  const { country_name } = params;
  const data = await axios.get(
    `https://restcountries.com/v3.1/name/${country_name}`
  );

  // console.log(Object.values(Object.values(data.data[0].currencies)[0])[0]);
  return data.data[0];
};
