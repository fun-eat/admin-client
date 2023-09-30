import { useEffect } from 'react';

import { getProductCategories } from '../apis/category';
import { useCategoryContext } from './context/useCategoryContext';

export const useGetCategories = () => {
  const { categories, addCategories } = useCategoryContext();

  useEffect(() => {
    if (categories.length > 0) {
      return;
    }

    const fetchCategories = async () => {
      const data = await getProductCategories();
      addCategories(data);
    };

    fetchCategories();
  }, [addCategories, categories.length]);
};
