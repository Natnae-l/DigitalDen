import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CartContext, {
  CartContextType,
} from "../../../../context/Cart/CartContext";
import { ItemContext } from "../../../../context/Item/ItemContext";
import { headPhone } from "../Card";

interface Props {
  id: string;
}
function AddToCart({ id }: Props) {
  const customStyle = useStyle();
  const [text, setText] = useState(false);
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  const { headPhones } = useContext(ItemContext);

  let buttonText: string[] = ["Add to Cart", "Added"];

  useEffect(() => {
    if (cart.find((item) => item._id == id)) {
      setText(true);
    }
  }, [cart]);

  const handleClick = () => {
    setText((prev) => !prev);
    let getItem: headPhone = headPhones.find(
      (item) => item._id == id
    ) as headPhone;
    let filterdItem = cart.filter((item) => item._id != id);
    text ? setCart(filterdItem) : setCart([...cart, getItem]);

    console.log(localStorage.getItem("cart"));
    console.log(cart);
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
