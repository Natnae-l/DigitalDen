import { Button } from "@mui/material";

function AddToCart() {
  return (
    <Button
      sx={{
        color: "white",
        borderRadius: "1.5rem",
        padding: "10px 20px",
        textTransform: "none",
      }}
      className="card-button"
      style={{
        color: "#1b3e25",
        border: "1.4px solid #1b3e25",
        margin: "10px 0 0 0",
      }}
    >
      Add to Cart
    </Button>
  );
}

export default AddToCart;
