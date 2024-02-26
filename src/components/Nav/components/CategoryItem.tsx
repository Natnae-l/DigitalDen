import { Option, Select, selectClasses } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  categories: string[];
  categoryName: string;
  setSelectedContext: (selected: string) => void;
  variant?: boolean;
  sizeCate: "sm" | "md" | "lg";
  compType?: string;
}

export default function UnstyledSelectCustomRenderValue({
  categories,
  categoryName,
  setSelectedContext,
  variant = false,
  sizeCate,
  compType,
}: Props) {
  return (
    <Select
      defaultValue={categoryName}
      variant={variant ? "soft" : "plain"}
      indicator={<KeyboardArrowDown color="success" className="col" />}
      className={compType}
      sx={{
        minWidth: 110,
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
      <Option
        value={categoryName}
        key={categoryName}
        onClick={() => setSelectedContext(categoryName)}
      >
        {categoryName}
      </Option>
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
