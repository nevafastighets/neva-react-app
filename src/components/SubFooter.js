import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { withCityConsumer } from "../CityContext";
import Loading from "./Loading";

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

function SubFooter({ context, cityid }) {
  const { loading, cities } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <Styles>
      <div className="subfooter d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
        {cities
          .filter(item => item.id === cityid)
          .map(item => {
            return (
              <React.Fragment>
                <div
                  className="flex-item-sf"
                  style={{
                    backgroundImage:
                      "url(" +
                      item.subfooterAreaOne.fields.headerImage.fields.file.url +
                      ")"
                  }}
                >
                  <Link
                    className="experience-link"
                    to={`/upplev/${item.subfooterAreaOne.fields.experienceslug}`}
                  >
                    <div className="experience-link-flex d-flex justify-content-center align-items-center">
                      <div className="p-2 flex-item-content-sf">
                        <h1>{item.subfooterAreaOne.fields.headerTitle}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className="flex-item-sf"
                  style={{
                    backgroundImage:
                      "url(" +
                      item.subfooterAreaTwo.fields.headerImage.fields.file.url +
                      ")"
                  }}
                >
                  <Link
                    className="experience-link"
                    to={`/upplev/${item.subfooterAreaTwo.fields.experienceslug}`}
                  >
                    <div className="experience-link-flex d-flex justify-content-center align-items-center">
                      <div className="p-2 flex-item-content-sf">
                        <h1>{item.subfooterAreaTwo.fields.headerTitle}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </Styles>
  );
}

export default withCityConsumer(SubFooter);
