import React from "react";
import City from "./City";

const CitiesList = ({ cities }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center bd-highlight">
      {cities.map(item => {
        return <City key={item.id} city={item} />;
      })}
    </div>
  );
};

export default CitiesList;
