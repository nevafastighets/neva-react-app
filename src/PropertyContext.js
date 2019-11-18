import React, { Component } from "react";
import Client from "./Contentful";

const PropertyContext = React.createContext();

export default class PropertyProvider extends Component {
  state = {
    properties: [],
    featuredProperties: [],
    loading: true
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "fastigheter"
      });
      let properties = this.formatData(response.items);
      let featuredProperties = properties.filter(
        property => property.featured === true
      );
      this.setState({
        properties,
        featuredProperties,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let property = { ...item.fields, images, id };
      return property;
    });
    return tempItems;
  }

  getProperty = slug => {
    let tempProperties = [...this.state.properties];
    const property = tempProperties.find(property => property.slug === slug);
    return property;
  };

  render() {
    return (
      <PropertyContext.Provider
        value={{ ...this.state, getProperty: this.getProperty }}
      >
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}

const PropertyConsumer = PropertyContext.Consumer;

export { PropertyProvider, PropertyConsumer, PropertyContext };

export function withPropertyConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PropertyConsumer>
        {value => <Component {...props} context={value} />}
      </PropertyConsumer>
    );
  };
}
