import { API_BASE_URL, API_ENDPOINT } from './constants';
import { fetchApi } from './fetchApi';

export interface LoginRequestBody {
  id: string;
  key: string;
}

export const getLogin = async () => {
  const response = await fetchApi(
    `${API_BASE_URL}${API_ENDPOINT.LOGGED_CHECK}`,
    {
      method: 'GET',
    }
  );
  const data: true = await response.json();
  return data;
};

export const postLogin = (body: LoginRequestBody) => {
  return fetchApi(`${API_BASE_URL}${API_ENDPOINT.LOGIN}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
