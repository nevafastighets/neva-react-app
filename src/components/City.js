import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHero = styled.div`
  height: 100%;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
  position: relative;
`;

export default function City({ city }) {
  const { title, cityslug, featuredImage } = city;

  return (
    <Link className="city-margin" to={`/hitta-bostad/${cityslug}`}>
      <div className="city bd-highlight">
        <StyledHero img={featuredImage}>
          <div className="overlay-image" />
          <span className="city-grid-title">{title}</span>
        </StyledHero>
      </div>
    </Link>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cityslug: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired
  })
};
