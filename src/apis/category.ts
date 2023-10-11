import { API_BASE_URL } from '../constants';

export interface CategoryResponse {
  id: number;
  name: string;
  image: string;
}

export const getProductCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories`);
  const data: CategoryResponse[] = await response.json();
  return data;
};
