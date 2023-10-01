export interface Column {
  id: number;
  name: string;
  align?: 'left' | 'center' | 'right';
}

export const PRODUCT_COLUMNS_WIDTH = [15, 25, 30, 15, 15];

export const PRODUCT_COLUMNS: Column[] = [
  { id: 1, name: '아이디', align: 'right' },
  { id: 2, name: '상품명' },
  { id: 3, name: '내용' },
  { id: 4, name: '가격', align: 'right' },
  { id: 5, name: '카테고리' },
];
