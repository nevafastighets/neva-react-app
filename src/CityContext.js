import React, { Component } from "react";
import Client from "./Contentful";

const CityContext = React.createContext();

export default class CityProvider extends Component {
  state = {
    cities: [],
    loading: true
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "orter",
        order: "fields.order"
      });
      let cities = this.formatData(response.items);
      this.setState({
        cities,
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
      let featuredImage = item.fields.featuredImage.fields.file.url;

      let city = { ...item.fields, featuredImage, id };
      return city;
    });
    return tempItems;
  }

  getCity = cityslug => {
    let tempCities = [...this.state.cities];
    const city = tempCities.find(city => city.cityslug === cityslug);
    return city;
  };

  render() {
    return (
      <CityContext.Provider value={{ ...this.state, getCity: this.getCity }}>
        {this.props.children}
      </CityContext.Provider>
    );
  }
}

const CityConsumer = CityContext.Consumer;

export { CityProvider, CityConsumer, CityContext };

export function withCityConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CityConsumer>
        {value => <Component {...props} context={value} />}
      </CityConsumer>
    );
  };
}
