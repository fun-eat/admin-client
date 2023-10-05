import { FormEventHandler, useState } from 'react';

import ProductSearchModal from '../ProductSearchModal';

import Calendar from '../../../../components/Calendar';
import PageProvider from '../../../../contexts/PageContext';
import ProductSearchQueryProvider from '../../../Home/contexts/ProductSearchQueryContext';
import { useReviewSearchQueryActionContext } from '../../hooks';
import { useDisclosure } from '../../../../hooks';
import { convertToDateWithoutTime } from '../../../../utils';

import {
  dateButton,
  text,
  searchForm,
  submitButton,
  wrapper,
  productNameText,
} from './searchForm.css';

interface ProductSearch {
  id: number;
  name: string;
}

const SearchForm = () => {
  const [product, setProduct] = useState<ProductSearch>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  const handleValueChange = useReviewSearchQueryActionContext();
  const {
    isOpen: isCalendarOpen,
    onOpen: openCalendar,
    onClose: closeCalendar,
  } = useDisclosure();
  const {
    isOpen: isProductSearchModalOpen,
    onOpen: openProductSearchModal,
    onClose: closeProductSearchModal,
  } = useDisclosure();

  const applyProduct = (product: ProductSearch) => {
    setProduct(product);
  };

  const applyDateRange = (dateRange: (string | undefined)[]) => {
    const [currentFrom, currentTo] = dateRange;

    setFrom(currentFrom);
    setTo(currentTo);
  };

  const handleReviewSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleValueChange({
      id: null,
      productId: product?.id,
      from,
      to,
      totalElements: null,
      prePage: 0,
    });
  };

  return (
    <>
      <form className={searchForm} onSubmit={handleReviewSearch}>
        <div className={wrapper}>
          <span>상품명</span>
          <button
            type='button'
            className={productNameText}
            onClick={openProductSearchModal}
          >
            {product ? product.name : ''}
          </button>
        </div>
        <div className={wrapper}>
          <span>날짜</span>
          <button type='button' className={dateButton} onClick={openCalendar}>
            <span className={text}>
              {from ? convertToDateWithoutTime(from) : '시작 날짜'}
            </span>
            <span>~</span>
            <span className={text}>
              {to ? convertToDateWithoutTime(to) : '종료 날짜'}
            </span>
          </button>
        </div>
        <button className={submitButton}>검색</button>
      </form>
      {isCalendarOpen && (
        <Calendar
          dateRange={[from, to]}
          applyDateRange={applyDateRange}
          onClose={closeCalendar}
        />
      )}
      {isProductSearchModalOpen && (
        <ProductSearchQueryProvider>
          <PageProvider>
            <ProductSearchModal
              applyProduct={applyProduct}
              onClose={closeProductSearchModal}
            />
          </PageProvider>
        </ProductSearchQueryProvider>
      )}
    </>
  );
};

export default SearchForm;
