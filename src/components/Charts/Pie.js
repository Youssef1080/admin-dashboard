import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieComponent = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const arr = [
    { x: "Labour", y: 18, text: "18%" },
    { x: "Legal", y: 8, text: "8%" },
    { x: "Production", y: 15, text: "15%" },
    { x: "License", y: 11, text: "11%" },
    { x: "Facilities", y: 18, text: "18%" },
    { x: "Taxes", y: 14, text: "14%" },
    { x: "Insurance", y: 16, text: "16%" }
  ];

  const data = {
    labels: [
      "Labour",
      "Legal",
      "Production",
      "License",
      "Facilities",
      "Taxes",
      "Insurance"
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [18, 8, 15, 11, 18, 14, 16],
        backgroundColor: [
          "#05807d",
          "#0b0c0c",
          "#3169f8",
          "#f52575",
          "#fcb069",
          "#078b2c",
          "#ff88dd"
        ],
        borderColor: [
          "#05807d",
          "#0b0c0c",
          "#3169f8",
          "#f52575",
          "#fcb069",
          "#078b2c",
          "#ff88dd"
        ],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={data} />;
};

export default PieComponent;
