import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const activeLink =
    "pl-4 pb-2.5 pt-3 m-2 flex items-center gap-5 rounded-lg text-white text-md";

  const normalLink = ` pl-4 pb-2.5 pt-3 m-2 flex items-center gap-5 rounded-lg 
    text-white text-md text-gray-700 dark:text-gray-200 
    dark:hover::text-black hover:bg-black hover:text-white`;

  function handleClose() {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div
      className="ml-3 h-screen md:overflow-hidden overflow-auto 
      md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold 
            dark:text-white tracking-tight text-slate-900"
              onClick={handleClose}
            >
              <SiShopware /> <span>Dashboard</span>
            </Link>
            <button
              className="text-xl p-3 mt-4  rounded-full
            block md:hidden"
              onClick={() => setActiveMenu(false)}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{link.title}</p>
                {link.links.map((item) => (
                  <NavLink
                    onClick={handleClose}
                    key={item.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive && currentColor
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to={`/${item.name}`}
                  >
                    {item.icon}
                    <p className="capitalize">{item.name}</p>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
