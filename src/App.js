import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Common";
import PageNotFound from "./Components/PageNotFound";
import Courses from "./Components/Courses";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
