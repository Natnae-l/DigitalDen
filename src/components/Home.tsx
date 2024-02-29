import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import UserContextProvider from "../context/Category/CategoryContext.tsx";
import ItemContextProvider from "../context/Item/ItemContext.tsx";
import CartContextProvider from "../context/Cart/CartContextProvider.tsx";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <UserContextProvider>
        <ItemContextProvider>
          <HeaderInfo />
          <Grid width="85%" margin="0 auto">
            <CartContextProvider>
              <Nav />
            </CartContextProvider>
            <Outlet />
          </Grid>
        </ItemContextProvider>
      </UserContextProvider>
    </>
  );
}

export default Home;
