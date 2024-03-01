import { headPhone } from "../../components/Items/components/Card";
import { createContext } from "react";

export type ItemContextType = {
  item: headPhone[] | [];
  setItem: (prev: headPhone[] | []) => void;
};

export const ItemContext = createContext<ItemContextType>({
  item: [],
  setItem: () => {},
});

export default ItemContext;
