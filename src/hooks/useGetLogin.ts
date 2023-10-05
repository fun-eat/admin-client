import { useEffect, useState } from 'react';

import { getLogin } from '../apis/login';

export const useGetLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchLogin = async () => {
      const data = await getLogin();
      setIsLoggedIn(data);
    };
    fetchLogin();
  }, []);

  return isLoggedIn;
};
