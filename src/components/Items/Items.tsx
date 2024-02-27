import { Grid, Typography } from "@mui/material";
import CardComponent from "./components/Card";
import ItemReducer from "../../reducers/ItemReducer";

function Items() {
  const { error, isLoading } = ItemReducer();
  if (isLoading) return <div style={{ color: "black" }}>IsLoading</div>;
  if (error)
    return (
      <div style={{ color: "black" }}>
        error happend, Please check your internet connection
      </div>
    );

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
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item lg={2.835} sm={6} xs={12}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Items;
