import { Option, Select, selectClasses } from "@mui/joy";
// import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  categories: string[];
  categoryName: string;
  setSelectedContext: (selected: string) => void;
}

export default function UnstyledSelectCustomRenderValue({
  categories,
  categoryName,
  setSelectedContext,
}: Props) {
  return (
    <Select
      placeholder={categoryName}
      variant="plain"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 140,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {categories.map((category) => (
        <Option
          value={category}
          key={category}
          onClick={() => setSelectedContext(category)}
        >
          {category}
        </Option>
      ))}
    </Select>
  );
}
