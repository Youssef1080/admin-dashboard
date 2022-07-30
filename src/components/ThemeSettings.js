import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setActiveSettings } =
    useStateContext();

  const [themeArray, setThemeArray] = useState(themeColors);

  function handleTheme(id) {
    setThemeArray((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: true } : { ...item, value: false }
      )
    );
  }

  return (
    <div
      className="nav-item bg-half-transparent fixed top-0 right-0 h-screen 
      w-screen"
    >
      <div
        className="p-4 bg-white dark:bg-secondary-dark-bg  w-400 float-right
          dark:text-gray-200 h-screen "
      >
        <div className="border-b-1 border-gray-300 p-4 ml-4 flex items-center justify-between">
          <p className="font-semibold text-lg">Settings</p>
          <button
            onClick={() => setActiveSettings(false)}
            className="text-gray-400 hover:drop-shadow-xl 
        rounded-full p-3 hover:bg-light-gray text-2xl"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <div className="flex-col border-b-1 border-gray-300 p-4 ml-4 ">
          <p className="font-semibold text-xl mb-4">Theme Option</p>
          <div className="mb-2">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Light"}
            />
            <label className="ml-2 cursor-pointer text-md" htmlFor="light">
              Light
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label className="ml-2 cursor-pointer text-md" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>
        <div className=" p-4 ml-4 ">
          <p className="font-semibold text-xl mb-4">Theme Colors</p>
          <div className="flex items-center justify-between">
            {themeColors.map((item, ind) => (
              <TooltipComponent
                key={ind}
                content={item.name}
                position="TopCenter"
                onClick={() => setColor(item.color)}
                style={{
                  backgroundColor: item.color,
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  cursor: "pointer"
                  // fontSize: "20px"
                }}
              >
                <BsCheck
                  className={`${
                    item.color === currentColor ? "block" : "hidden"
                  } text-2xl`}
                />
              </TooltipComponent>
            ))}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
