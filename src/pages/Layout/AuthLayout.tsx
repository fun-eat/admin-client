import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { ROUTE } from '../../constants';
import { useLoginQuery } from '../../hooks/queries';

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { data: isLoggedIn, isError } = useLoginQuery();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isError) {
      queryClient.removeQueries({ queryKey: ['login'] });
      setShouldRedirect(true);
    }
  }, [isError, queryClient]);

  if (shouldRedirect) {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  if (isLoggedIn === undefined) {
    return null;
  }

  return children;
};

export default AuthLayout;
