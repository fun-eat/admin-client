import { API_SERVICE_URL } from '../constants';
import { fetchApi } from './fetchApi';

export interface Banner {
  id: number;
  image: string;
  link: string;
}

export const getBanners = async () => {
  const response = await fetchApi(`${API_SERVICE_URL}/banners`, {
    method: 'GET',
  });
  const data: Banner[] = await response.json();
  return data;
};
