import ProductRow from './components/ProductRow';
import SearchForm from './components/SearchForm';
import ProductInfoProvider from './contexts/ProductInfoContext';
import {
  useProductSearchQueryActionContext,
  useProductSearchQueryValueContext,
} from './hooks';

import ProductAddModal from './components/ProductAddModal';
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
  tableTitle,
  tableWrapper,
  title,
  titleWrapper,
} from './products.css';
import {
  usePageActionContext,
  usePageValueContext,
} from '../../hooks/contexts';
import ErrorComponent from '../../components/ErrorComponent';

const Products = () => {
  const productSearchQuery = useProductSearchQueryValueContext();
  const { data, error } = useProductQuery(productSearchQuery);

  const currentPage = usePageValueContext();
  const { onPageChange } = usePageActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleValueChange } = useProductSearchQueryActionContext();

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!data) {
    return null;
  }

  const { lastPage, totalElements, productResponses } = data;

  return (
    <>
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
        <h2 className={tableTitle}>
          총 {totalElements.toLocaleString('ko-KR')}개의 상품이 검색되었습니다.
        </h2>
        <ProductInfoProvider>
          <Table>
            <Colgroup widths={PRODUCT_COLUMNS_WIDTH} />
            <TableHeader columns={PRODUCT_COLUMNS} />
            <TableBody>
              {productResponses.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </TableBody>
          </Table>
        </ProductInfoProvider>
        <div className={paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange(
              productResponses,
              totalElements,
              handleValueChange
            )}
            isLastPage={lastPage}
          />
        </div>
      </section>
      {isOpen && (
        <ProductInfoProvider>
          <ProductAddModal onClose={onClose} />
        </ProductInfoProvider>
      )}
    </>
  );
};

export default Products;
