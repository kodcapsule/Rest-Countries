import React from "react";

const Region = ({ region, search }) => {
  return (
    <li className="region" onClick={search}>
      {region}
    </li>
  );
};

export default Region;
