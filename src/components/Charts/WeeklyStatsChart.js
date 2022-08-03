import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

const WeeklyStatsChart = () => {
  const { currentColor } = useStateContext();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true
        // text: "Chart.js Line Chart"
      }
    }
  };

  const labels = ["January", "February", "March", "April", "May"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "state",
        data: [0, 2, 3, 1, 5],
        borderColor: currentColor,
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };
  return <Line options={options} data={data} />;
};

export default WeeklyStatsChart;
