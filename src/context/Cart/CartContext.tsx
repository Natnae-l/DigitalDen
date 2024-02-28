import { createContext } from "react";

export type CartContextType = {
  openDialog: boolean;
  setOpenDialog: (prev: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  openDialog: false,
  setOpenDialog: () => {},
});

export default CartContext;
