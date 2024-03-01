import Filter from "./Filter/Filter";
import Advert from "./Advert/Advert";
import Items from "./Items/Items";
import CartContext, { CartContextType } from "../context/Cart/CartContext";
import { useContext, useEffect } from "react";
import { headPhone } from "./Items/components/Card";

function FirstPage() {
  const { setCart, cart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    if (cart.length == 0) {
      let storage: headPhone[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      setCart([...storage]);
    }
  }, []);
  return (
    <>
      <Advert />
      <Filter />
      <Items />
    </>
  );
}

export default FirstPage;
