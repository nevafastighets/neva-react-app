import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import nevaLogo from "../assets/nevaLogo.svg";
import nevaLogoDark from "../assets/nevaLogoDark.svg";
import { Link, NavLink } from "react-router-dom";

const Styles = styled.div`
  .navigationbar {
    background-color: transparent;
    z-index: 1;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 10px;
  }

  .navbar {
    padding: 0;
  }

  .navbar-logo {
    height: 68px;
  }

  .navbar-menu {
    margin-top: 15px;
  }

  .navbar-menu .navbar-nav .nav-link {
    color: #fff;
    font-family: "GillSansMedium", sans-serif;
    font-size: 18px;
    margin-left: 16px;
    margin-right: 16px;

    &.hover {
      color: #000;
    }
  }

  @media (min-width: 992px) {
    .navigationbar {
      height: 160px;
    }

    .navbar-link--active {
      padding-bottom: 16px;
      position: relative;
    }

    .navbar-link--active:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      background: #fff;
      height: 2px;
      border-radius: 25px;
    }

    .navbar-light .navbar-nav .nav-link:focus,
    .navbar-light .navbar-nav .nav-link:hover {
      color: #ffffff;
    }

    .navbar-dark .navbar-nav .nav-link:focus,
    .navbar-dark .navbar-nav .nav-link:hover {
      color: #ffffff;
    }

    .navbar-logo-dark {
      display: none;
    }
  }

  .navbar-dark .navbar-toggler {
    border: none;
  }

  .navbar-light .navbar-toggler {
    border: none;
  }

  .navbar-dark .navbar-toggler:focus {
    outline: none;
  }

  .navbar-light .navbar-toggler:focus {
    outline: none;
  }

  @media (max-width: 992px) {
    .neva-navigationbar {
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 18px;
    }

    nav {
      width: 100%;
      text-align: center;
      color: #757575 !important;
      background-color: #f7f7f7 !important;
    }

    a.nav-link.navbar-link--active {
      color: #505050 !important;
    }

    .navigationbar {
      position: fixed;
      background-color: #f7f7f7 !important;
    }

    nav button {
      margin: auto;
      display: block;
    }

    nav a {
      color: #8d8d8d !important;
    }

    .navbar-logo-light {
      display: none;
    }

    .navbar-nav {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const Navigationbar = () => (
  <Styles>
    <div className="navigationbar">
      <div className="neva-brandbar">
        <div className="d-flex flex-row justify-content-center neva-brand">
          <Link to="/">
            <img
              className="navbar-logo navbar-logo-light"
              alt=""
              src={nevaLogo}
            ></img>
          </Link>
        </div>
      </div>
      <div className="neva-navigationbar">
        <div className="d-flex flex-row navbar-menu justify-content-center">
          <Navbar className="navbar-light" expand="lg">
            <div className="neva-navbar-brand">
              <Link to="/">
                <img
                  className="navbar-logo navbar-logo-dark"
                  alt=""
                  src={nevaLogoDark}
                ></img>
              </Link>
            </div>
            <div className="neva-navbar-toggler">
              <Navbar.Toggle aria-controls="first-navbar-nav" />
            </div>
            <Navbar.Collapse id="first-navbar-nav">
              <Nav>
                <Nav.Item>
                  <NavLink
                    exact
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/"
                  >
                    Hem
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/vara-fastigheter"
                  >
                    Våra Fastigheter
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/vara-bolag"
                  >
                    Våra bolag
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/om-oss"
                  >
                    Om oss
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/hyresobjekt"
                  >
                    Hyresobjekt
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    activeClassName="navbar-link--active"
                    className="nav-link"
                    to="/kontakt"
                  >
                    Kontakt
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  </Styles>
);
