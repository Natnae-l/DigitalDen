import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
function CardComponent() {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 200,
        padding: 0,
      }}
    >
      <CardMedia image="https://res.cloudinary.com/dbkumr8wm/image/upload/v1708857468/nzil4sgvpar75gh7vxaq.jpg">
        <CardContent sx={{ minHeight: "150px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </CardMedia>
      <CardContent sx={{ padding: 0 }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>AirPods Max</Typography>
          <Typography>$559.00</Typography>
        </Box>
        <Typography className="material">
          Organic cotton, fair trade certified{" "}
        </Typography>
        <CardActions sx={{ padding: 0 }}>
          <Button
            sx={{
              color: "white",
              borderRadius: "1.5rem",
              padding: "10px 20px",
              textTransform: "none",
            }}
            style={{ color: "#1b3e25", border: "1.3px solid black" }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
