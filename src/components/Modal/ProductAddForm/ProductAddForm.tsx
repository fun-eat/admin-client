import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';

import ModalPortal from '../ModalPortal';

import { Category, getProductCategories } from '../../../apis/category';
import { postProduct } from '../../../apis/product';
import { CATEGORIES } from '../../../constants';

import {
  form,
  formSection,
  label,
  submitButton,
  textarea,
} from './productAddForm.css';

const isDevelopment = process.env.NODE_ENV === 'development';
const INIT_CATEGORIES: Category[] = isDevelopment ? CATEGORIES : [];

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
  const [categories, setCategories] = useState<Category[]>(INIT_CATEGORIES);

  useEffect(() => {
    if (isDevelopment) return;

    const fetchCategories = async () => {
      const data = await getProductCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

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
        <label className={label}>
          <span>상품명</span>
          <input
            type='text'
            className={formSection}
            onChange={handleValueChange}
            data-label='name'
          />
        </label>
        <label className={label}>
          <span>카테고리</span>
          <select
            className={formSection}
            onChange={handleValueChange}
            data-label='categoryId'
          >
            <option value=''>카테고리를 선택하세요</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          <span>가격</span>
          <input
            type='number'
            step={10}
            min={0}
            className={formSection}
            onChange={handleValueChange}
            data-label='price'
          />
        </label>
        <label className={label}>
          <span>상품설명</span>
          <textarea
            className={textarea}
            onChange={handleValueChange}
            data-label='content'
          />
        </label>
        <button className={submitButton} disabled={isDisabled}>
          {isDisabled ? '모든 항목을 입력해주세요' : '상품추가'}
        </button>
      </form>
    </ModalPortal>
  );
};

export default ProductAddForm;
