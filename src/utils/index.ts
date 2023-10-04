import dayjs from 'dayjs';

const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);

export const getLastId = <D extends { id: number | null }>(data: D[]) =>
  data[data.length - 1].id;

export const convertToDate = (date: string) =>
  dayjs(date).format('YYYY.MM.DD HH:mm:ss');

export const convertToQueryString = (queryKey: string, value: unknown) =>
  value ? `${queryKey}=${value}` : '';
