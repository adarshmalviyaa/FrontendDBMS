import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Courses from "./Courses";
import College from "./College";
import Teacher from "./Teacher";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/College" component={College} />
        <Route exact path="/Teachers" component={Teacher} />

        <Dashboard />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
