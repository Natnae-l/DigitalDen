import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  label: string;
  value: string;
  minWidth: number;
}

function SelectInfo({ label, value, minWidth }: Props) {
  return (
    <FormControl sx={{ m: 1, minWidth: { minWidth } }} size="small">
      <InputLabel sx={{ color: "white", fontSize: ".7rem" }}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
        value={value}
        sx={{
          color: "white",
          fontSize: ".7rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
        }}
      >
        <MenuItem value={value} selected>
          {value}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectInfo;
