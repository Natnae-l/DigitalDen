import { Box, Typography } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Account() {
  return (
    <Box display="flex" gap={2}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" gap={0}>
          <PersonOutlinedIcon sx={{ color: "black" }} />
          <Typography sx={{ color: "black", fontFamily: "Anta !important" }}>
            Account
          </Typography>
        </Box>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" gap={0}>
          <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
          <Typography sx={{ color: "black", fontFamily: "Anta !important" }}>
            Cart
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default Account;
