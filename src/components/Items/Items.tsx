import { Grid, Typography } from "@mui/material";
import CardComponent from "./components/Card";

function Items() {
  return (
    <Grid container>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontWeight: 600,
          width: "100%",
          marginBlock: 3,
        }}
      >
        HeadPhones for you!
      </Typography>
      <CardComponent />
    </Grid>
  );
}

export default Items;
