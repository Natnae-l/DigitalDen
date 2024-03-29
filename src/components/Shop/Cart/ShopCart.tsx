import { Box, Grid, IconButton, Typography } from "@mui/material";

import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ShopCard from "./Components/ShopCard";
import ShowPrice from "../../../components/Items/components/Components/ShowPrice";
import { useContext } from "react";
import CartContext from "../../../context/Cart/CartContext";

export default function FullScreenDialog() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Box className="cart-container" width="90%" margin="30px auto">
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          component="div"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ fontFamily: "Anta !important" }}>
            My Cart
          </Typography>
          <Link to="/">
            <IconButton>
              <TiArrowBackOutline
                size="25"
                style={{ alignSelf: "end", cursor: "pointer" }}
              />
            </IconButton>
          </Link>
        </Box>
        <Grid container marginBlock={4.5} gap={3}>
          {cart.map((item) => (
            <ShopCard
              id={item._id}
              price={item.price}
              name={item.name}
              rating={item.rating}
              img={item.image}
            />
          ))}
          <Grid item xs={12}>
            <Box
              minWidth="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight={300}>
                Total
              </Typography>

              <Typography variant="h5" fontWeight={300}>
                <ShowPrice
                  price={
                    cart.length == 0
                      ? 0
                      : cart.reduce((acc, item) => acc + item.price, 0)
                  }
                />
              </Typography>
              <Typography variant="h5" fontWeight={300}>
                Order Now
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
