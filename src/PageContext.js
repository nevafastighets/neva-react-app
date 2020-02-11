import React, { Component } from "react";
import Client from "./Contentful";

const PageContext = React.createContext();

export default class PageProvider extends Component {
  state = {
    homepage: [],
    ourcompanypage: [],
    aboutuspage: [],
    rentobjectpage: [],
    contactpage: [],
    footercontent: [],
    loading: true
  };

  getData = async () => {
    try {
      let home = await Client.getEntry("5Uk4bNE02uzh7GqjFf5Gws");
      let ourcompany = await Client.getEntry("kgzSOaztjpxTsAQaOtfD1");
      let aboutus = await Client.getEntry("5CKOPTFXP26V5v1AaHqGRD");
      let rentobject = await Client.getEntry("1Maq9NMvUc1WuknNaPM672");
      let contact = await Client.getEntry("1EFqiMEwRTKZ6EppidHNOa");
      let footer = await Client.getEntry("7cbfVRsLBbOeBtkXPgjLi3");

      let homepage = this.formatData(home);
      let ourcompanypage = this.formatData(ourcompany);
      let aboutuspage = this.formatData(aboutus);
      let rentobjectpage = this.formatData(rentobject);
      let contactpage = this.formatData(contact);
      let footercontent = footer.fields;

      this.setState({
        homepage,
        ourcompanypage,
        aboutuspage,
        rentobjectpage,
        contactpage,
        footercontent,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    setTimeout(
      function() {
        this.getData();
      }.bind(this),
      1000
    );
  }

  formatData(item) {
    let id = item.sys.id;
    let headerImage = item.fields.headerImage.fields.file.url;

    let page = { ...item.fields, headerImage, id };
    return page;
  }

  render() {
    return (
      <PageContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PageContext.Provider>
    );
  }
}

const PageConsumer = PageContext.Consumer;

export { PageProvider, PageConsumer, PageContext };

export function withPageConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PageConsumer>
        {value => <Component {...props} context={value} />}
      </PageConsumer>
    );
  };
}
