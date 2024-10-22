import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Dashboards Page</h1>
      <h2>Select a Dashboard</h2>
      <div className="buttons">
        <Link to="/energy-dashboard">
          <button>Energy Dashboard</button>
        </Link>
        <Link to="/financial-dashboard">
          <button>Financial Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
