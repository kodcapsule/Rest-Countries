import { BsMoon } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../../App";

import "./navbar.css";

const Navbar = () => {
  const themebtn = useContext(ThemeContext);
  return (
    <nav className="container navbar">
      <div className="navbar__container">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button className="theme" onClick={themebtn.themeToggle}>
          {themebtn.theme === "light" ? (
            <div className="light">
              <BsMoon />
              <span>Light mode</span>
            </div>
          ) : (
            <div className="dark">
              <RiMoonFill />
              <span>Dark mode</span>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
