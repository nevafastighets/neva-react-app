import React from "react";
import Property from "./Property";

const CityPropertiesList = ({ properties, cityid }) => {
  return (
    <div className="d-flex flex-wrap grid-listing justify-content-center bd-highlight">
      {properties
        .filter(item => item.city.sys.id === cityid)
        .map(item => {
          return <Property key={item.id} property={item} />;
        })}
    </div>
  );
};

export default CityPropertiesList;
