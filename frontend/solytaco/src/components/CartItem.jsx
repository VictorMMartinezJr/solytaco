import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <div className="flex justify-between text-right gap-2 border-2">
      <div className="flex flex-col gap-2">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="rounded w-[180px] h-[180px]"
        />
        <button className="bg-yellow-500 text-black w-[80%] rounded-full py-2 font-bold">
          <div className="flex justify-around items-center">
            <FaRegTrashAlt
              onClick={removeFromCart}
              className="cursor-pointer"
            />
            <p>{item.quantity}</p>
            <FaPlus onClick={addToCart} className="cursor-pointer" />
          </div>
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-chango">{item.name}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
