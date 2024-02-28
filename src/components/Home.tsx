import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import Advert from "./Advert/Advert";
import UserContextProvider from "../context/Category/categoryContext.tsx";
import Filter from "../components/Filter/Filter";
import Items from "./Items/Items";
import ItemContextProvider from "../context/Item/ItemContext.tsx";

function Home() {
  return (
    <>
      <UserContextProvider>
        <ItemContextProvider>
          <HeaderInfo />
          <Grid width="85%" margin="0 auto">
            <Nav />
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
