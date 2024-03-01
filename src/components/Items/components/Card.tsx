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
import ShowPrice from "./Components/ShowPrice";

export interface headPhone {
  _id: string;
  name: string;
  description: string;
  // category: string;
  price: number;
  rating: number;
  image: string;
}

function CardComponent({ name, price, description, image, _id }: headPhone) {
  const customStyle = useStyle();

  return (
    <Card sx={{ ...customStyle.card }}>
      <CardMedia image={image}>
        <CardContent sx={{ ...customStyle.cardContentMedia }}>
          <LikeButton />
        </CardContent>
      </CardMedia>
      <CardContent sx={{ ...customStyle.cardContent }}>
        <Box style={{ ...customStyle.itemName }}>
          <Typography fontWeight={600}>{name}</Typography>
          <ShowPrice price={price} />
        </Box>
        <Typography className="material">{description}</Typography>
        <CardActions sx={{ ...customStyle.action }}>
          <Rating />
          <AddToCart id={_id} />
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
