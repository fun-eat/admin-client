import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../constants';

interface ErrorProps {
  error: unknown;
}

const ErrorComponent = ({ error }: ErrorProps) => {
  if (error instanceof Response) {
    if (error.status === 401) {
      alert('로그인이 필요합니다.');
      return <Navigate to={ROUTE.HOME} replace />;
    }
  }

  return <div>에러가 발생했습니다.</div>;
};

export default ErrorComponent;
