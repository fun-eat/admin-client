import ProductRow from './components/ProductRow';

import Layout from '../../components/Layout';
import { ProductAddForm } from '../../components/Modal';
import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';
import Pagination from '../../components/Pagination';
import { PRODUCT_COLUMNS, PRODUCT_COLUMNS_WIDTH } from '../../constants';
import { useDisclosure } from '../../hooks';
import mockProducts from '../../mocks/products.json';

import {
  addButton,
  paginationWrapper,
  tableWrapper,
  title,
  titleWrapper,
} from './home.css';
import { useState } from 'react';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <TableBody>
            {mockProducts.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
        <div className={paginationWrapper}>
          <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      </section>

      {isOpen && <ProductAddForm onClose={onClose} />}
    </Layout>
  );
};

export default Home;
