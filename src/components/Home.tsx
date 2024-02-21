import { Grid } from "@mui/material";
import HeaderInfo from "./headerInfo/HeaderInfo";
import Nav from "./Nav/Nav";

function Home() {
  return (
    <>
      <HeaderInfo />
      <Grid width="90%" margin="0 auto" border="1px solid red" height="100px">
        <Nav />
      </Grid>
    </>
  );
}

export default Home;
