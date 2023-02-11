import { BsMoon } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="navbar__container">
        <h1>Where in the world?</h1>
        <p>
          <BsMoon />
          <span>Dark mode</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
