import { FormEventHandler, useMemo, useState } from 'react';

import ProductInfoForm from '../ProductInfoForm';
import { Product, putProduct } from '../../../../apis/product';
import {
  useProductInfoActionContext,
  useProductInfoValueContext,
} from '../../hooks';

import ModalPortal from '../../../../components/ModalPortal/ModalPortal';

import {
  buttonWrapper,
  formContainer,
  button,
  editButton,
} from './productDetailModal.css';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const formId = 'product-detail-form';

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

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

    try {
      putProduct(product.id, productInfo);
      resetProductInfo();
      onClose();
    } catch {
      alert('상품 수정 실패');
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
              <button className={button} form={formId} disabled={isDisabled}>
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
