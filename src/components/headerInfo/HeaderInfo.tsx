import { Button, Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import SelectInfo from "./components/SelectInfo";

function HeaderInfo() {
  const breakPoints = {
    xs: 0,
    sm: 12,
    md: 4,
  };

  return (
    <Grid
      flexWrap={{
        xs: "wrap",
        sm: "nowrap",
      }}
      spacing={1}
      container
      bgcolor="#1b3e25"
      justifyContent="space-between"
    >
      <Grid
        justifyContent={{
          xs: "center",
          sm: "flex-start",
        }}
        item
        {...breakPoints}
        xs={6}
        container
        alignItems="center"
      >
        <Button
          style={{ paddingLeft: "2rem", fontSize: ".8rem" }}
          variant="text"
          startIcon={<PhoneIcon />}
          color="inherit"
          href="tel:+12345678"
        >
          +12345678
        </Button>
      </Grid>
      <Grid
        item
        {...breakPoints}
        xs={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          ".MuiGrid-item": {
            paddingLeft: 0,
          },
        }}
      >
        <Link to="/" color="white">
          <Typography
            variant="body1"
            component="h3"
            sx={{
              color: "rgb(240, 239, 239)",
              fontSize: ".8rem",
              "MuiGrid-item": {
                paddingLeft: 0,
              },
            }}
          >
            Get 50% off on selected item &nbsp; &nbsp; | &nbsp; &nbsp; shop now
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        {...breakPoints}
        container
        justifyContent="flex-end"
        paddingRight={4}
        xs={12}
        alignItems="center"
      >
        <SelectInfo label="lang" value="Eng" minWidth={70} />
        <SelectInfo label="Location" value="Location" minWidth={90} />
      </Grid>
    </Grid>
  );
}

export default HeaderInfo;
