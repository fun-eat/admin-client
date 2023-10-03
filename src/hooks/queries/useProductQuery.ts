import { useQuery } from '@tanstack/react-query';

import { ProductRequestQuery, getProducts } from '../../apis/product';

export const useProductQuery = (queries: ProductRequestQuery) => {
  return useQuery({
    queryKey: ['products', queries],
    queryFn: () => getProducts(queries),
    keepPreviousData: true,
  });
};
