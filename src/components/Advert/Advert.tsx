import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyle = () => {
  return {
    mainGrid: {
      height: "40vh",
      padding: "10",
      alignItems: "center",
      justifyContent: "center",
    },
    typo: {
      fontSize: "Anta",
      fontWeight: "600",
      marginBottom: 3,
    },
    buttonStyle: {
      color: "white",
      borderRadius: "1.5rem",
      padding: "10px 20px",
      textTransform: "none",
    },
  };
};

function Advert() {
  // const { category, setCategory }: CategoryContextType = useContext(
  //   CategoryContext
  // ) || { category: undefined, setCategory: () => {} };

  const styles = useStyle();
  return (
    <Grid className="name" container {...styles.mainGrid}>
      <Grid item xs={5} flexDirection="column" gap={4}>
        <Typography variant="h4" className="green" {...styles.typo}>
          Grab Upto 50% Off On Selected Headphone
        </Typography>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={styles.buttonStyle}
              style={{ backgroundColor: "#1b3e25" }}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item container xs={6} justifyContent="center">
        <img
          src="/headphones-375341_640.png"
          alt=""
          style={{ width: "130px", transform: "rotate(2deg)" }}
        />
      </Grid>
    </Grid>
  );
}

export default Advert;
