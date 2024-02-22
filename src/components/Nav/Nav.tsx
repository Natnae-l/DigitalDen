import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CategoryItem from "./components/CategoryItem";

const useStyles = () => {
  return {
    img: {
      width: "35px",
    },
    shop: {
      fontWeight: 600,
      color: "#1b1e10",
      fontFamily: "Anta, sans-serif !important",
    },
    tool: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
};

export default function Nav() {
  const styles = useStyles();

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar disableGutters sx={styles.tool}>
        <Box display="flex" gap={1}>
          <img src="/shopping-cart.png" style={styles.img} />
          <Typography variant="h4" sx={styles.shop} fontSize={28}>
            ShopCart
          </Typography>
        </Box>

        <CategoryItem />
      </Toolbar>
    </AppBar>
  );
}
