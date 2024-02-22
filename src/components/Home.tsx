import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";

function Home() {
  return (
    <>
      <HeaderInfo />
      <Grid width="85%" margin="0 auto">
        <Nav />
      </Grid>
    </>
  );
}

export default Home;
