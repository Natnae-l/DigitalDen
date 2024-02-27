import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Rating from "./Components/Rating";
import LikeButton from "./Components/LikeButton";
import AddToCart from "./Components/AddToCart";
function CardComponent() {
  const customStyle = useStyle();

  return [1, 2, 3, 4].map((item) => {
    return (
      <Grid item lg={2.835} sm={6} xs={12}>
        {" "}
        <Card key={item} sx={{ ...customStyle.card }}>
          <CardMedia image="https://res.cloudinary.com/dbkumr8wm/image/upload/v1708857468/nzil4sgvpar75gh7vxaq.jpg">
            <CardContent
              sx={{
                minHeight: "200px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                padding: 0,
                border: "1px solid transparent",
              }}
            >
              <LikeButton />
            </CardContent>
          </CardMedia>
          <CardContent
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0.7,
              border: "1px solid transparent",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBlockStart: 6,
              }}
            >
              <Typography fontWeight={600}>AirPods Max</Typography>
              <Typography fontWeight={600}>$559.00</Typography>
            </Box>
            <Typography className="material">
              Organic cotton, fair trade certified{" "}
            </Typography>
            <CardActions
              sx={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Rating />
              <AddToCart />
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  });
}

export default CardComponent;

const useStyle = () => {
  return {
    card: {
      minHeight: 250,
      padding: 0,
      boxShadow: 0,
    },
  };
};
