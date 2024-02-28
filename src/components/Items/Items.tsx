import { Grid, Typography } from "@mui/material";
import CardComponent, { headPhone } from "./components/Card";
import ItemReducer from "../../reducers/ItemReducer";
import { useContext } from "react";
import { ItemContext, ItemContextType } from "../../context/Item/ItemContext";
import DisplaySkeleton from "../Skeleton/DisplaySkeleton";

function Items() {
  const { error, isLoading } = ItemReducer();
  const { headPhones } = useContext(ItemContext) as ItemContextType;

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
        {headPhones.map((item: headPhone, index: number) => (
          <Grid key={index} item lg={2.835} sm={6} xs={12}>
            <CardComponent
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Items;
