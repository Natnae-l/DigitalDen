import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Rating from "./Components/Rating";
import LikeButton from "./Components/LikeButton";
import AddToCart from "./Components/AddToCart";

export interface headPhone {
  id: string;
  name: string;
  material: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

function CardComponent() {
  const customStyle = useStyle();

  return (
    <Card sx={{ ...customStyle.card }}>
      <CardMedia image="https://res.cloudinary.com/dbkumr8wm/image/upload/v1708857468/nzil4sgvpar75gh7vxaq.jpg">
        <CardContent sx={{ ...customStyle.cardContentMedia }}>
          <LikeButton />
        </CardContent>
      </CardMedia>
      <CardContent sx={{ ...customStyle.cardContent }}>
        <Box style={{ ...customStyle.itemName }}>
          <Typography fontWeight={600}>AirPods Max</Typography>
          <Typography fontWeight={600}>
            <span style={{ ...customStyle.currency }}>$</span>
            559
            <span style={{ ...customStyle.currency }}>.78</span>
          </Typography>
        </Box>
        <Typography className="material">
          Organic cotton, fair trade certified{" "}
        </Typography>
        <CardActions sx={{ ...customStyle.action }}>
          <Rating />
          <AddToCart />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardComponent;

const useStyle = () => {
  return {
    card: {
      minHeight: 250,
      padding: 0,
      boxShadow: 0,
    },
    cardContentMedia: {
      minHeight: "200px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      padding: 0,
      border: "1px solid transparent",
    },
    cardContent: {
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 0.7,
      border: "1px solid transparent",
    },
    itemName: {
      display: "flex",
      justifyContent: "space-between",
      marginBlockStart: 6,
    },
    action: {
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    currency: {
      fontSize: "11px",
      verticalAlign: "top",
    },
  };
};
