import { Box, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Category } from "../../loaders/homeLoader";
import { CategoryContext } from "../../context/Category/categoryContext";
import { useContext } from "react";
import CategoryItem from "../../components/Nav/components/CategoryItem";

function Filter() {
  const { Category } = useLoaderData() as Category;
  const { setCategory } = useContext(CategoryContext);
  return (
    <Grid container marginBlock={6}>
      <Grid item xs={7}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid black"
        >
          {[1, 2, 3, 4].map((item) => {
            return (
              <CategoryItem
                categoryName="Category"
                categories={Category}
                setSelectedContext={setCategory}
              />
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          border="1px solid black"
        >
          <Typography variant="h5" color="secondary">
            Product
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Filter;
