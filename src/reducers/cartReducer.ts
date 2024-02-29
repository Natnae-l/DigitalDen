import { headPhone } from "../components/Items/components/Card";
import CartContext, { CartContextType } from "../context/Cart/CartContext";
import { useContext, useEffect } from "react";

export default function getCart() {
  const { setCart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    let items = JSON.stringify([]);
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", items);
    } else {
      let storage: headPhone[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      setCart([...storage]);
    }
  }, []);
}

export function updateCart() {
  const { cart } = useContext(CartContext) as CartContextType;
  localStorage.setItem("cart", JSON.stringify(cart));
}
