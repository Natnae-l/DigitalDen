import { Grid, Typography } from "@mui/material";
import CardSkeleton from "./CardSkeleton";

function DisplayCard() {
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
      <Grid container gap={2.4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Grid key={item} item lg={2.835} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default DisplayCard;
