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
