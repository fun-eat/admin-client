import cx from 'classnames';

import { Product } from '../../../../apis/product';
import { td } from '../../../../components/Table/table.css';

import { productSearchRow } from './productSearchModal.css';

interface ProductSearchRowProps {
  product: Product;
  applyProduct: (product: { id: number; name: string }) => void;
  onClose: () => void;
}

const ProductSearchRow = ({
  product,
  applyProduct,
  onClose,
}: ProductSearchRowProps) => {
  const { id, name } = product;

  const handleRowClick = () => {
    applyProduct({ id, name });
    onClose();
  };

  return (
    <tr onClick={handleRowClick}>
      <td className={cx(td['right'], productSearchRow)}>{id}</td>
      <td className={cx(td['left'], productSearchRow)}>{name}</td>
    </tr>
  );
};

export default ProductSearchRow;
