import { API_BASE_URL } from '../constants';
import { fetchApi } from './fetchApi';

export interface CategoryResponse {
  id: number;
  name: string;
  image: string;
}

export const getProductCategories = async () => {
  const response = await fetchApi(`${API_BASE_URL}/categories`, {
    method: 'GET',
  });
  const data: CategoryResponse[] = await response.json();
  return data;
};
