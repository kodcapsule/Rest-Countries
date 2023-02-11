import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="navbar__container">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <p>
          <BsMoon />
          <span>Dark mode</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
