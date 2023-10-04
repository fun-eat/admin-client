import { ProductInfo } from '../pages/Home/contexts';
import { CategoryResponse } from './category';

export interface Product {
  id: number;
  name: string;
  price: number;
  content: string;
  categoryResponse: CategoryResponse;
}

export interface ProductResponse {
  lastPage: boolean;
  totalElements: number;
  productResponses: Product[];
}

export interface ProductRequestQuery {
  productId: number | null;
  name?: string;
  categoryId?: number;
  totalElements: number | null;
}

const convertToQueryString = (queryKey: string, value: unknown) =>
  value ? `${queryKey}=${value}` : '';

export const getProducts = async ({
  productId,
  name,
  categoryId,
  totalElements,
}: ProductRequestQuery) => {
  const productIdQuery = convertToQueryString('productId', productId);
  const nameQuery = convertToQueryString('name', name);
  const categoryIdQuery = convertToQueryString('categoryId', categoryId);
  const totalElementsQuery = convertToQueryString(
    'totalElements',
    totalElements
  );
  const query = `?${[
    productIdQuery,
    nameQuery,
    categoryIdQuery,
    totalElementsQuery,
  ]
    .filter((query) => query.length > 0)
    .join('&')}`;

  const response = await fetch(`/api/admin/products${query}`);
  const data: ProductResponse = await response.json();
  return data;
};

export const postProduct = (product: unknown) => {
  fetch('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
};

export const putProduct = (productId: number, productInfo: ProductInfo) => {
  fetch(`/api/admin/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productInfo),
  });
};
