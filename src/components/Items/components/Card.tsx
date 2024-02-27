import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Rating from "./Rating";
import LikeButton from "./LikeButton";
function CardComponent() {
  return [1, 2, 3, 4].map((item) => {
    return (
      <Grid item xs={2.835}>
        {" "}
        <Card
          key={item}
          sx={{
            minHeight: 250,
            padding: 0,
            boxShadow: 0,
          }}
        >
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
              <Button
                sx={{
                  color: "white",
                  borderRadius: "1.5rem",
                  padding: "10px 20px",
                  textTransform: "none",
                }}
                className="card-button"
                style={{
                  color: "#1b3e25",
                  border: "1.4px solid #1b3e25",
                  margin: "10px 0 0 0",
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  });
}

export default CardComponent;
