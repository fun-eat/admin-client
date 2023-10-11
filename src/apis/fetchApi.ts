export interface ErrorResponse {
  code: number;
  message: string;
}

type RequestOption = Omit<RequestInit, 'credentials'>;

export const fetchApi = async (url: string, options: RequestOption) => {
  if (!navigator.onLine) {
    throw new Error('네트워크 오프라인이 감지되었습니다');
  }

  const response = await fetch(url, { ...options, credentials: 'include' });

  if (!response.ok) {
    throw response;
  }

  return response;
};
