import { Input } from "@mui/base/Input";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="dismantle">
      <Input
        style={{ display: "flex", alignItems: "center" }}
        type="search"
        placeholder="Search Product"
        endAdornment={<IoIosSearch color="black" size={17} />}
      />
    </div>
  );
}

export default SearchBar;
