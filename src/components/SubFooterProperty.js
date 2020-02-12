import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  z-index: 3;
  letter-spacing: 6px;
}

.experience-link {
  width: 100%;
  height: 100%;
  z-index: 2;
}

.experience-link:hover {
  text-decoration: none;
}

.experience-link-flex {
  height: 100%;
  width: 100%;
}
`;

export default function SubFooter({ ciity }) {
  return (
    <Styles>
      <div className="subfooter d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
        <div
          className="flex-item-sf"
          style={{
            backgroundImage:
              "url(" +
              ciity.fields.subfooterAreaOne.fields.headerImage.fields.file.url +
              ")"
          }}
        >
          <Link
            className="experience-link"
            to={`/upplev/${ciity.fields.subfooterAreaOne.fields.experienceslug}`}
          >
            <div className="experience-link-flex d-flex justify-content-center align-items-center">
              <div className="p-2 flex-item-content-sf">
                <h1>{ciity.fields.subfooterAreaOne.fields.headerTitle}</h1>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="flex-item-sf"
          style={{
            backgroundImage:
              "url(" +
              ciity.fields.subfooterAreaOne.fields.headerImage.fields.file.url +
              ")"
          }}
        >
          <Link
            className="experience-link"
            to={`/upplev/${ciity.fields.subfooterAreaOne.fields.experienceslug}`}
          >
            <div className="experience-link-flex d-flex justify-content-center align-items-center">
              <div className="p-2 flex-item-content-sf">
                <h1>{ciity.fields.subfooterAreaOne.fields.headerTitle}</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Styles>
  );
}
