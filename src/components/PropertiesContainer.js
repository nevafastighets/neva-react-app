import React from "react";
import PropertiesList from "./PropertiesList";
import { withPropertyConsumer } from "../PropertyContext";
import Loading from "./Loading";

function PropertiesContainer({ context }) {
  const { loading, properties } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <PropertiesList properties={properties} />
    </React.Fragment>
  );
}

export default withPropertyConsumer(PropertiesContainer);
