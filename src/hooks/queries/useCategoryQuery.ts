import { useQuery } from '@tanstack/react-query';

import { getProductCategories } from '../../apis/category';

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => getProductCategories(),
    staleTime: Infinity,
  });
};
