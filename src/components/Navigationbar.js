import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigationbar extends Component {
  render() {
    return (
      <nav className="navibar">
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/hitta-bostad">Hitta bostad</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
