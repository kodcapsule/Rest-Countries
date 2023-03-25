import React from "react";
import { Link } from "react-router-dom";

const CountryError = () => {
  return (
    <div className="container">
      <h1> No country found| 404 Error</h1>
      <h3>
        {" "}
        Go to <Link to="/">Home</Link> to search for a country
      </h3>
    </div>
  );
};

export default CountryError;
