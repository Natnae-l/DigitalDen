import { Box, Skeleton } from "@mui/material";

function CardSkeleton() {
  return (
    <Box display="flex" flexDirection="column" gap={0}>
      <Skeleton
        variant="rectangular"
        animation="pulse"
        sx={{ fontSize: "10rem" }}
      />
      <Skeleton
        variant="text"
        animation="pulse"
        sx={{ fontSize: "3rem", marginBlock: 0 }}
      />
      <Skeleton
        variant="circular"
        animation="pulse"
        sx={{ fontSize: "3rem", borderRadius: 10, width: "50%" }}
      />
    </Box>
  );
}

export default CardSkeleton;
