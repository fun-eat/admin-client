import { FormEventHandler } from 'react';

import {
  useProductInfoActionContext,
  useProductInfoValueContext,
} from '../../hooks';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import Textarea from '../../../../components/Textarea';
import { useCategoryQuery } from '../../../../hooks/queries';

import { form } from './productInfoForm.css';

interface ProductInfoFormProps {
  id: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  readOnly?: boolean;
}

const ProductInfoForm = ({
  id,
  onSubmit,
  readOnly = false,
}: ProductInfoFormProps) => {
  const { name, price, content, categoryId } = useProductInfoValueContext();
  const { handleValueChange } = useProductInfoActionContext();

  const { data: categories } = useCategoryQuery();

  return (
    <form id={id} className={form} onSubmit={onSubmit}>
      <Input
        label='상품명'
        name='name'
        value={name}
        onChange={handleValueChange}
        readOnly={readOnly}
      />
      <Select
        label='카테고리'
        name='categoryId'
        onChange={handleValueChange}
        disabled={readOnly}
      >
        {categories?.map((category) => (
          <option
            key={category.id}
            value={category.id}
            selected={categoryId === category.id}
          >
            {category.name}
          </option>
        ))}
      </Select>
      <Input
        label='가격'
        name='price'
        type='number'
        value={price}
        min={0}
        step={10}
        onChange={handleValueChange}
        readOnly={readOnly}
      />
      <Textarea
        label='상품설명'
        name='content'
        value={content}
        onChange={handleValueChange}
        readOnly={readOnly}
      />
    </form>
  );
};

export default ProductInfoForm;
