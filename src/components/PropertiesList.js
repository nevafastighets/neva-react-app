import React from "react";
import Property from "./Property";

const PropertiesList = ({ properties }) => {
  return (
    <div className="d-flex flex-wrap grid-listing justify-content-center bd-highlight">
      {properties.map(item => {
        return <Property key={item.id} property={item} />;
      })}
    </div>
  );
};

export default PropertiesList;
