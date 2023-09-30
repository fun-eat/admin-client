import { PropsWithChildren, createContext, useMemo, useState } from 'react';

import { Category } from '../apis/category';
import { CATEGORIES } from '../constants';

interface CategoryContextValue {
  categories: Category[];
  addCategories: (currentCategories: Category[]) => void;
}

const isDevelopment = process.env.NODE_ENV === 'development';
const INIT_CATEGORIES: Category[] = isDevelopment ? CATEGORIES : [];

export const CategoryContext = createContext<CategoryContextValue | null>(null);

const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category[]>(INIT_CATEGORIES);

  const addCategories = (currentCategories: Category[]) => {
    setCategories(currentCategories);
  };

  const value = useMemo(
    () => ({
      categories,
      addCategories,
    }),
    [categories]
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
