import { Grid, Typography } from "@mui/material";
import CardComponent, { headPhone } from "./components/Card";
import ItemReducer from "../../Reducers/ItemReducer";
import { useContext, useEffect } from "react";
import { ItemContext, ItemContextType } from "../../context/Item/ItemContext";
import DisplaySkeleton from "../Skeleton/DisplaySkeleton";
import CartContext, { CartContextType } from "../../context/Cart/CartContext";

function Items() {
  const { error, isLoading } = ItemReducer();
  const { headPhones } = useContext(ItemContext) as ItemContextType;
  const { setCart, cart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (cart.length == 0) {
      let storage: headPhone[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      setCart([...storage]);
    }
  }, []);

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
