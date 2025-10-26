import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="rounded w-[150px] h-[150px]"
        />
        <button className="bg-yellow-500 text-black w-[80%] rounded-full py-2 font-bold">
          <div className="flex justify-around items-center">
            <p onClick={removeFromCart}>t</p>
            <p>{item.quantity}</p>
            <p onClick={addToCart}>+</p>
          </div>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
