import { ReactNode, createContext, useState } from "react";
import { headPhone } from "../../components/Items/components/Card";

export type ItemContextType = {
  headPhones: headPhone[];
  setHeadPhones: (headPhone: headPhone[]) => void;
};

export const ItemContext = createContext<ItemContextType>({
  headPhones: [],
  setHeadPhones: () => {},
});

type ItemContextProviderProps = {
  children: ReactNode;
};

const ItemContextProvider = ({ children }: ItemContextProviderProps) => {
  const [headPhones, setHeadPhones] = useState<headPhone[]>([]);
  return (
    <ItemContext.Provider value={{ headPhones, setHeadPhones }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
