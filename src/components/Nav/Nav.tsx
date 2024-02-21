import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Nav() {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <div>
          <img src="/shopping-cart.png" />
          <Typography variant="h3" component="h5"></Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
