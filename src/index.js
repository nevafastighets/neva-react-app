import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropertyProvider } from "./PropertyContext";

ReactDOM.render(
  <PropertyProvider>
    <Router>
      <App />
    </Router>
  </PropertyProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
