import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState(localStorage.getItem("Light"));

  const [activeSettings, setActiveSettings] = useState(false);

  function setMode(e) {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  }

  function setColor(color) {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  }

  function handleClick(params) {
    setIsClicked({ ...initialState, [params]: !initialState[params] });
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setColor,
        activeSettings,
        setActiveSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
