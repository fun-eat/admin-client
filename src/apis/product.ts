import { CategoryResponse } from './category';

export interface ProductResponse {
  id: number;
  name: string;
  price: number;
  content: string;
  categoryResponse: CategoryResponse;
}

const convertToQueryString = (queryKey: string, value: unknown) =>
  value ? `${queryKey}=${value}` : '';

export interface ProductRequestQuery {
  productId: number | null;
  name?: string;
  categoryId?: number;
}

export const getProducts = async ({
  productId,
  name,
  categoryId,
}: ProductRequestQuery) => {
  const productIdQuery = convertToQueryString('productId', productId);
  const nameQuery = convertToQueryString('name', name);
  const categoryIdQuery = convertToQueryString('categoryId', categoryId);
  const query = `?${[productIdQuery, nameQuery, categoryIdQuery]
    .filter((query) => query.length > 0)
    .join('&')}`;

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
