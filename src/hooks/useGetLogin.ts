import { useEffect, useState } from 'react';

import { getLogin } from '../apis/login';

export const useGetLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchLogin = async () => {
      const data = await getLogin();
      setIsLoggedIn(data);
    };
    fetchLogin();
  }, []);

  return isLoggedIn;
};
