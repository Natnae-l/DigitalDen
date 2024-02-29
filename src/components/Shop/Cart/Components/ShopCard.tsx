import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Rating from "../../../Items/components/Components/Rating";
import ShowPrice from "../../../../components/Items/components/Components/ShowPrice";
import { MdOutlineDelete } from "react-icons/md";
// img name rating price

function ShopCard() {
  const customStyle = useStyle();

  return (
    <Grid item xs={12}>
      <Card sx={{ ...customStyle.card }}>
        <CardMedia
          component="img"
          height={100}
          sx={{ ...customStyle.img }}
          src="https://res.cloudinary.com/dbkumr8wm/image/upload/v1708858747/zzq1j9dghznovzxcmk0s.jpg"
        />
        <CardContent>
          <Typography sx={{ ...customStyle.text }} variant="h5" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardContent>
          <Rating />
        </CardContent>
        <CardContent>
          <ShowPrice />
        </CardContent>
        <CardActions
          sx={{
            marginInlineEnd: "1rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <MdOutlineDelete size={20} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShopCard;

const useStyle = () => {
  return {
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    img: {
      maxWidth: "20%",
    },
    text: {
      color: "black",
      fontFamily: "Anta !important",
    },
  };
};
