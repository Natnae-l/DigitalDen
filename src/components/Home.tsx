import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import UserContextProvider from "../context/Category/CategoryContext.tsx";
import ItemContextProvider from "../context/Item/ItemContext.tsx";
import CartContextProvider from "../context/Cart/CartContextProvider.tsx";
import { Outlet } from "react-router-dom";
import getCart from "../reducers/cartReducer.ts";

function Home() {
  getCart();
  return (
    <>
      <UserContextProvider>
        <ItemContextProvider>
          <CartContextProvider>
            <HeaderInfo />
            <Grid width="85%" margin="0 auto">
              <Nav />

              <Outlet />
            </Grid>{" "}
          </CartContextProvider>
        </ItemContextProvider>
      </UserContextProvider>
    </>
  );
}

export default Home;
