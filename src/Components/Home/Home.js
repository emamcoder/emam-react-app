import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Home Page</h1>
    <Link to="about" className="btn btn-primary btn-lg">
      Switch to about page!
    </Link>
  </div>
);

export default Home;
