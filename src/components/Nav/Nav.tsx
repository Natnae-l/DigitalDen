import { Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Nav() {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center" gap={1}>
          <img src="/shopping-cart.png" />
          <Typography variant="h4" color="primary">
            ShopCart
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
