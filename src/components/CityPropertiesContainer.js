import React from "react";
import CityPropertiesList from "./CityPropertiesList";
import { withPropertyConsumer } from "../PropertyContext";
import Loading from "./Loading";

function CityPropertiesContainer({ context, cityid }) {
  const { loading, properties } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <CityPropertiesList cityid={cityid} properties={properties} />
    </React.Fragment>
  );
}

export default withPropertyConsumer(CityPropertiesContainer);
