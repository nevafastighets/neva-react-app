import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropertyProvider } from "./PropertyContext";
import { CityProvider } from "./CityContext";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <CityProvider>
      <PropertyProvider>
        <ScrollToTop />
        <App />
      </PropertyProvider>
    </CityProvider>
  </Router>,
  document.getElementById("neva")
);

serviceWorker.unregister();
