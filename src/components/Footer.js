import React from "react";
import styled from "styled-components";
import nevaLogo from "../assets/nevaLogo.svg";
import { Link } from "react-router-dom";

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
    font-family: "GillSansMediumItalic", sans-serif;
    letter-spacing: 1px;
  }

  .footer-logo {
    height: 68px;
  }

  .footer-copyright {
    margin-top: 18px;
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
  }
`;

export const Footer = () => (
  <Styles>
    <footer className="footer">
      <div className="d-flex footer-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
        <div className="p-2 bd-highlight">
          <Link to="/">
            <img className="footer-logo" alt="" src={nevaLogo}></img>
          </Link>
          <br />
          <p className="footer-copyright">Copyright 2020</p>
        </div>
        <div className="p-2 bd-highlight">
          <p className="footer-col-title">Kontakt</p>
          <p className="footer-col-desc">
            Probabo, inquit, modo ista sis aequitate, quam interrogare aut petat
            aut rerum necessitatibus saepe eveniet, ut labore et caritatem, quae
            dices, libenter assentiar probabo, inquit, sic agam, ut aliquid ex
            eo ortum, tam egregios viros censes tantas res gessisse sine causa?
            quae fuerit causa, nollem.
          </p>
          <p>Website created by Oblign</p>
        </div>
      </div>
    </footer>
  </Styles>
);
