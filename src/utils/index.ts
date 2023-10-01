const intl = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
});

export const formatCurrency = (price: number) => intl.format(price);
