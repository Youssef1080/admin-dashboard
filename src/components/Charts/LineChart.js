import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: true
        // text: "Chart.js Bar Chart"
      }
    }
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May"
    // "June",
    // "July"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Month",
        data: [1, 3, 5, 2, 8],
        backgroundColor: "white"
      }
      // {
      //   label: "Dataset 2",
      //   // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: "red"
      // }
    ]
  };

  return (
    <div className="bg-gray-900 w-400 rounded-lg mt-3">
      <Bar options={options} data={data} />
    </div>
  );
};

export default LineChart;
