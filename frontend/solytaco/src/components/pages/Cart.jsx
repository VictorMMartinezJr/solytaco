import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subTotal > 0 ? 3.0 : 0;
  const grandTotal = subTotal > 0 ? subTotal + tax : 0;

  return (
    <div className="my-12 px-2 flex flex-col items-center h-[70vh] ">
      <div className="flex flex-col justify-between items-center gap-8 w-full h-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        {/* Header text */}
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold font-chango">Cart</h1>
          <p>
            <span className="text-gray-400">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>{" "}
            | ${subTotal.toFixed(2)}
          </p>
        </div>
        <div className="w-full px-2">
          <hr className="w-full text-gray-400" />
        </div>

        {/* Cart items */}
        <div className="flex flex-col w-full gap-8">
          {cart?.length > 0 &&
            cart?.map((item) => <CartItem key={item.id} item={item} />)}
        </div>

        <div className="w-full px-2">
          <hr className="w-full text-gray-400" />
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-2xl font-chango">Summary</h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Tax</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
          <button className="bg-yellow-500 text-black w-full rounded-full py-4 font-bold mt-2 font-chango cursor-pointer hover:scale-[103%] transition-transform">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
