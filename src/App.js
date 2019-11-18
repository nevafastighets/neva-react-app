import React from "react";
import "./App.css";

import Home from "./pages/Home";
import FindProperty from "./pages/FindProperty";
import City from "./pages/City";
import SingleProperty from "./pages/SingleProperty";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hitta-bostad" component={FindProperty} />
        <Route exact path="/hitta-bostad/:ort" component={City} />
        <Route
          exact
          path="/hitta-bostad/:ort/:slug"
          component={SingleProperty}
        />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
