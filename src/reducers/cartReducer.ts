import { headPhone } from "../components/Items/components/Card";
import CartContext, { CartContextType } from "../context/Cart/CartContext";
import { useContext, useEffect } from "react";

export default function getCart() {
  const { cart, setCart } = useContext(CartContext) as CartContextType;

  let items = JSON.stringify([]);
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", items);
  } else {
    let storage: headPhone[] = JSON.parse(
      localStorage.getItem("cart") || "error"
    );
    setCart([...storage]);
  }
}

export function addtoCarts(headPhone: headPhone | undefined) {
  let storage = JSON.parse(localStorage.getItem("cart") || "error");
  localStorage.setItem("cart", JSON.stringify([...storage, headPhone]));
}
export function removeFromCarts(id: string) {
  let storage: headPhone[] = JSON.parse(
    localStorage.getItem("cart") || "error"
  );
  let updatedStorage = JSON.stringify(storage.filter((item) => item._id != id));

  localStorage.setItem("cart", updatedStorage);
}
