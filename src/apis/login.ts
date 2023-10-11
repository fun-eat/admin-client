import { fetchApi } from './fetchApi';

import { API_BASE_URL } from '../constants';

export interface LoginRequestBody {
  id: string;
  key: string;
}

export const getLogin = async () => {
  const response = await fetchApi(`${API_BASE_URL}/logged-check`, {
    method: 'GET',
  });
  const data: true = await response.json();
  return data;
};

export const postLogin = (body: LoginRequestBody) => {
  return fetchApi(`${API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
