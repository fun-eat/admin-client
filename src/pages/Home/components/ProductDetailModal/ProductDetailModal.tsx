import { FormEventHandler, useState } from 'react';

import ProductInfoForm from '../ProductInfoForm';
import { Product } from '../../../../apis/product';
import {
  useProductInfoActionContext,
  useProductInfoValueContext,
} from '../../hooks';

import ModalPortal from '../../../../components/ModalPortal/ModalPortal';

import { buttonWrapper, formContainer, button } from './productDetailModal.css';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const productInfo = useProductInfoValueContext();
  const { setCurrentProductInfo } = useProductInfoActionContext();

  const formId = 'product-detail-form';
  const isDisabled = Object.values(productInfo).some((value) => !value);

  const handleCancelEdit = () => {
    const {
      name,
      content,
      price,
      categoryResponse: { id: categoryId },
    } = product;

    setIsReadOnly(true);
    setCurrentProductInfo({ name, content, price, categoryId });
  };

  const handleProductEdit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      // TODO: 상품 수정 API 호출
      onClose();
    } catch {
      alert('상품 수정 실패');
    }
  };

  const handleProductDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        // TODO: 상품 삭제 API 호출
        onClose();
      } catch {
        alert('상품 삭제 실패');
      }
    }
  };

  return (
    <ModalPortal onClose={onClose}>
      <div className={formContainer}>
        <ProductInfoForm
          id={formId}
          onSubmit={handleProductEdit}
          readOnly={isReadOnly}
        />
        {isReadOnly ? (
          <div className={buttonWrapper}>
            <button
              type='button'
              className={button}
              onClick={() => setIsReadOnly(false)}
            >
              수정
            </button>
            <button
              type='button'
              className={button}
              onClick={handleProductDelete}
            >
              삭제
            </button>
          </div>
        ) : (
          <div className={buttonWrapper}>
            <button className={button} disabled={isDisabled}>
              {isDisabled ? '모든 항목을 입력해주세요' : '상품 수정'}
            </button>
            <button type='button' className={button} onClick={handleCancelEdit}>
              수정 취소
            </button>
          </div>
        )}
      </div>
    </ModalPortal>
  );
};

export default ProductDetailModal;
