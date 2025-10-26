import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      // check if item already in cart
      const exists = state.find((item) => item.id === payload.id);

      if (exists) {
        // increase quantity
        return state.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
