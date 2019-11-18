import React from "react";
import Property from "./Property";

const PropertiesList = ({ properties }) => {
  return (
    <section className="propertieslist">
      <div className="propertieslist-center">
        {properties.map(item => {
          return <Property key={item.id} property={item} />;
        })}
      </div>
    </section>
  );
};

export default PropertiesList;
