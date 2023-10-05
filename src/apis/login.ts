interface LoginRequestBody {
  id: string;
  key: string;
}

export const postLogin = (body: LoginRequestBody) => {
  return fetch('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};