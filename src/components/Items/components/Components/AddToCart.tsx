import { Button } from "@mui/material";
import { useContext, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { headPhone } from "../Card";
import { ItemContext } from "../../../../context/Item/ItemContext";

interface Props {
  id: string;
}
function AddToCart({ id }: Props) {
  const { headPhones } = useContext(ItemContext);
  const customStyle = useStyle();
  const [text, setText] = useState(false);

  let buttonText: string[] = ["Add to Cart", "Added"];

  const handleClick = () => {
    setText((prev) => !prev);
    text
      ? removeFromCarts(id)
      : addtoCarts(headPhones.find((item) => item._id == id));

    console.log(localStorage.getItem("cart"));
  };

  return (
    <Button
      sx={{ ...customStyle.overWrite }}
      className="card-button"
      style={{ ...customStyle.styleButton }}
      onClick={handleClick}
      startIcon={text && <DoneIcon className="doneIcon" />}
    >
      {text ? buttonText[1] : buttonText[0]}
    </Button>
  );
}

export default AddToCart;

const useStyle = () => {
  return {
    overWrite: {
      color: "white",
      borderRadius: "1.5rem",
      padding: "10px 20px",
      textTransform: "none",
      minWidth: "129px !important",
    },
    styleButton: {
      color: "#1b3e25",
      border: "1.4px solid #1b3e25",
      margin: "10px 0 0 0",
    },
  };
};

export function addtoCarts(headPhone: headPhone | undefined) {
  let items = JSON.stringify([]);

  if (!localStorage.getItem("cart")) localStorage.setItem("cart", items);
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
