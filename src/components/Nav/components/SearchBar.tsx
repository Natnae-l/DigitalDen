import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function SearchBar() {
  return (
    <FormControl
      sx={{
        borderRadius: "1rem", // Applying border-radius to make the whole form control rounded
        border: "1px solid transparent",
        "& .MuiInputBase-root": {
          borderRadius: "1rem",
          boxShadow: "none", // Applying border-radius to the input area inside the form control
        },
      }}
    >
      <TextField
        size="small"
        placeholder="Search Product"
        sx={{
          borderRadius: "1rem", // Apply border-radius to the text field
          "& .MuiInputBase-input": {
            height: "2rem", // Adjust the height of the input field
            outline: "none", // Remove the default focus outline
            boxShadow: "none", // Remove any default box-shadow
            border: "none", // Remove the default border
            fontSize: "0.9rem", // Reduce the font size
            color: "inherit",
            "&:focus-within": {
              borderColor: "transparent", // Set border color as transparent on focus
            }, // Preserve the default text color
          },
          "& .MuiInputBase-root": {
            height: "2rem", // Ensure root height matches the input field height
            "&:focus-within": {
              borderBottomColor: "transparent",
              // Set border color as transparent on focus
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default SearchBar;
