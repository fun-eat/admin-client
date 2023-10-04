import { Product } from '../../../apis/product';
import ProductInfoForm from '../../../pages/Home/components/ProductInfoForm';
import ModalPortal from '../ModalPortal';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const {
    name,
    content,
    price,
    categoryResponse: { name: categoryName },
  } = product;

  return (
    <ModalPortal onClose={onClose}>
      <ProductInfoForm />
    </ModalPortal>
  );
};

export default ProductDetail;
