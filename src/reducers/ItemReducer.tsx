import { useContext, useState } from "react";
import { ItemContext } from "../context/Item/ItemContext";

function ItemReducer() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { setHeadPhones } = useContext(ItemContext);

  fetch("https://digitalden-backend.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      setHeadPhones(data);
      setIsLoading(false);
    })
    .catch((err) => {
      if (!err) return;
      setIsLoading(false);
      setError(true);
    });

  return {
    error,
    isLoading,
  };
}

export default ItemReducer;
