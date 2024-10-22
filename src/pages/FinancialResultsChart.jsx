import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinancialResultsChart = ({ data }) => {
  const chartData = {
    labels: data.timePeriods,
    datasets: [
      {
        label: "Total Value without GD (R$)",
        data: data.totalValueWithoutGD,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Economy GD (R$)",
        data: data.compensatedEnergyQuantityMoney,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default FinancialResultsChart;
