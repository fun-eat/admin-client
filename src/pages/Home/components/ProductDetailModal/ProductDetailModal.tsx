import ProductInfoForm from '../ProductInfoForm';

import ModalPortal from '../../../../components/ModalPortal/ModalPortal';

import { formContainer } from './productDetailModal.css';

interface ProductDetailModalProps {
  onClose: () => void;
}

const ProductDetailModal = ({ onClose }: ProductDetailModalProps) => {
  return (
    <ModalPortal onClose={onClose}>
      <div className={formContainer}>
        <ProductInfoForm id='1' onSubmit={() => {}} readOnly />
      </div>
    </ModalPortal>
  );
};

export default ProductDetailModal;
