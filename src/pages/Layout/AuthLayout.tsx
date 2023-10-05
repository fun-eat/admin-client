import { Navigate } from 'react-router-dom';

import { ROUTE } from '../../constants';
import { useGetLogin } from '../../hooks/useGetLogin';

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const isLoggedIn = useGetLogin();

  if (!isLoggedIn) {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  return children;
};

export default AuthLayout;
