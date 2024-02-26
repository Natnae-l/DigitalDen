import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import Advert from "./Advert/Advert";
import UserContextProvider from "../context/Category/categoryContext";
import Filter from "../components/Filter/Filter";

function Home() {
  return (
    <>
      <UserContextProvider>
        <HeaderInfo />
        <Grid width="85%" margin="0 auto">
          <Nav />
          <Advert />
          <Filter />
        </Grid>
      </UserContextProvider>
    </>
  );
}

export default Home;
