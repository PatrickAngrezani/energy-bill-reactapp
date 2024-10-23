import React, { useState, useEffect } from "react";
import axios from "axios";
import FinancialResultsChart from "../pages/FinancialResultsChart";

const FinancialDashboard = () => {
  const [financialData, setFinancialData] = useState({
    timePeriods: [],
    totalValueWithoutGD: [],
    GDEconomyPositive: [],
  });

  useEffect(() => {
    axios
      .get("http:///172.30.121.2:4000/energy-bills", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const data = response.data.energyBills;

        const timePeriods = data.map((item) => item.month);
        const totalValueWithoutGD = data.map(
          (item) => item.totalValueWithoutGD
        );
        const compensatedEnergyQuantityMoney = data.map(
          (item) => item.compensatedEnergyQuantityMoney
        );

        setFinancialData({
          timePeriods,
          totalValueWithoutGD,
          compensatedEnergyQuantityMoney,
        });
      })
      .catch((error) => {
        console.error("Error getting data from API!", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Financial Dashboard</h1>
      {financialData ? (
        <FinancialResultsChart data={financialData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default FinancialDashboard;
