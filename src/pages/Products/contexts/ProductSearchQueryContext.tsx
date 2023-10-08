import { PropsWithChildren, createContext, useState } from 'react';
import { ProductRequestQuery } from '../../../apis/product';

interface ProductSearchQueryAction {
  handleValueChange: (query: ProductRequestQuery) => void;
  resetSearchQuery: () => void;
}

export const ProductSearchQueryValueContext =
  createContext<ProductRequestQuery | null>(null);
export const ProductSearchQueryActionContext =
  createContext<ProductSearchQueryAction | null>(null);

const INIT_PRODUCT_SEARCH_QUERY: ProductRequestQuery = {
  id: null,
  totalElements: null,
  prePage: 0,
};

const ProductSearchQueryProvider = ({ children }: PropsWithChildren) => {
  const [productSearchQuery, setProductSearchQuery] = useState(
    INIT_PRODUCT_SEARCH_QUERY
  );

  const handleValueChange = (query: ProductRequestQuery) => {
    setProductSearchQuery((prev) => ({
      ...prev,
      ...query,
    }));
  };

  const resetSearchQuery = () => {
    setProductSearchQuery(INIT_PRODUCT_SEARCH_QUERY);
  };

  const action = {
    handleValueChange,
    resetSearchQuery,
  };

  return (
    <ProductSearchQueryActionContext.Provider value={action}>
      <ProductSearchQueryValueContext.Provider value={productSearchQuery}>
        {children}
      </ProductSearchQueryValueContext.Provider>
    </ProductSearchQueryActionContext.Provider>
  );
};

export default ProductSearchQueryProvider;
