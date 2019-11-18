import React from "react";
import City from "./City";

const CitiesList = ({ cities }) => {
  return (
    <section className="propertieslist">
      <div className="propertieslist-center">
        {cities.map(item => {
          return <City key={item.id} city={item} />;
        })}
      </div>
    </section>
  );
};

export default CitiesList;
