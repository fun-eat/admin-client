import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Input from '../../components/Input';

import { container, form, submitButton, title } from './home.css';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../hooks/queries';

const Home = () => {
  const [memberInfo, setMemberInfo] = useState({
    id: '',
    key: '',
  });
  const navigate = useNavigate();
  const { mutate } = useLoginMutation();

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
      onError: () => {
        alert('로그인 실패');
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
