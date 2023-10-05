import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Input from '../../components/Input';

import { container, form, submitButton, title } from './home.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation, useLoginQuery } from '../../hooks/queries';
import { ROUTE } from '../../constants';

const Home = () => {
  const [memberInfo, setMemberInfo] = useState({
    id: '',
    key: '',
  });
  const navigate = useNavigate();
  const { mutate } = useLoginMutation();
  const { data: isLoggedIn } = useLoginQuery();

  if (isLoggedIn) {
    return <Navigate to={ROUTE.PRODUCT} replace />;
  }

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    setMemberInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate(memberInfo, {
      onSuccess: () => {
        navigate('/products');
      },
      onError: (error) => {
        if (error instanceof Error) {
          alert(error.message);
          return;
        }
        alert('로그인에 실패했습니다.');
      },
    });
  };

  return (
    <main className={container}>
      <h1 className={title}>FUNEAT BACK OFFICE</h1>
      <form className={form} onSubmit={handleLogin}>
        <Input label='아이디' name='id' onChange={handleValueChange} />
        <Input
          label='비밀번호'
          type='password'
          name='key'
          onChange={handleValueChange}
        />
        <button className={submitButton}>로그인</button>
      </form>
    </main>
  );
};

export default Home;
