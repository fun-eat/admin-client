import { FormEventHandler, useRef } from 'react';
import Input from '../../../../components/Input';
import ModalPortal from '../../../../components/ModalPortal';
import { useProductQuery } from '../../../../hooks/queries';
import {
  useProductSearchQueryActionContext,
  useProductSearchQueryValueContext,
} from '../../../Products/hooks';

import {
  container,
  paginationWrapper,
  searchForm,
  section,
  submitButton,
  tableHeader,
} from './productSearchModal.css';
import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../../../components/Table';
import Pagination from '../../../../components/Pagination';
import {
  usePageActionContext,
  usePageValueContext,
} from '../../../../hooks/contexts';
import {
  PRODUCT_SEARCH_COLUMNS,
  PRODUCT_SEARCH_COLUMNS_WIDTH,
} from '../../../../constants';
import ProductSearchRow from './ProductSearchRow';

interface ProductSearchModalProps {
  onClose: () => void;
  applyProduct: (product: { id: number; name: string }) => void;
}

const ProductSearchModal = ({
  onClose,
  applyProduct,
}: ProductSearchModalProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const productSearchQuery = useProductSearchQueryValueContext();
  const { data } = useProductQuery(productSearchQuery);

  const currentPage = usePageValueContext();
  const { onPageChange } = usePageActionContext();

  const handleValueChange = useProductSearchQueryActionContext();

  if (!data) {
    return null;
  }

  const handleProductSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!nameInputRef.current) return;

    const name = nameInputRef.current.value;

    handleValueChange({
      id: null,
      name,
      categoryId: undefined,
      totalElements: null,
      prePage: 0,
    });
  };

  const { lastPage, totalElements, productResponses } = data;

  return (
    <ModalPortal onClose={onClose} height='720px'>
      <div className={container}>
        <form className={searchForm} onSubmit={handleProductSearch}>
          <Input label='상품명' ref={nameInputRef} />
          <button className={submitButton}>검색</button>
        </form>
        <section className={section}>
          <Table>
            <Colgroup widths={PRODUCT_SEARCH_COLUMNS_WIDTH} />
            <TableHeader
              columns={PRODUCT_SEARCH_COLUMNS}
              className={tableHeader}
            />
            <TableBody>
              {productResponses.map((product) => (
                <ProductSearchRow
                  key={product.id}
                  product={product}
                  applyProduct={applyProduct}
                  onClose={onClose}
                />
              ))}
            </TableBody>
          </Table>
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
      </div>
    </ModalPortal>
  );
};

export default ProductSearchModal;
