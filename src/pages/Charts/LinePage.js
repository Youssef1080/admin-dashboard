import Header from "../../components/Header";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    cv: 5000,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 5000,
    pv: 1398,
    cv: 6300,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 5500,
    pv: 9800,
    cv: 2900,

    amt: 2290
  },
  {
    name: "Page D",
    uv: 6000,
    pv: 3908,
    cv: 7000,

    amt: 2000
  },
  {
    name: "Page E",
    uv: 5000,
    pv: 4800,
    cv: 4300,

    amt: 2181
  },
  {
    name: "Page F",
    uv: 4000,
    pv: 3800,
    cv: 2100,

    amt: 2500
  },
  {
    name: "Page G",
    uv: 4700,
    pv: 4300,
    cv: 7500,

    amt: 2100
  }
];

export default function LinePage() {
  let lineHeight, lineWidth;
  const { screenSize } = useStateContext();
  if (screenSize >= 1650) {
    lineWidth = 1400;
    lineHeight = 600;
  } else if (screenSize >= 1000) {
    lineWidth = 900;
    lineHeight = 400;
  } else if (screenSize >= 600) {
    lineWidth = 460;
    lineHeight = 280;
  } else {
    lineWidth = 340;
    lineHeight = 200;
  }

  console.log(lineHeight, lineWidth);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl w-fit">
      <Header category="Page" title="Line Chart" />{" "}
      <LineChart
        width={lineWidth}
        height={lineHeight}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="cv" stroke="red" />
      </LineChart>
    </div>
  );
}
