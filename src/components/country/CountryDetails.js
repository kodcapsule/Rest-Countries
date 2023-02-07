import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  return (
    <div className="country_details">
      <Link to="/" className="back">
        <IoIosArrowRoundBack className="icon" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default CountryDetails;
