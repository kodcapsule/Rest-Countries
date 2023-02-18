import CountryDetail from "../components/CountryDetail";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  return (
    <main className="container">
      <div className=" country__content">
        <Link to="/" className="back">
          <IoIosArrowRoundBack className="icon" />
          <span>Back</span>
        </Link>
      </div>
      <CountryDetail />
    </main>
  );
};

export default CountryDetails;
