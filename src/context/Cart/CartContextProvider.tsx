import { ReactNode, useState } from "react";
import CategoryContext from "./CartContext";
import { headPhone } from "@/components/Items/components/Card";

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CategoryContextProviderProps) => {
  const [cart, setCart] = useState<headPhone[] | undefined>();
  return (
    <CategoryContext.Provider value={{ cart, setCart }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CartContextProvider;
