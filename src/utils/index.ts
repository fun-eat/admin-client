import { Product } from '../apis/product';

const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);

export const getLastProductId = (products: Product[]) =>
  products[products.length - 1].id;
