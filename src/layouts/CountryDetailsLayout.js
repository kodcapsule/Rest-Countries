import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
const CountryDetailsLayout = () => {
  return (
    <main className="container">
      <div className=" country__content">
        <Link to="/" className="back">
          <IoIosArrowRoundBack className="icon" />
          <span>Back</span>
        </Link>
      </div>

      <Outlet />
    </main>
  );
};

export default CountryDetailsLayout;
