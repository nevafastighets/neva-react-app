import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.05
  },
  press: {
    scale: 1
  }
});

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
      <Box className="box">
        <div className="city bd-highlight">
          <StyledHero img={featuredImage}>
            <div className="overlay-image" />
            <span className="city-grid-title">{title}</span>
          </StyledHero>
        </div>
      </Box>
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
