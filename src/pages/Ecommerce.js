import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { useStateContext } from "../contexts/ContextProvider";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Button from "../components/Button";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData
} from "../data/dummy";
import loly from "../data/product9.jpg";
import { SparkLine, Stacked } from "../components/import";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 
        dark:bg-secondary-dark-bg h-44 rounded-xl 
        w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern  bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$50,895,45</p>
            </div>
            <button
              type="button"
              style={{ borderRadius: "50%" }}
              className="bg-cyan-600 text-white text-2xl p-4 hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              backgroundColor={currentColor}
              color="white"
              borderRadius="12px"
              text="Download"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 gap-1 flex-wrap items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className={`bg-white dark:text-gray-200 pt-9 md:w-56
              dark:bg-secondary-dark-bg rounded-2xl p-4   `}
            >
              <button
                className="rounded-full hover:drop-shadow-xl 
                p-4 text-2xl"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </button>
              <p className="flex gap-2 mt-3 items-center font-semibold text-lg">
                {item.amount}{" "}
                <span className={`text-${item.pcColor} text-sm font-normal`}>
                  {item.percentage}
                </span>{" "}
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-2 flex-wrap justify-center gap-10">
        <div
          className="bg-white dark:bg-secondary-dark-bg 
        dark:text-gray-200 rounded-2xl p-4 m-3 md:w-780"
        >
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg">Revenue Updates</h3>
            <div className="flex gap-3">
              <p
                className="flex items-center gap-2 hover:drop-shadow-xl
              text-gray-400"
              >
                <span>
                  <GoPrimitiveDot />
                </span>{" "}
                Expense
              </p>
              <p className="flex items-center gap-2 hover:drop-shadow-xl text-green-400">
                <span>
                  <GoPrimitiveDot />
                </span>{" "}
                Budget
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className=" border-r-1 border-color m-4 pr-10">
              <p className="flex gap-1 font-bold text-2xl">
                $93,438
                <button
                  className="text-white bg-green-400 text-sm font-normal
                hover:drop-shadow-md rounded-2xl p-1"
                >
                  23%
                </button>
              </p>
              <p className="text-gray-400 mt-1">Budget</p>
              <div className="mt-8">
                <p className="font-bold text-2xl">$48,487</p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color={"white"}
                  backgroundColor={currentColor}
                  text="Download Report"
                  borderRadius={"10px"}
                />
              </div>
            </div>

            <Stacked width="320px" height="360px" />
          </div>
        </div>

        <div style={{ width: "380px" }}>
          <div
            style={{ backgroundColor: currentColor }}
            className="p-4  text-white rounded-lg pt-6 m-4"
          >
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl">Earnings</h1>
              <div>
                <p className="font-bold text-2xl ">$63,448.78</p>
                <p className="text-gray-300 mt-1">Monthly revenue</p>
              </div>
            </div>
            {/* column */}
          </div>

          <div
            className="bg-white dark:bg-secondary-dark-bg 
            flex p-12 rounded-lg mt-3 m-4 dark:text-white"
          >
            <div>
              <p className="text-2xl font-semibold">$43,246</p>
              <p className="text-gray-300 mt-1">Yearly sales</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-5">
        <div
          style={{ width: "450px" }}
          className="bg-white rounded-xl p-6 
        dark:bg-secondary-dark-bg dark:text-white"
        >
          <div className="flex justify-between items-center ">
            <p className="text-xl">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
            {/* <select className="p-2 border-1 border-gray-300 rounded-lg focus:outline-none text-slate-900">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select> */}
          </div>

          <div className="mt-8 border-b-1 border-gray-300">
            {recentTransactions.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mb-4 items-center"
              >
                <button
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.iconColor
                  }}
                  className={`rounded-lg p-4 hover:drop-shadow-2xl text-xl `}
                >
                  {item.icon}
                </button>
                <div className="flex-1 ml-4">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                </div>
                <span className={`text-black`}>{item.percentage}</span>
              </div>
            ))}
          </div>

          <div className="flex mt-2 justify-between items-center">
            <Button
              text={"Add"}
              color="white"
              backgroundColor={currentColor}
              borderRadius="6px"
            />
            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>

        <div
          style={{ width: "580px" }}
          className="p-5 rounded-xl bg-white dark:bg-secondary-dark-bg dark:text-white"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Sales Overview</h3>
            <DropDown currentMode={currentMode} />
            {/* <select className="p-2 border-1 border-gray-300 rounded-lg focus:outline-none text-slate-900">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select> */}
          </div>
          {/* column */}
        </div>
        {/*  */}
      </div>

      <div className="flex gap-6 flex-wrap mt-6 justify-center dark:text-white">
        <div
          style={{ width: "400px" }}
          className="rounded-xl p-6 bg-white dark:bg-secondary-dark-bg"
        >
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold mb-8">Weekly Stats</p>
            <IoIosMore />
          </div>
          {weeklyStats.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-center mb-3"
            >
              <button
                className="rounded-full p-4 hover:drop-shadow-lg text-xl"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <div className="flex-1 ml-6">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
              <span className={`text-${item.pcColor}`}>{item.amount}</span>
            </div>
          ))}
          {/* column */}
        </div>

        <div
          style={{ width: "400px" }}
          className="rounded-xl p-6 bg-white dark:bg-secondary-dark-bg dark:text-white"
        >
          <div className="flex items-center justify-between ">
            <p className="text-xl font-semibold mb-8">MedicalPro Branding</p>
            <IoIosMore />
          </div>
          <button className="mb-8 hover:drop-shadow-xl bg-orange-400 text-sm text-gray-300 rounded-xl p-1">
            16 APR, 2021
          </button>
          <div
            className="flex border-b-1 border-gray-300"
            style={{ paddingLeft: "-16px" }}
          >
            {medicalproBranding.data.map((item) => (
              <div
                className="border-r-1 border-gray-300 pb-2 pr-4 pl-4"
                key={item.title}
              >
                <p className="text-gray-400 text-xs mb-0.5">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-gray-300 dark:text-white">
            <h3 className="font-semibold text-md my-2">Teams</h3>
            <div className="flex gap-4 pb-4">
              {medicalproBranding.teams.map((item) => (
                <button
                  key={item.name}
                  style={{ backgroundColor: item.color }}
                  className="text-white p-1 rounded-xl hover:drop-shadow-xl"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="border-b-1 border-gray-300">
            <h3 className="font-semibold text-md my-2">Leaders</h3>
            <div className="flex gap-4 pb-4">
              {medicalproBranding.leaders.map((item, ind) => (
                <img
                  key={ind}
                  src={item.image}
                  className="rounded-full w-8 h-8"
                />
              ))}
            </div>
          </div>
          <div className="flex mt-4 justify-between items-center">
            <Button
              text={"Add"}
              color="white"
              backgroundColor={currentColor}
              borderRadius="6px"
            />
            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>

        <div
          style={{ width: "400px" }}
          className="rounded-xl p-6 bg-white dark:bg-secondary-dark-bg"
        >
          <div className="flex items-center justify-between dark:text-white">
            <p className="text-xl font-semibold mb-8">Daily Activities</p>
            <IoIosMore />
          </div>
          <img src={loly} />
          <div className="mt-10">
            <p className="text-xl font-semibold dark:text-white">
              React 18 coming soon!
            </p>
            <p className="text-md text-gray-400">By Johnathan Doe</p>
          </div>
          <p className="mb-3 mt-8 text-gray-400 text-sm">
            This will be the small description for the news you have shown here.
            There could be some great info.
          </p>
          <Button
            text={"Read More"}
            color="white"
            backgroundColor={currentColor}
            borderRadius="8px"
          />
        </div>
      </div>

      {/* Next */}
    </div>
  );
};

export default Ecommerce;
