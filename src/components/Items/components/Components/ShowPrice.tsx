import { Typography } from "@mui/material";

interface Props {
  price?: number;
}

function ShowPrice({ price }: Props) {
  const customStyle = useStyle();
  return (
    <Typography fontWeight={600}>
      <span style={{ ...customStyle.currency }}>$</span>
      {price || "289"}
      <span style={{ ...customStyle.currency }}>.78</span>
    </Typography>
  );
}

export default ShowPrice;
const useStyle = () => {
  return {
    currency: {
      fontSize: "11px",
      verticalAlign: "top",
    },
  };
};
