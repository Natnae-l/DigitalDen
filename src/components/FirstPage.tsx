import Filter from "./Filter/Filter";
import Advert from "./Advert/Advert";
import Items from "./Items/Items";
import CartContext, { CartContextType } from "../context/Cart/CartContext";
import { useContext, useEffect } from "react";

function FirstPage() {
  const { cart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Advert />
      <Filter />
      <Items />
    </>
  );
}

export default FirstPage;
