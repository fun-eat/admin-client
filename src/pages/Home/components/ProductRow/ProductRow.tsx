import { Product } from '../../../../apis/product';
import ProductDetailModal from '../ProductDetailModal';
import { td } from '../../../../components/Table/table.css';
import { useDisclosure } from '../../../../hooks';
import { formatCurrency } from '../../../../utils';
import { useProductInfoActionContext } from '../../hooks';

import { tr } from './productRow.css';

interface ProductRowProps {
  product: Product;
}

const ProductRow = ({ product }: ProductRowProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setCurrentProductInfo } = useProductInfoActionContext();

  const {
    id,
    name,
    content,
    price,
    categoryResponse: { id: categoryId, name: categoryName },
  } = product;

  const handleDetailModalOpen = () => {
    setCurrentProductInfo({ name, content, price, categoryId });
    onOpen();
  };

  return (
    <>
      <tr className={tr} onClick={handleDetailModalOpen}>
        <td className={td['right']}>{id}</td>
        <td className={td['left']}>{name}</td>
        <td className={td['left']}>{content}</td>
        <td className={td['right']}>{formatCurrency(price)}</td>
        <td className={td['left']}>{categoryName}</td>
      </tr>
      {isOpen && <ProductDetailModal onClose={onClose} />}
    </>
  );
};

export default ProductRow;
