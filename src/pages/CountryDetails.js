import { Outlet } from "react-router-dom";
import CountryDetails from "../components/country/CountryDetails";

const Country_Details = () => {
  return (
    <main>
      <div className="container">
        <CountryDetails />
      </div>
      <Outlet />
    </main>
  );
};

export default Country_Details;
