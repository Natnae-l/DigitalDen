import { ReactNode, useState } from "react";
import CategoryContext from "./CartContext";

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CategoryContextProviderProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <CategoryContext.Provider value={{ openDialog, setOpenDialog }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CartContextProvider;
