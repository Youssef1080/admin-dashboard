import React, { useRef, useEffect, useState } from "react";
// import type { ChartData, ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import { Line } from "react-chartjs-2";

const SalesOverviewChart = ({ width }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    },
    stacked: false,
    plugins: {
      title: {
        display: true
        // text: "Chart.js Line Chart - Multi Axis"
      }
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left"
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false
        }
      }
    }
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "indonisia",
        data: [3, 0, 5, 3, 3.5, 4, 4.6],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y"
      },
      {
        label: "japan",
        data: [4, 3, 2.5, 4, 3, 2.5, 2.8],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1"
      }
    ]
  };
  return (
    <Line
      // width={"500"}
      options={options}
      data={data}
      // height={"80000px"}
    />
  );
};

export default SalesOverviewChart;
