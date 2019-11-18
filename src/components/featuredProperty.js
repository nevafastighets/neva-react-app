import React, { Component } from "react";
import { PropertyContext } from "../PropertyContext";
import Loading from "./Loading";
import Property from "./Property";

export default class FeaturedProperty extends Component {
  static contextType = PropertyContext;
  render() {
    let { loading, featuredProperties: properties } = this.context;
    properties = properties.map(property => {
      return <Property key={property.id} property={property} />;
    });

    return (
      <section className="featured-properties">
        <div className="featured-properties-center">
          {loading ? <Loading /> : properties}
        </div>
      </section>
    );
  }
}
