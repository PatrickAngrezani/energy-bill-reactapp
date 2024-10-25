import React, { useState, useEffect } from "react";
import axios from "axios";
import FinancialResultsChart from "../pages/FinancialResultsChart";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const FinancialDashboard = () => {
  const [financialData, setFinancialData] = useState({
    timePeriods: [],
    totalValueWithoutGD: [],
    GDEconomyPositive: [],
  });

  const [totals, setTotals] = useState({
    totalsValuesWithoutGD: 0,
    totalsCompensatedMoney: 0,
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

        const totalsValuesWithoutGD = totalValueWithoutGD.reduce(
          (acc, curr) => acc + curr,
          0
        );
        const totalsCompensatedMoney = compensatedEnergyQuantityMoney.reduce(
          (acc, curr) => acc + curr
        );

        setFinancialData({
          timePeriods,
          totalValueWithoutGD,
          compensatedEnergyQuantityMoney,
        });

        setTotals({
          totalsValuesWithoutGD,
          totalsCompensatedMoney,
        });
      })
      .catch((error) => {
        console.error("Error getting data from API!", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard Financeiro</h1>
      <Grid2>
        <Grid2>
          <Card>
            <CardContent>
              <Typography>Valor total sem Energia Compensada</Typography>
              <Typography>{totals.totalsValuesWithoutGD.toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Grid2>
        <Grid2>
          <Card>
            <CardContent>
              <Typography>Total de Energia Compensada (R$)</Typography>
              <Typography>
                {totals.totalsCompensatedMoney.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {financialData ? (
        <FinancialResultsChart data={financialData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default FinancialDashboard;
