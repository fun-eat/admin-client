import Input from '../../components/Input';

import { container, form, submitButton, title } from './home.css';

const Home = () => {
  return (
    <main className={container}>
      <h1 className={title}>FUNEAT BACK OFFICE</h1>
      <form className={form}>
        <Input label='아이디' />
        <Input label='비밀번호' type='password' />
        <button className={submitButton}>로그인</button>
      </form>
    </main>
  );
};

export default Home;
