import { Grid, Typography } from "@mui/material";
import CardComponent, { headPhone } from "./components/Card";
import DisplaySkeleton from "../Skeleton/DisplaySkeleton";

interface Props {
  error: boolean;
  isLoading: boolean;
  item: headPhone[] | [];
}

function Items({ error, isLoading, item }: Props) {
  if (isLoading) return <DisplaySkeleton />;
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
        {item.map((item: headPhone, index: number) => (
          <Grid key={index} item lg={2.835} sm={6} xs={12}>
            <CardComponent
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              _id={item._id}
              rating={item.rating}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Items;
