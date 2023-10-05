import { FormEventHandler, useState } from 'react';

import {
  useProductSearchQueryActionContext,
  useProductSearchQueryValueContext,
} from '../../hooks';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { useCategoryQuery } from '../../../../hooks/queries';
import { usePageActionContext } from '../../../../hooks/contexts';

import { searchForm, submitButton } from './searchForm.css';

const SearchForm = () => {
  const { name, categoryId } = useProductSearchQueryValueContext();

  const [currentName, setCurrentName] = useState(name);
  const [currentCategoryId, setCurrentCategoryId] = useState(categoryId ?? '');

  const { handleValueChange } = useProductSearchQueryActionContext();
  const { resetPage } = usePageActionContext();

  const { data: categories } = useCategoryQuery();

  const handleProductSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const categoryId =
      typeof currentCategoryId === 'number' ? currentCategoryId : undefined;

    handleValueChange({
      id: null,
      name: currentName,
      categoryId,
      totalElements: null,
      prePage: 0,
    });
    resetPage();
  };

  return (
    <form className={searchForm} onSubmit={handleProductSearch}>
      <Input
        label='상품명'
        value={currentName}
        onChange={({ currentTarget: { value } }) => setCurrentName(value)}
      />
      <Select
        label='카테고리'
        onChange={({ target: { value } }) => setCurrentCategoryId(value)}
      >
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
