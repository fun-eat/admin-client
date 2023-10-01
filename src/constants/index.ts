export const CATEGORIES = [
  { id: 1, name: '간편식사' },
  { id: 3, name: '과자류' },
  { id: 4, name: '아이스크림' },
  { id: 5, name: '식품' },
  { id: 6, name: '음료' },
  { id: 7, name: 'CU' },
  { id: 8, name: 'GS25' },
  { id: 9, name: '이마트24' },
  { id: 10, name: '세븐일레븐' },
];

export interface Column {
  id: number;
  name: string;
  align?: 'left' | 'center' | 'right';
}

export const PRODUCT_COLUMNS_WIDTH = [15, 15, 25, 15, 15, 15];

export const PRODUCT_COLUMNS: Column[] = [
  { id: 1, name: '아이디' },
  { id: 2, name: '상품명' },
  { id: 3, name: '내용' },
  { id: 4, name: '가격' },
  { id: 5, name: '카테고리' },
  { id: 6, name: '상세보기', align: 'center' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: '포카칩',
    content: '포카칩 60g',
    price: 1500,
    category: '과자류',
  },
];
