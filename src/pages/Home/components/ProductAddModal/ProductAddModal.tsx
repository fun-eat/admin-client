import { FormEventHandler } from 'react';

import ProductInfoForm from '../ProductInfoForm';

import { postProduct } from '../../../../apis/product';
import ModalPortal from '../../../../components/ModalPortal/ModalPortal';
import { useProductInfoValueContext } from '../../hooks';

import { formContainer, submitButton } from './productAddModal.css';

interface ProductAddModalProps {
  onClose: () => void;
}

const FORM_ID = 'product-add-form';

const ProductAddModal = ({ onClose }: ProductAddModalProps) => {
  const productInfo = useProductInfoValueContext();

  const isDisabled = Object.values(productInfo).some((value) => !value);

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
      <div className={formContainer}>
        <ProductInfoForm id={FORM_ID} onSubmit={handleProductAdd} />
        <button className={submitButton} form={FORM_ID} disabled={isDisabled}>
          {isDisabled ? '모든 항목을 입력해주세요' : '상품추가'}
        </button>
      </div>
    </ModalPortal>
  );
};

export default ProductAddModal;
