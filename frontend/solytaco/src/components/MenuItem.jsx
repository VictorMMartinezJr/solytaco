import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MenuItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return (
    <div className="flex flex-col gap-2">
      <img src={item.image} alt={item.imageAlt} className="rounded" />
      <div className="flex justify-between px-.5">
        <div className="flex flex-col">
          <p className="text-yellow-500 ">{item.name}</p>
          <p className="text-sm">$ {item.price}</p>
        </div>
        <button
          className="bg-yellow-500 text-black rounded-xl text-sm px-1 cursor-pointer hover:scale-[103%] transition-transform"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
