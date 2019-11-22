import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropertyProvider } from "./PropertyContext";
import { CityProvider } from "./CityContext";
import ScrollToTop from "./components/ScrollToTop";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <CityProvider>
        <PropertyProvider>
          <ScrollToTop />
          <App />
        </PropertyProvider>
      </CityProvider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
