import dayjs from 'dayjs';

const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);

export const convertToDate = (date: string) =>
  dayjs(date).format('YYYY.MM.DD HH:mm:ss');

export const convertToQueryString = (queryKey: string, value: unknown) =>
  value !== null && value !== undefined ? `${queryKey}=${value}` : '';
