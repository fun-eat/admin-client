import { QueryClient, useMutation } from '@tanstack/react-query';

import {
  ProductAddRequestBody,
  postProduct,
  putProduct,
} from '../../apis/product';

export const useProductAddMutation = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (body: ProductAddRequestBody) => postProduct(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useProductEditMutation = (productId: number) => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (body: ProductAddRequestBody) => putProduct(productId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
