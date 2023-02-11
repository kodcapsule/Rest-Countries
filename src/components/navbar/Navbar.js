import { BsMoon } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="navbar__container">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button className="theme">
          <div className="light">
            <BsMoon />
            <span>Light mode</span>
          </div>
          <div className="dark">
            <RiMoonFill />
            <span>Dark mode</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
