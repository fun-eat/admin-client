import { CategoryResponse } from './category';

export interface ProductResponse {
  id: number;
  name: string;
  price: number;
  content: string;
  categoryResponse: CategoryResponse;
}

export const getProducts = async (productId?: number) => {
  const query = productId ? `?productId=${productId}` : '';
  const response = await fetch(`/api/admin/products${query}`);
  const data: ProductResponse[] = await response.json();
  return data;
};

export const postProduct = (product: unknown) => {
  fetch('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
};
