import { Badge, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { useContext } from "react";
import CartContext, {
  CartContextType,
} from "../../../context/Cart/CartContext";

function Account() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <Box display="flex" gap={2.5}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" gap={0}>
          <RxPerson size={20} color="black" style={{ marginInlineEnd: 3 }} />
          <Typography
            sx={{
              color: "black",
              fontFamily: "Poppins !important",
              fontSize: ".86rem",
            }}
            className="base"
          >
            Account
          </Typography>
        </Box>
      </Link>
      <Link
        to="cart"
        style={{
          textDecoration: "none !important",
        }}
      >
        <Box
          display="flex"
          component="div"
          sx={{
            textDecoration: "none !important",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Badge
            badgeContent={cart.length ? cart.length : "0"}
            sx={{ marginInlineEnd: 0.9 }}
            className="badge"
            color="secondary"
          >
            <MdOutlineAddShoppingCart size={24} color="black" />
          </Badge>

          <Typography
            sx={{
              color: "black",
              fontFamily: "Poppins !important",
              fontSize: ".86rem",
            }}
            className="base"
          >
            Cart
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default Account;
