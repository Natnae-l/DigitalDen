import { ReactNode, createContext, useState } from "react";

export type ItemContextType = {
  headPhones: string[];
  setHeadPhones: (headPhone: string[]) => void;
};

export const ItemContext = createContext<ItemContextType>({
  headPhones: [],
  setHeadPhones: () => {},
});

type ItemContextProviderProps = {
  children: ReactNode;
};

const ItemContextProvider = ({ children }: ItemContextProviderProps) => {
  const [headPhones, setHeadPhones] = useState<string[]>([]);
  return (
    <ItemContext.Provider value={{ headPhones, setHeadPhones }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
