import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { cartData } from "../data/dummy";
import Button from "./Button";
const Cart = () => {
  const { currentColor, setIsClicked, isClicked } = useStateContext();
  return (
    <div className="w-screen h-screen fixed top-0 right-0 bg-half-transparent nav-item">
      <div
        className=" w-400 h-screen bg-white dark:bg-secondary-dark-bg dark:text-gray-200 
      float-right p-6 pl-6"
      >
        <div className="ml-2 flex items-center justify-between mr-1 mt-2">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            onClick={() => setIsClicked({ ...isClicked, cart: false })}
            className="text-gray-400 hover:drop-shadow-xl 
        rounded-full p-3 hover:bg-light-gray text-2xl"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <div className="p-2">
          {cartData.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 p-4 border-b-1 border-gray-300"
            >
              <img src={item.image} className="rounded-lg w-24 h-20" />
              <div>
                <p className="text-l font-semibold mb-1">{item.name}</p>
                <p className="text-sm text-gray-400 font-semibold">
                  {item.category}
                </p>
                <div className="flex gap-4 mt-3 items-center">
                  <span>{item.price}</span>
                  <div className="flex border-1 border-color items-center rounded-lg">
                    <button
                      className="text-red-500 px-2 text-xl border-r-1 
                    border-gray-600 m-2"
                    >
                      -
                    </button>
                    <span
                      className="text-green-600 
                    "
                    >
                      0
                    </span>
                    <button
                      className=" text-green-600 px-2 text-xl m-2 border-l-1 
                      border-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-2">
          <div className="flex items-center justify-between mb-2 mt-2">
            <p className="text-lg text-gray-400">Sub Total</p>
            <span className="text-md font-semibold">$890</span>
          </div>
          <div className="flex items-center justify-between mb-4 ">
            <p className="text-lg text-gray-400">Total</p>
            <span className="text-md font-semibold">$890</span>
          </div>
          <Button
            backgroundColor={currentColor}
            color="white"
            text={"Place Order"}
            borderRadius="10px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
