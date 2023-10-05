import { Navigate } from 'react-router-dom';

import { ROUTE } from '../../constants';
import { useLoginQuery } from '../../hooks/queries';
import { useQueryClient } from '@tanstack/react-query';

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { data: isLoggedIn, isError } = useLoginQuery();
  const queryClient = useQueryClient();

  if (isError) {
    queryClient.removeQueries({ queryKey: ['login'] });
    return <Navigate to={ROUTE.HOME} replace />;
  }

  if (isLoggedIn === undefined) {
    return null;
  }

  return children;
};

export default AuthLayout;
