import { useContext } from 'react';

import { CategoryContext } from '../../contexts/CategoryContext';

export const useCategoryContext = () => {
  const value = useContext(CategoryContext);

  if (!value) {
    throw new Error(
      'useCategoryContext must be used within a CategoryProvider'
    );
  }

  return value;
};
