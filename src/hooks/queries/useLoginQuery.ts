import { useQuery } from '@tanstack/react-query';

import { getLogin } from '../../apis/login';

export const useLoginQuery = () => {
  return useQuery({
    queryKey: ['login'],
    queryFn: () => getLogin(),
    cacheTime: 30 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
