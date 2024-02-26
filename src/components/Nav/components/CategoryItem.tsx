import { Option, Select, selectClasses } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  categories: string[];
  categoryName: string;
  setSelectedContext: (selected: string) => void;
  variant?: boolean;
  sizeCate: "sm" | "md" | "lg";
}

export default function UnstyledSelectCustomRenderValue({
  categories,
  categoryName,
  setSelectedContext,
  variant = false,
  sizeCate,
}: Props) {
  return (
    <Select
      placeholder={categoryName}
      variant={variant ? "soft" : "plain"}
      indicator={<KeyboardArrowDown />}
      sx={{
        minWidth: 120,
        borderRadius: 18,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
      size={sizeCate}
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
