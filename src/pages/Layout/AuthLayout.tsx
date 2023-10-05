import { Navigate } from 'react-router-dom';

import { ROUTE } from '../../constants';
import { useGetLogin } from '../../hooks';

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const isLoggedIn = useGetLogin();

  if (isLoggedIn === null) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  return children;
};

export default AuthLayout;
