import { API_BASE_URL, API_ENDPOINT } from './constants';
import { fetchApi } from './fetchApi';

export interface CategoryResponse {
  id: number;
  name: string;
  image: string;
}

export const getProductCategories = async () => {
  const response = await fetchApi(`${API_BASE_URL}${API_ENDPOINT.CATEGORY}`, {
    method: 'GET',
  });
  const data: CategoryResponse[] = await response.json();
  return data;
};
