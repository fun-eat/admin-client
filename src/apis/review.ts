import { convertToQueryString } from '../utils';
import { RequestQuery, ResponseData } from './type';

export interface Review extends ResponseData {
  reviewId: number;
  userName: string;
  content: string;
  productName: string;
  createdAt: string;
}

export interface ReviewResponse {
  lastPage: boolean;
  totalElements: number;
  reviewResponses: Review[];
}

export interface ReviewRequestQuery extends RequestQuery {
  id: number | null;
  productId?: number;
  from?: string;
  to?: string;
  totalElements: number | null;
  prePage?: number;
}

export const getReviews = async ({
  id,
  productId,
  from,
  to,
  totalElements,
  prePage,
}: ReviewRequestQuery) => {
  const idQuery = convertToQueryString('idd', id);
  const productIdQuery = convertToQueryString('productId', productId);
  const fromQuery = convertToQueryString('from', from);
  const toQuery = convertToQueryString('to', to);
  const totalElementsQuery = convertToQueryString(
    'totalElements',
    totalElements
  );
  const prePageQuery = convertToQueryString('prePage', prePage);
  const query = `?${[
    productIdQuery,
    idQuery,
    fromQuery,
    toQuery,
    totalElementsQuery,
    prePageQuery,
  ]
    .filter((query) => query.length > 0)
    .join('&')}`;

  const response = await fetch(`/api/admin/reviews${query}`);
  const data: ReviewResponse = await response.json();
  return data;
};
