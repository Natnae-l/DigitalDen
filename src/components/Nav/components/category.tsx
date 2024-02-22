import { FormControl, NativeSelect } from "@mui/material";

function category() {
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "Category",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
  );
}

export default category;
