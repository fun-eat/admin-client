import { FormEventHandler } from 'react';

import ProductInfoForm from '../ProductInfoForm';

import ModalPortal from '../../../../components/ModalPortal/ModalPortal';
import {
  useProductInfoValueContext,
  useProductSearchQueryActionContext,
} from '../../hooks';

import { formContainer, submitButton } from './productAddModal.css';
import { useProductAddMutation } from '../../../../hooks/queries';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../../constants';

interface ProductAddModalProps {
  onClose: () => void;
}

const FORM_ID = 'product-add-form';

const ProductAddModal = ({ onClose }: ProductAddModalProps) => {
  const { mutate } = useProductAddMutation();
  const productInfo = useProductInfoValueContext();
  const navigate = useNavigate();
  const { resetSearchQuery } = useProductSearchQueryActionContext();

  const isDisabled = Object.values(productInfo).some((value) => !value);

  const handleProductAdd: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate(productInfo, {
      onSuccess: () => {
        resetSearchQuery();
        onClose();
      },
      onError: (error) => {
        if (error instanceof Response) {
          if (error.status === 401) {
            alert('로그인이 필요합니다.');
            navigate(ROUTE.HOME, { replace: true });
            return;
          }
        }

        if (error instanceof Error) {
          alert(error.message);
          return;
        }

        alert('상품 추가에 실패했습니다.');
      },
    });
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
