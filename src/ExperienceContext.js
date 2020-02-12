import React, { Component } from "react";
import Client from "./Contentful";

const ExperienceContext = React.createContext();

export default class ExperienceProvider extends Component {
  state = {
    experiences: [],
    loading: true
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "upplevelser"
      });
      let experiences = this.formatData(response.items);
      this.setState({
        experiences,
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
      let headerImage = item.fields.headerImage.fields.file.url;

      let experience = { ...item.fields, headerImage, id };
      return experience;
    });
    return tempItems;
  }

  getExperience = experienceslug => {
    let tempExperiences = [...this.state.experiences];
    const experience = tempExperiences.find(
      experience => experience.experienceslug === experienceslug
    );
    return experience;
  };

  render() {
    return (
      <ExperienceContext.Provider
        value={{ ...this.state, getExperience: this.getExperience }}
      >
        {this.props.children}
      </ExperienceContext.Provider>
    );
  }
}

const ExperienceConsumer = ExperienceContext.Consumer;

export { ExperienceProvider, ExperienceConsumer, ExperienceContext };

export function withExperienceConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ExperienceConsumer>
        {value => <Component {...props} context={value} />}
      </ExperienceConsumer>
    );
  };
}
