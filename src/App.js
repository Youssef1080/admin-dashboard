import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components/import";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  LinePage,
  AreaPage,
  BarPage,
  PiePage,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor
} from "./pages/import";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

function App() {
  const {
    activeMenu,
    activeSettings,
    setActiveSettings,
    currentColor,
    currentMode
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className="fixed right-4 bottom-4"
          style={{
            zIndex: "1000"
          }}
        >
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              onClick={() => setActiveSettings(true)}
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ backgroundColor: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`
        dark:bg-main-dark-bg bg-main-bg
        min-h-screen w-full ${activeMenu && "md:ml-72"} 
      `}
        >
          <div
            className="fixed md:static bg-main-bg 
        dark:bg-main-dark-bg navbar w-full"
          >
            <Navbar />
          </div>
          <div className="flex justify-center flex-col items-center">
            {activeSettings && <ThemeSettings />}
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<LinePage />} />
              <Route path="/area" element={<AreaPage />} />
              <Route path="/bar" element={<BarPage />} />
              <Route path="/pie" element={<PiePage />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
