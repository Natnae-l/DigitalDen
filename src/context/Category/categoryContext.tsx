import { ReactNode, createContext, useState } from "react";

export type CategoryContextType = {
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
