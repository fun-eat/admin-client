import { PropsWithChildren, createContext, useState } from 'react';
import { ProductRequestQuery } from '../../../apis/product';

type ProductSearchQueryAction = (query: ProductRequestQuery) => void;

export const ProductSearchQueryValueContext =
  createContext<ProductRequestQuery | null>(null);
export const ProductSearchQueryActionContext =
  createContext<ProductSearchQueryAction | null>(null);

const ProductSearchQueryProvider = ({ children }: PropsWithChildren) => {
  const [productSearchQuery, setProductSearchQuery] =
    useState<ProductRequestQuery>({
      productId: null,
      totalElements: null,
    });

  const handleValueChange = (query: ProductRequestQuery) => {
    setProductSearchQuery((prev) => ({
      ...prev,
      ...query,
    }));
  };

  return (
    <ProductSearchQueryActionContext.Provider value={handleValueChange}>
      <ProductSearchQueryValueContext.Provider value={productSearchQuery}>
        {children}
      </ProductSearchQueryValueContext.Provider>
    </ProductSearchQueryActionContext.Provider>
  );
};

export default ProductSearchQueryProvider;
