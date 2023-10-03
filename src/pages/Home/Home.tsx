import ProductRow from './components/ProductRow';

import SearchForm from './components/SearchForm';
import {
  usePageActionContext,
  usePageValueContext,
  useProductSearchQueryValueContext,
} from './hooks';

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
  searchSection,
  tableWrapper,
  title,
  titleWrapper,
} from './home.css';

const Home = () => {
  const productSearchQuery = useProductSearchQueryValueContext();
  const { data } = useProductQuery(productSearchQuery);

  const currentPage = usePageValueContext();
  const { onPageChange } = usePageActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!data) {
    return null;
  }

  const { lastPage, productResponses } = data;

  return (
    <Layout>
      <div className={titleWrapper}>
        <h1 className={title}>편의점 상품</h1>
        <button type='button' className={addButton} onClick={onOpen}>
          상품 추가
        </button>
      </div>
      <section className={searchSection}>
        <SearchForm />
      </section>
      <section className={tableWrapper}>
        <Table>
          <Colgroup widths={PRODUCT_COLUMNS_WIDTH} />
          <TableHeader columns={PRODUCT_COLUMNS} />
          <TableBody>
            {productResponses.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
        <div className={paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange(productResponses)}
            isLastPage={lastPage}
          />
        </div>
      </section>
      {isOpen && <ProductAddForm onClose={onClose} />}
    </Layout>
  );
};

export default Home;
