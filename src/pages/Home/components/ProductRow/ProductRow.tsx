import { ProductResponse } from '../../../../apis/product';
import { td } from '../../../../components/Table/table.css';
import { formatCurrency } from '../../../../utils';

interface ProductRowProps {
  product: ProductResponse;
}

const ProductRow = ({ product }: ProductRowProps) => {
  const {
    id,
    name,
    content,
    price,
    category: { name: categoryName },
  } = product;

  return (
    <tr>
      <td className={td['left']}>{id}</td>
      <td className={td['left']}>{name}</td>
      <td className={td['left']}>{content}</td>
      <td className={td['left']}>{formatCurrency(price)}</td>
      <td className={td['left']}>{categoryName}</td>
      <td className={td['center']}>
        <button type='button'>상세</button>
      </td>
    </tr>
  );
};

export default ProductRow;
