import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CategoryItem from "./components/CategoryItem";
import { Link, useLoaderData } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Account from "./components/Account";
import { Category } from "../../loaders/homeLoader";
import { useContext } from "react";
import { CategoryContext } from "../../context/Category/categoryContext";

const useStyles = () => {
  return {
    img: {
      width: "35px",
    },
    shop: {
      fontWeight: "600 !important",
      fontSize: "1.8rem !important",
      color: "#1b1e10",
      fontFamily: "Anta, sans-serif !important",
    },
    tool: {
      display: "flex",
      justifyContent: "space-between",
      // gap: "15px",
    },
  };
};

export default function Nav() {
  const styles = useStyles();
  const { Category } = useLoaderData() as Category;
  const { setCategory } = useContext(CategoryContext);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className="weight-first"
    >
      <Toolbar disableGutters sx={styles.tool}>
        <Box display="flex" gap={1}>
          <img src="/shopping-cart.png" style={styles.img} />
          <Typography variant="h4" sx={styles.shop} fontSize={28}>
            ShopCart
          </Typography>
        </Box>
        <CategoryItem
          categoryName="Category"
          categories={Category}
          setSelectedContext={setCategory}
          sizeCate="md"
        />
        <Link to="/" style={{ textDecoration: "none" }} className="green">
          <Typography>Deals</Typography>{" "}
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} className="green">
          <Typography>What's New</Typography>
        </Link>
        <SearchBar />
        <Account />
      </Toolbar>
    </AppBar>
  );
}
