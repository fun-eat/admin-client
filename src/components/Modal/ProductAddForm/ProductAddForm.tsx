import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import ModalPortal from '../ModalPortal';
import Input from '../../Input';
import Select from '../../Select';
import Textarea from '../../Textarea';

import { postProduct } from '../../../apis/product';
import { useCategoryQuery } from '../../../hooks/queries';

import { form, submitButton } from './productAddForm.css';

interface ProductAddFormProps {
  onClose: () => void;
}

const ProductAddForm = ({ onClose }: ProductAddFormProps) => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    price: '',
    content: '',
    categoryId: '',
  });
  const { data: categories } = useCategoryQuery();

  const isDisabled = Object.values(productInfo).some((value) => !value);

  const handleValueChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const {
      dataset: { label },
      value,
    } = e.target;

    if (!label) return;

    setProductInfo((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleProductAdd: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      postProduct(productInfo);
      onClose();
    } catch {
      alert('상품 추가 실패');
    }
  };

  return (
    <ModalPortal onClose={onClose}>
      <form className={form} onSubmit={handleProductAdd}>
        <Input label='상품명' dataLabel='name' onChange={handleValueChange} />
        <Select
          label='카테고리'
          dataLabel='categoryId'
          onChange={handleValueChange}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <Input label='가격' dataLabel='price' onChange={handleValueChange} />
        <Textarea
          label='상품설명'
          dataLabel='content'
          onChange={handleValueChange}
        />
        <button className={submitButton} disabled={isDisabled}>
          {isDisabled ? '모든 항목을 입력해주세요' : '상품추가'}
        </button>
      </form>
    </ModalPortal>
  );
};

export default ProductAddForm;
