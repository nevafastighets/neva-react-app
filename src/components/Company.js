import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHero = styled.div`
  min-height: 18rem;
  height: 100%;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function Company({ company }) {
  const {
    companyName,
    featuredImage,
    descriptionone,
    phonenumber,
    email,
    companyslug
  } = company;
  return (
    <div className="company bd-highlight" id={companyslug}>
      <div className="row">
        <div className="col-auto">
          <StyledHero className="company-featured-image" img={featuredImage} />
        </div>
        <div className="col">
          <div className="company-grid-content">
            <span className="company-grid-title">{companyName}</span>
            <span className="company-grid-desc">{descriptionone}</span>
            <a href={"tel:" + phonenumber}>
              <span className="company-grid-desc">{phonenumber}</span>
            </a>
            <a href={"mailto:" + email}>
              <span className="company-grid-desc">{email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Company.propTypes = {
  company: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired
  })
};
