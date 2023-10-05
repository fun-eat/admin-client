import { useQuery } from '@tanstack/react-query';

import { getLogin } from '../../apis/login';

export const useLoginQuery = () => {
  return useQuery({
    queryKey: ['login'],
    queryFn: () => getLogin(),
    retry: false,
  });
};
