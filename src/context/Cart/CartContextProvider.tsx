import { ReactNode, useState } from "react";
import CategoryContext from "./CartContext";
import { headPhone } from "@/components/Items/components/Card";

type CategoryContextProviderProps = {
  children: ReactNode;
};

const localItems: headPhone[] | [] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

const CartContextProvider = ({ children }: CategoryContextProviderProps) => {
  const [cart, setCart] = useState<headPhone[] | []>(localItems);
  return (
    <CategoryContext.Provider value={{ cart, setCart }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CartContextProvider;
