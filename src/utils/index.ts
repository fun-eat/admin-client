import dayjs from 'dayjs';
import { Product } from '../apis/product';

const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);

export const getLastProductId = (products: Product[]) =>
  products[products.length - 1].id;

export const convertToDate = (date: string) =>
  dayjs(date).format('YYYY.MM.DD HH:mm:ss');

export const convertToQueryString = (queryKey: string, value: unknown) =>
  value ? `${queryKey}=${value}` : '';
