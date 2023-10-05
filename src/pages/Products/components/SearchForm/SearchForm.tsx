import { FormEventHandler, useRef } from 'react';

import { useProductSearchQueryActionContext } from '../../hooks';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { useCategoryQuery } from '../../../../hooks/queries';
import { usePageActionContext } from '../../../../hooks/contexts';

import { searchForm, submitButton } from './searchForm.css';

const SearchForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const categorySelectRef = useRef<HTMLSelectElement>(null);

  const handleValueChange = useProductSearchQueryActionContext();
  const { resetPage } = usePageActionContext();

  const { data: categories } = useCategoryQuery();

  const handleProductSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!nameInputRef.current || !categorySelectRef.current) return;

    const categoryValue = parseInt(categorySelectRef.current.value, 10);

    const name = nameInputRef.current.value;
    const categoryId = !isNaN(categoryValue) ? categoryValue : undefined;

    handleValueChange({
      id: null,
      name,
      categoryId,
      totalElements: null,
      prePage: 0,
    });
    resetPage();
  };

  return (
    <form className={searchForm} onSubmit={handleProductSearch}>
      <Input label='상품명' ref={nameInputRef} />
      <Select label='카테고리' ref={categorySelectRef}>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
      <button className={submitButton}>검색</button>
    </form>
  );
};

export default SearchForm;