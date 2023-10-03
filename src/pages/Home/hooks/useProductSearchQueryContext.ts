import { useContext } from 'react';
import {
  ProductSearchQueryActionContext,
  ProductSearchQueryValueContext,
} from '../contexts';

export const useProductSearchQueryActionContext = () => {
  const action = useContext(ProductSearchQueryActionContext);

  if (!action) {
    throw new Error(
      'useProductSearchQueryActionContext must be used within a ProductSearchQueryProvider'
    );
  }

  return action;
};

export const useProductSearchQueryValueContext = () => {
  const value = useContext(ProductSearchQueryValueContext);

  if (!value) {
    throw new Error(
      'useProductSearchQueryValueContext must be used within a ProductSearchQueryProvider'
    );
  }

  return value;
};
