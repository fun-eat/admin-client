import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  ProductAddRequestBody,
  postProduct,
  putProduct,
} from '../../apis/product';

export const useProductAddMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ProductAddRequestBody) => postProduct(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
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
