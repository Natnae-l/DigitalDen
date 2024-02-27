import { Button } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

function AddToCart() {
  const customStyle = useStyle();
  const [text, setText] = useState(false);

  let buttonText: string[] = ["Add to Cart", "Added"];

  return (
    <Button
      sx={{ ...customStyle.overWrite }}
      className="card-button"
      style={{ ...customStyle.styleButton }}
      onClick={() => setText((prev) => !prev)}
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
