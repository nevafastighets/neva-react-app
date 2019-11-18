import React from "react";
import Property from "./Property";

const CityPropertiesList = ({ properties, cityid }) => {
  return (
    <section className="propertieslist">
      <div className="propertieslist-center">
        {properties
          .filter(item => item.city.sys.id === cityid)
          .map(item => {
            return <Property key={item.id} property={item} />;
          })}
      </div>
    </section>
  );
};

export default CityPropertiesList;
