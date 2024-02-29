import { headPhone } from "../../components/Items/components/Card";
import { createContext } from "react";

export type CartContextType = {
  cart: headPhone[] | [];
  setCart: (prev: headPhone[] | []) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export default CartContext;
