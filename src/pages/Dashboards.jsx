import React, { useState, useEffect } from "react";
import axios from "axios";
import EnergyResultsChart from "../components/EnergyResultsChart";

const Dashboard = () => {
  const [energyData, setEnergyData] = useState({
    timePeriods: [],
    consumption: [],
    compensated: [],
  });

  useEffect(() => {
    axios
      .get("http:///172.30.121.2:4000/energy-bills", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        const timePeriods = data.map((item) => item.month);
        const consumption = data.map((item) => item.kwhConsuption);
        const compensated = data.map((item) => item.compensatedEnergyQuantity);

        setEnergyData({
          timePeriods,
          consumption,
          compensated,
        });
      })
      .catch((error) => {
        console.error("Error getting data from API!", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Energy Dashboard</h1>
      {energyData ? (
        <EnergyResultsChart data={energyData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
