import { useRef, useState } from 'react';

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
import { useProductQuery } from '../../hooks/queries';
import { useDisclosure } from '../../hooks';

import {
  addButton,
  paginationWrapper,
  tableWrapper,
  title,
  titleWrapper,
} from './home.css';
import { getLastProductId } from '../../utils';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastProductId, setLastProductId] = useState<number>();
  const prevLastProductId = useRef<number>();

  const { data: products } = useProductQuery(lastProductId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (products === undefined) {
    return null;
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);

    setLastProductId(prevLastProductId.current);
    prevLastProductId.current = getLastProductId(products);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);

    const currentLastProductID = getLastProductId(products);
    prevLastProductId.current = lastProductId;
    setLastProductId(currentLastProductID);
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
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
        <div className={paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </section>
      {isOpen && <ProductAddForm onClose={onClose} />}
    </Layout>
  );
};

export default Home;
