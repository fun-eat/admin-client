import { fetchApi } from './fetchApi';

export interface LoginRequestBody {
  id: string;
  key: string;
}

export const getLogin = async () => {
  const response = await fetchApi('/api/admin/logged-check', {
    method: 'GET',
  });
  const data: true = await response.json();
  return data;
};

export const postLogin = (body: LoginRequestBody) => {
  return fetchApi('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
