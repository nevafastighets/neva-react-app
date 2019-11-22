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
  height: 15rem;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function Property({ property }) {
  const { title, slug, featuredImage, city, description } = property;
  return (
    <Link
      className="property-margin"
      to={`/hitta-bostad/${city.fields.cityslug}/${slug}`}
    >
      <Box className="box">
        <div className="property bd-highlight">
          <StyledHero img={featuredImage} />
          <div className="property-grid-content">
            <span className="property-grid-title">{title}</span>
            <span className="property-grid-desc">{description}</span>
          </div>
        </div>
      </Box>
    </Link>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired
  })
};
