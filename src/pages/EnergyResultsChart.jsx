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

const EnergyResultsChart = ({ data }) => {
  const chartData = {
    labels: data.timePeriods,
    datasets: [
      {
        label: "Electricity Consumption (kWh)",
        data: data.consumption,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Compensated Energy (kWh)",
        data: data.compensated,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Energy results (kWh)",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default EnergyResultsChart;
