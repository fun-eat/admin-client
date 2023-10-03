import { FormEventHandler, useRef } from 'react';

import {
  usePageActionContext,
  useProductSearchQueryActionContext,
} from '../../hooks';

import Input from '../../../../components/Input';
import { useCategoryQuery } from '../../../../hooks/queries';

import { searchForm, submitButton } from './searchForm.css';

const SearchForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const categorySelectRef = useRef<HTMLSelectElement>(null);

  const handleValueChange = useProductSearchQueryActionContext();
  const { resetPage } = usePageActionContext();

  //  const { data: categories } = useCategoryQuery();

  const handleProductSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!nameInputRef.current || !categorySelectRef.current) return;

    const name = nameInputRef.current.value;
    const categoryId = Number(categorySelectRef.current.value);

    handleValueChange({ name, categoryId, productId: null });
    resetPage();
  };

  return (
    <form className={searchForm} onSubmit={handleProductSearch}>
      <Input label='상품명' ref={nameInputRef} />
      <Input label='카테고리' dataLabel='categoryId' />
      <button className={submitButton}>검색</button>
    </form>
  );
};

export default SearchForm;
