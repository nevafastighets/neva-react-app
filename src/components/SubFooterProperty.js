import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Styles = styled.div`
.subfooter {
  width: 100%
  height: 400px;
  display: flex;
}

.flex-item-sf {
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
  display: flex;
	flex-direction: column;
  justify-content: center;
  flex: 1;
  position: relative;
}

.flex-item-sf:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(28, 37, 39, 0.5);
}

.flex-item-content-sf {
  text-align: center;
  color: #ffffff;
  z-index: 1;
  letter-spacing: 6px;
}
`;

export default function SubFooter({ city }) {
  return (
    <Styles>
      <div className="subfooter d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
        <div
          className="flex-item-sf"
          style={{
            backgroundImage:
              "url(" + city.fields.subfooterAreaOneImage.fields.file.url + ")"
          }}
        >
          <div className="flex-item-content-sf">
            <h1>{city.fields.subfooterAreaOneTitle}</h1>
          </div>
        </div>
        <div
          className="flex-item-sf"
          style={{
            backgroundImage:
              "url(" + city.fields.subfooterAreaTwoImage.fields.file.url + ")"
          }}
        >
          <div className="flex-item-content-sf">
            <h1>{city.fields.subfooterAreaTwoTitle}</h1>
          </div>
        </div>
      </div>
    </Styles>
  );
}
