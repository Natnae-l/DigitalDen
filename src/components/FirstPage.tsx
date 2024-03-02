import Filter from "./Filter/Filter";
import Advert from "./Advert/Advert";
import Items from "./Items/Items";
import CartContext, { CartContextType } from "../context/Cart/CartContext";
import { useContext, useEffect } from "react";
import ItemReducer from "../reducers/ItemReducer";
import { ItemContext, ItemContextType } from "../context/Item/ItemContext";

function FirstPage() {
  const { cart } = useContext(CartContext) as CartContextType;
  const { error, isLoading } = ItemReducer();
  const { item } = useContext(ItemContext) as ItemContextType;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Advert />
      <Filter />
      <Items item={item} error={error} isLoading={isLoading} />
    </>
  );
}

export default FirstPage;
