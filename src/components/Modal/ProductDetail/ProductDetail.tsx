import { ProductResponse } from '../../../apis/product';
import ModalPortal from '../ModalPortal';

interface ProductDetailProps {
  product: ProductResponse;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const {
    name,
    content,
    price,
    categoryResponse: { name: categoryName },
  } = product;

  return <ModalPortal onClose={onClose}>{name}</ModalPortal>;
};

export default ProductDetail;
