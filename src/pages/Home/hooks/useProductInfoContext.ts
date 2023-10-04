import { useContext } from 'react';

import { ProductInfoActionContext, ProductInfoValueContext } from '../contexts';

export const useProductInfoActionContext = () => {
  const action = useContext(ProductInfoActionContext);

  if (!action) {
    throw new Error(
      'useProductInfoActionContext must be used within a ProductInfoProvider'
    );
  }

  return action;
};

export const useProductInfoValueContext = () => {
  const value = useContext(ProductInfoValueContext);

  if (!value) {
    throw new Error(
      'useProductInfoValueContext must be used within a ProductInfoProvider'
    );
  }

  return value;
};
