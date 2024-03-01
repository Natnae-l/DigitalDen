import { ReactNode, useState } from "react";
import { headPhone } from "@/components/Items/components/Card";
import ItemContext from "./ItemContext";

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CategoryContextProviderProps) => {
  const [item, setItem] = useState<headPhone[] | []>([]);
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default CartContextProvider;
