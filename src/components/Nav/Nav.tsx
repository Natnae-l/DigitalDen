import { Category } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

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
  };
};

export default function Nav() {
  const styles = useStyles();

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center" gap={1}>
          <img src="/shopping-cart.png" style={styles.img} />
          <Typography variant="h4" sx={styles.shop} fontSize={28}>
            ShopCart
          </Typography>
          <Category />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
