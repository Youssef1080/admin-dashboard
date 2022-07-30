import { AiOutlineCloseCircle } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import img from "../data/avatar.jpg";
import Button from "./Button";

const Notifications = () => {
  const { currentColor, setIsClicked, isClicked } = useStateContext();
  return (
    <div
      style={{ left: "-15rem", width: "350px" }}
      className="absolute  bg-white top-12 p-6 m-2 rounded-xl dark:text-white dark:bg-secondary-dark-bg"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">Messages</p>
        <button
          onClick={() => setIsClicked({ ...isClicked, notification: false })}
          className="hover:bg-slate-300 p-3 rounded-full text-2xl font-bold text-gray-400"
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      <div className="mb-2 mt-4">
        {chatData.map((item) => (
          <div
            key={item.message}
            className="flex gap-3 cursor-pointer border-b-1 border-gray-300 items-center"
          >
            <img src={item.image} className="rounded-full w-12 h-12" />
            <div className="p-2">
              <p className=" font-semibold mb-1 text-md">{item.message}</p>
              <p className="text-sm text-gray-400 ">{item.desc}</p>
              {/* <p className="text-gray-400 text-sm font-semibold">{item.time}</p> */}
            </div>
          </div>
        ))}
      </div>
      <Button
        backgroundColor={currentColor}
        color="white"
        text={"See all notifications"}
        borderRadius="6px"
        width="100%"
      />
    </div>
  );
};

export default Notifications;
