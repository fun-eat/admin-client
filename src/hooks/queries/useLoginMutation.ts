import { useMutation } from '@tanstack/react-query';

import { LoginRequestBody, postLogin } from '../../apis/login';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (body: LoginRequestBody) => postLogin(body),
  });
};
