import { ReactNode, createContext, useState } from "react";

export type CategoryContextType = {
  category: string;
  setCategory: (category: string) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  category: "",
  setCategory: () => {},
});

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [category, setCategory] = useState<string>("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
