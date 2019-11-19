import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import nevaLogo from "../assets/nevaLogo.svg";
import { Link, NavLink } from "react-router-dom";

const Styles = styled.div`
  .navigationbar {
    background-color: transparent;
    z-index: 1;
    width: 100%;
    height: 160px;
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
`;

export const Navigationbar = () => (
  <Styles>
    <div className="navigationbar">
      <div className="d-flex flex-row justify-content-center">
        <Link to="/">
          <img className="navbar-logo" alt="" src={nevaLogo}></img>
        </Link>
      </div>
      <div className="d-flex flex-row navbar-menu justify-content-center">
        <Navbar className="navbar-dark" expand="lg">
          <Navbar.Toggle aria-controls="first-navbar-nav" />
          <Navbar.Collapse id="first-navbar-nav">
            <Nav>
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
                  to="/hitta-bostad"
                >
                  Hitta bostad
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
  </Styles>
);
