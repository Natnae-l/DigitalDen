import { headPhone } from "../../components/Items/components/Card";
import { createContext } from "react";

export type CartContextType = {
  cart: headPhone[] | undefined;
  setCart: (prev: headPhone[] | undefined) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: undefined,
  setCart: () => {},
});

export default CartContext;
