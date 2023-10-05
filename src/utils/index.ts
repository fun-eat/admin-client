import dayjs from 'dayjs';

const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);

export const convertToDate = (date: Date | string) =>
  dayjs(date).format('YYYY.MM.DD HH:mm:ss');

export const convertToDateWithoutTime = (date: Date | string) =>
  dayjs(date).format('YYYY.MM.DD');

export const convertToQueryString = (queryKey: string, value: unknown) =>
  value !== null && value !== undefined && value !== ''
    ? `${queryKey}=${value}`
    : '';
