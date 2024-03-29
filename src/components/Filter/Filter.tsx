import { Box, Grid } from "@mui/material";
import {
  CategoryContext,
  CategoryContextType,
} from "../../context/Category/CategoryContext";
import { useContext } from "react";
import CategoryItem from "../../components/Nav/components/CategoryItem";

function Filter() {
  const { setCategory } = useContext(CategoryContext) as CategoryContextType;
  return (
    <Grid container marginBlock={4} className="weight">
      <Grid item xs={6}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {[1, 2, 3, 4].map((item) => {
            return (
              <CategoryItem
                key={item}
                categoryName="Category"
                categories={["First", "second", "third"]}
                setSelectedContext={setCategory}
                variant={true}
                sizeCate="sm"
              />
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <CategoryItem
            categoryName="Sort By"
            categories={["price", "review", "offer"]}
            setSelectedContext={setCategory}
            variant={true}
            sizeCate="sm"
            compType="sort"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Filter;
