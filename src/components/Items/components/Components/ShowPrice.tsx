import { Typography } from "@mui/material";

interface Props {
  price?: number;
}

function ShowPrice({ price }: Props) {
  let partitions = String(price).split(".");

  const customStyle = useStyle();
  return (
    <Typography fontWeight={600}>
      <span style={{ ...customStyle.currency }}>$</span>
      {partitions[0]}
      <span style={{ ...customStyle.currency }}>{partitions[1]}</span>
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
