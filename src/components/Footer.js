import React from "react";
import styled from "styled-components";
import nevaLogo from "../assets/nevaLogo.svg";
import { Link } from "react-router-dom";

import { withPageConsumer } from "../PageContext";
import Loading from "./Loading";

const Styles = styled.div`
  footer {
    background-color: #1c2527;
    width: 100%;
    color: #ffffff;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  footer p {
    opacity: 0.6;
    font-family: "GillSansMedium", sans-serif;
    letter-spacing: 1px;
  }

  footer a {
    color: #ffffff;
  }

  .footer-logo {
    height: 68px;
  }

  .footer-copyright {
    margin-top: 18px;
    letter-spacing: 1.3px;
  }

  .footer-col-title {
    opacity: 1;
    font-family: "GilroyBold";
    letter-spacing: 1px;
    font-size: 20px;
  }

  .footer-flex {
    height: 100%;
    margin-left: 3.25rem;
    margin-right: 3.25rem;
  }

  .p-2 {
    padding: 1rem 3rem 0rem 3rem !important;
  }

  .footer-col-desc {
    word-wrap: break-word;
    max-width: 34rem;
    letter-spacing: 1.3px;
  }
`;

function Footer({ context }) {
  const { loading, footercontent } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <Styles>
      <footer className="footer">
        <div className="d-flex footer-flex flex-column flex-sm-column flex-md-column flex-lg-column flex-xl-row">
          <div className="p-2 bd-highlight">
            <Link to="/">
              <img className="footer-logo" alt="" src={nevaLogo}></img>
            </Link>
            <br />
            <p className="footer-copyright">{footercontent.copyrightText}</p>
          </div>
          <div className="p-2 bd-highlight">
            <p className="footer-col-title">{footercontent.areaoneTitle}</p>
            <p className="footer-col-desc">{footercontent.areaoneText}</p>
            <a
              href="http://alexanderwassbjer.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>Website created by Alexander Wassbjer</p>
            </a>
          </div>
          <div className="p-2 bd-highlight">
            <p className="footer-col-title">{footercontent.areatwoTitle}</p>
            <p className="footer-col-desc">{footercontent.areatwoText}</p>
          </div>
        </div>
      </footer>
    </Styles>
  );
}

export default withPageConsumer(Footer);
