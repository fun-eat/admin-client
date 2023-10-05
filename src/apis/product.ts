import { convertToQueryString } from '../utils';
import { CategoryResponse } from './category';
import { fetchApi } from './fetchApi';
import { RequestQuery, ResponseData } from './type';

export interface Product extends ResponseData {
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

export interface ProductRequestQuery extends RequestQuery {
  id: number | null;
  name?: string;
  categoryId?: number;
  totalElements: number | null;
  prePage: number;
}

export interface ProductAddRequestBody {
  name: string;
  price: number;
  content: string;
  categoryId?: number;
}

export const getProducts = async ({
  id,
  name,
  categoryId,
  totalElements,
  prePage,
}: ProductRequestQuery) => {
  const idQuery = convertToQueryString('id', id);
  const nameQuery = convertToQueryString('name', name);
  const categoryIdQuery = convertToQueryString('categoryId', categoryId);
  const totalElementsQuery = convertToQueryString(
    'totalElements',
    totalElements
  );
  const prePageQuery = convertToQueryString('prePage', prePage);
  const query = `?${[
    idQuery,
    nameQuery,
    categoryIdQuery,
    totalElementsQuery,
    prePageQuery,
  ]
    .filter((query) => query.length > 0)
    .join('&')}`;

  const response = await fetchApi(`/api/admin/products${query}`, {
    method: 'GET',
  });
  const data: ProductResponse = await response.json();
  return data;
};

export const postProduct = (product: ProductAddRequestBody) => {
  return fetchApi('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
};

export const putProduct = (
  productId: number,
  productInfo: ProductAddRequestBody
) => {
  return fetchApi(`/api/admin/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productInfo),
  });
};
