import Layout from '../../components/Layout';
import { ProductAddForm } from '../../components/Modal';
import { useDisclosure } from '../../hooks';
import { addButton } from './home.css';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <div>레전드 어드민 커즈하아</div>
      <button type='button' className={addButton} onClick={onOpen}>
        상품 추가
      </button>
      {isOpen && <ProductAddForm onClose={onClose} />}
    </Layout>
  );
};

export default Home;
