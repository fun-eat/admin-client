import Layout from '../../components/Layout';
import { ProductAddForm } from '../../components/Modal';
import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';

import { PRODUCT_COLUMNS, PRODUCT_COLUMNS_WIDTH } from '../../constants';
import { useDisclosure } from '../../hooks';
import { addButton, tableWrapper, title, titleWrapper } from './home.css';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <div className={titleWrapper}>
        <h1 className={title}>레전드 어드민 커즈하아</h1>
        <button type='button' className={addButton} onClick={onOpen}>
          상품 추가
        </button>
      </div>
      <div></div>
      <section className={tableWrapper}>
        <Table>
          <Colgroup widths={PRODUCT_COLUMNS_WIDTH} />
          <TableHeader columns={PRODUCT_COLUMNS} />
          <TableBody />
        </Table>
      </section>

      {isOpen && <ProductAddForm onClose={onClose} />}
    </Layout>
  );
};

export default Home;
