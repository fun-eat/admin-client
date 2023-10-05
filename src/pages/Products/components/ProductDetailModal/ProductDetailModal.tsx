import { FormEventHandler, useMemo, useState } from 'react';

import ProductInfoForm from '../ProductInfoForm';
import { Product } from '../../../../apis/product';
import {
  useProductInfoActionContext,
  useProductInfoValueContext,
  useProductSearchQueryActionContext,
} from '../../hooks';

import ModalPortal from '../../../../components/ModalPortal/ModalPortal';

import {
  buttonWrapper,
  formContainer,
  button,
  editButton,
} from './productDetailModal.css';
import { useProductEditMutation } from '../../../../hooks/queries';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../../constants';
import { usePageActionContext } from '../../../../hooks/contexts';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const FORM_ID = 'product-detail-form';

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { mutate } = useProductEditMutation(product.id);
  const navigate = useNavigate();

  const currentProductInfo = useMemo(
    () => ({
      name: product.name,
      content: product.content,
      price: product.price,
      categoryId: product.categoryResponse.id,
    }),
    [product]
  );
  const productInfo = useProductInfoValueContext();
  const { setCurrentProductInfo, resetProductInfo } =
    useProductInfoActionContext();
  const { resetPage } = usePageActionContext();
  const { handleValueChange } = useProductSearchQueryActionContext();

  const isDisabled = Object.values(productInfo).some((value) => !value);
  const isNotingChanged = Object.entries(productInfo).every(
    ([key, value]) =>
      value === currentProductInfo[key as keyof typeof productInfo]
  );

  const handleCancelEdit = () => {
    setIsReadOnly(true);
    setCurrentProductInfo(currentProductInfo);
  };

  const handleProductEdit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isNotingChanged) {
      alert('변경 사항이 없습니다');
      return;
    }

    mutate(productInfo, {
      onSuccess: () => {
        resetProductInfo();
        handleValueChange({
          id: null,
          totalElements: null,
          prePage: 0,
        });
        resetPage();
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

        alert('상품 수정에 실패했습니다.');
      },
    });
  };

  return (
    <ModalPortal onClose={onClose}>
      <div className={formContainer}>
        <ProductInfoForm
          id={FORM_ID}
          onSubmit={handleProductEdit}
          readOnly={isReadOnly}
        />

        <div className={buttonWrapper}>
          {isReadOnly ? (
            <button
              type='button'
              className={editButton}
              onClick={() => setIsReadOnly(false)}
            >
              수정
            </button>
          ) : (
            <>
              <button
                type='button'
                className={button}
                onClick={handleCancelEdit}
              >
                수정 취소
              </button>
              <button className={button} form={FORM_ID} disabled={isDisabled}>
                {isDisabled ? '수정 불가' : '상품 수정'}
              </button>
            </>
          )}
        </div>
      </div>
    </ModalPortal>
  );
};

export default ProductDetailModal;
