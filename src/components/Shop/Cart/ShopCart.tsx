import { Box, Grid, Typography } from "@mui/material";

import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ShopCard from "./Components/ShopCard";
import ShowPrice from "../../../components/Items/components/Components/ShowPrice";

export default function FullScreenDialog() {
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
            <TiArrowBackOutline
              size="25"
              style={{ alignSelf: "end", cursor: "pointer" }}
            />
          </Link>
        </Box>
        <Grid container marginBlock={4.5} gap={3}>
          {[1, 2].map((item) => (
            <ShopCard key={item} />
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
                <ShowPrice />
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
