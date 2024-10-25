import React, { useState, useEffect } from "react";
import axios from "axios";
import EnergyResultsChart from "../pages/EnergyResultsChart";
import { Card, CardContent, Typography, Grid2 } from "@mui/material"; // Importing Material-UI components for the cards

const EnergyDashboard = () => {
  const [energyData, setEnergyData] = useState({
    timePeriods: [],
    consumption: [],
    compensated: [],
  });

  const [totals, setTotals] = useState({
    totalConsumption: 0,
    totalCompensated: 0,
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
        const consumption = data.map((item) => item.kwhConsuption);
        const compensated = data.map((item) => item.compensatedEnergyQuantity);

        const totalConsumption = consumption.reduce(
          (acc, curr) => acc + curr,
          0
        );
        const totalCompensated = compensated.reduce(
          (acc, curr) => acc + curr,
          0
        );

        setEnergyData({
          timePeriods,
          consumption,
          compensated,
        });

        setTotals({
          totalConsumption,
          totalCompensated,
        });
      })
      .catch((error) => {
        console.error("Error getting data from API!", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard Energético</h1>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Total de Energia Consumida
              </Typography>
              <Typography variant="h4">
                {totals.totalConsumption} kWh
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Total de Energia Compensada
              </Typography>
              <Typography variant="h4">
                {totals.totalCompensated} kWh
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {energyData ? (
        <EnergyResultsChart data={energyData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default EnergyDashboard;
