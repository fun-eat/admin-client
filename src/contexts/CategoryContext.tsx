import { PropsWithChildren, createContext, useMemo, useState } from 'react';

import { CategoryResponse } from '../apis/category';
import mockCategories from '../mocks/categories.json';

interface CategoryContextValue {
  categories: CategoryResponse[];
  addCategories: (currentCategories: CategoryResponse[]) => void;
}

const isDevelopment = process.env.NODE_ENV === 'development';
const INIT_CATEGORIES: CategoryResponse[] = isDevelopment ? mockCategories : [];

export const CategoryContext = createContext<CategoryContextValue | null>(null);

const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] =
    useState<CategoryResponse[]>(INIT_CATEGORIES);

  const addCategories = (currentCategories: CategoryResponse[]) => {
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
