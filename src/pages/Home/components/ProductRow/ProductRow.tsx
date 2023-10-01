import { ProductResponse } from '../../../../apis/product';
import ProductDetail from '../../../../components/Modal/ProductDetail';
import { td } from '../../../../components/Table/table.css';
import { useDisclosure } from '../../../../hooks';
import { formatCurrency } from '../../../../utils';

import { tr } from './productRow.css';

interface ProductRowProps {
  product: ProductResponse;
}

const ProductRow = ({ product }: ProductRowProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    id,
    name,
    content,
    price,
    category: { name: categoryName },
  } = product;

  return (
    <>
      <tr className={tr} onClick={onOpen}>
        <td className={td['right']}>{id}</td>
        <td className={td['left']}>{name}</td>
        <td className={td['left']}>{content}</td>
        <td className={td['right']}>{formatCurrency(price)}</td>
        <td className={td['left']}>{categoryName}</td>
      </tr>
      {isOpen && <ProductDetail product={product} onClose={onClose} />}
    </>
  );
};

export default ProductRow;
