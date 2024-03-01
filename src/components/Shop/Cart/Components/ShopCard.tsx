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
import { useContext } from "react";
import CartContext from "../../../../context/Cart/CartContext";
// img name rating price

interface Props {
  name: string;
  id: string;
  rating: number;
  price: number;
  img: string;
}

function ShopCard({ name, id, price, img }: Props) {
  const customStyle = useStyle();
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = () => {
    setCart([...cart.filter((item) => item._id != id)]);
  };

  return (
    <Grid item xs={12} key={id}>
      <Card sx={{ ...customStyle.card }}>
        <CardMedia
          component="img"
          height={100}
          sx={{ ...customStyle.img }}
          src={img}
        />
        <CardContent>
          <Typography sx={{ ...customStyle.text }} variant="h5" gutterBottom>
            {name}
          </Typography>
        </CardContent>
        <CardContent>
          <Rating />
        </CardContent>
        <CardContent>
          <ShowPrice price={price} />
        </CardContent>
        <CardActions
          sx={{
            marginInlineEnd: "1rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <MdOutlineDelete size={20} onClick={handleDelete} />
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
      // fontFamily: "Anta !important",
      fontSize: "1.2rem",
      fontWeight: "500",
    },
  };
};
