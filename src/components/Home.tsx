import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import Advert from "./Advert/Advert";
import UserContextProvider from "../context/Category/CategoryContext.tsx";
import Filter from "../components/Filter/Filter";
import Items from "./Items/Items";
import ItemContextProvider from "../context/Item/ItemContext.tsx";
import CartContextProvider from "../context/Cart/CartContextProvider.tsx";

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
            <Advert />
            <Filter />
            <Items />
          </Grid>
        </ItemContextProvider>
      </UserContextProvider>
    </>
  );
}

export default Home;
