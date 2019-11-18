import React from "react";
import CitiesList from "./CitiesList";
import { withCityConsumer } from "../CityContext";
import Loading from "./Loading";

function CitiesContainer({ context }) {
  const { loading, cities } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <CitiesList cities={cities} />
    </React.Fragment>
  );
}

export default withCityConsumer(CitiesContainer);
