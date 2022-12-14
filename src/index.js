import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageProvider } from "./PageContext";
import { PropertyProvider } from "./PropertyContext";
import { ExperienceProvider } from "./ExperienceContext";
import { CityProvider } from "./CityContext";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <PageProvider>
      <CityProvider>
        <ExperienceProvider>
          <PropertyProvider>
            <ScrollToTop />
            <App />
          </PropertyProvider>
        </ExperienceProvider>
      </CityProvider>
    </PageProvider>
  </Router>,
  document.getElementById("neva")
);

serviceWorker.unregister();
