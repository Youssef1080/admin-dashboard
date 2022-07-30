import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { userProfileData } from "../data/dummy";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";
import img from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor, setIsClicked, isClicked } = useStateContext();
  return (
    <div
      style={{ left: "-6.8rem", width: "350px" }}
      className="absolute dark:text-white  bg-white top-12 p-6 m-2 rounded-xl dark:bg-secondary-dark-bg"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">User Profile</p>
        <button
          onClick={() => setIsClicked({ ...isClicked, userProfile: false })}
          className="hover:bg-slate-300 p-3 rounded-full text-2xl font-bold text-gray-400"
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      <div className="flex gap-6 mt-6 mb-6">
        <img src={img} className="rounded-full w-16 h-16" />
        <div>
          <p className="text-lg font-semibold">Mr Milk</p>
          <p className="text-sm text-gray-400 ">Administrator</p>
          <p className="text-gray-400 font-semibold">info@shop.com</p>
        </div>
      </div>
      <div className="border-t-1 border-gray-300 mb-3">
        {userProfileData.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 p-4 border-b-1 border-gray-300 cursor-pointer hover:bg-gray-300"
          >
            <button
              className="rounded-lg text-xl w-10 h-10 flex justify-center items-center"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </button>
            <div>
              <p className="mb-0.5 text-md font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        backgroundColor={currentColor}
        color="white"
        text={"Logout"}
        borderRadius="6px"
        width="100%"
      />
    </div>
  );
};

export default UserProfile;
