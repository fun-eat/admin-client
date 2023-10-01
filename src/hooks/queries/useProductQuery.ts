import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../apis/product';

export const useProductQuery = (productId?: number) => {
  return useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProducts(productId),
    keepPreviousData: true,
  });
};
