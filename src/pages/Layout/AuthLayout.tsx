import { Navigate } from 'react-router-dom';

import { ROUTE } from '../../constants';
import { useLoginQuery } from '../../hooks/queries';

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { data: isLoggedIn } = useLoginQuery();

  if (isLoggedIn === undefined) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  return children;
};

export default AuthLayout;
