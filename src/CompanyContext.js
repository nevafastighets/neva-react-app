import React, { Component } from "react";
import Client from "./Contentful";

const CompanyContext = React.createContext();

export default class CompanyProvider extends Component {
  state = {
    companies: [],
    loading: true
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "bolag",
        order: "fields.order"
      });
      let companies = this.formatData(response.items);
      this.setState({
        companies,
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

      let company = { ...item.fields, featuredImage, id };
      return company;
    });
    return tempItems;
  }

  getCompany = companyslug => {
    let tempCompanies = [...this.state.companies];
    const company = tempCompanies.find(
      company => company.companyslug === companyslug
    );
    return company;
  };

  render() {
    return (
      <CompanyContext.Provider
        value={{ ...this.state, getCompany: this.getCompany }}
      >
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}

const CompanyConsumer = CompanyContext.Consumer;

export { CompanyProvider, CompanyConsumer, CompanyContext };

export function withCompanyConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CompanyConsumer>
        {value => <Component {...props} context={value} />}
      </CompanyConsumer>
    );
  };
}
