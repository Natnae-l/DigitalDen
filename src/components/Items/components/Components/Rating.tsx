import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        color: "1b3e25",
      }}
    >
      <Rating
        value={value}
        sx={{}}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(event);
        }}
      />
    </Box>
  );
}
