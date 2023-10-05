import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  ProductAddRequestBody,
  postProduct,
  putProduct,
} from '../../apis/product';

export const useProductAddMutation = () => {
  return useMutation({
    mutationFn: (body: ProductAddRequestBody) => postProduct(body),
  });
};

export const useProductEditMutation = (productId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ProductAddRequestBody) => putProduct(productId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
