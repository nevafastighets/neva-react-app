import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { CityContext } from "../CityContext";
import StyledHero from "../components/StyledHero";
import CityPropertiesContainer from "../components/CityPropertiesContainer";

export default class SingleCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityslug: this.props.match.params.cityslug
    };
  }

  static contextType = CityContext;

  render() {
    const { getCity } = this.context;
    const city = getCity(this.state.cityslug);

    if (!city) {
      return (
        <div className="error">
          <h3>Kan inte hitta någon ort</h3>
          <Link to="/" className="btn-primary">
            Tillbaka
          </Link>
        </div>
      );
    }
    const { title, featuredImage, id } = city;

    return (
      <React.Fragment>
        <StyledHero img={featuredImage}>
          <Banner title={`${title}`}></Banner>
        </StyledHero>
        <section>
          <CityPropertiesContainer cityid={`${id}`} />
        </section>
      </React.Fragment>
    );
  }
}
