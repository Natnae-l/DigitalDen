import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";
import Advert from "./Advert/Advert";

function Home() {
  return (
    <>
      <HeaderInfo />
      <Grid width="85%" margin="0 auto">
        <Nav />
        <Advert />
      </Grid>
    </>
  );
}

export default Home;
