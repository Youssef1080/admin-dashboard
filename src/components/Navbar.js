import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Chat, Notifications, UserProfile } from "./import";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";

function NavButton({ title, func, color, dotColor, icon }) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        onClick={func}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-1"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
}

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() => {
    console.log("inside");
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex md:mx-6 justify-between p-2 relative ">
      <NavButton
        title={"Menu"}
        func={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />
      <div className="flex relative">
        <NavButton
          title="Cart"
          func={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color={currentColor}
        />
        <NavButton
          title="Chat"
          func={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notifications"
          func={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor={"#ffb700"}
        />
        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 
          rounded-lg hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full h-8 w-8" />
            <p>
              <span className="text-gray-400 text-14 ">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Roman
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 " />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notifications />}
      </div>
    </div>
  );
};

export default Navbar;
