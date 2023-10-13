export const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL
  : '/api/admin';

export const API_SERVICE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_SERVICE_URL
  : '/api';

export const ROUTE = {
  HOME: '/',
  PRODUCT: '/products',
  REVIEW: '/reviews',
  BANNER: '/banners',
};

export const ROUTES = [
  { path: ROUTE.PRODUCT, name: '상품' },
  { path: ROUTE.REVIEW, name: '리뷰' },
  { path: ROUTE.BANNER, name: '배너' },
];

export interface Column {
  id: number;
  name: string;
  align?: 'left' | 'center' | 'right';
}

export const PRODUCT_COLUMNS_WIDTH = [10, 25, 35, 15, 15];

export const PRODUCT_COLUMNS: Column[] = [
  { id: 1, name: '아이디', align: 'right' },
  { id: 2, name: '상품명' },
  { id: 3, name: '내용' },
  { id: 4, name: '가격', align: 'right' },
  { id: 5, name: '카테고리' },
];

export const REVIEW_COLUMNS_WIDTH = [10, 15, 30, 20, 25];

export const REVIEW_COLUMNS: Column[] = [
  { id: 1, name: '아이디', align: 'right' },
  { id: 2, name: '작성자' },
  { id: 3, name: '내용' },
  { id: 4, name: '상품명' },
  { id: 5, name: '작성 날짜' },
];

export const PRODUCT_SEARCH_COLUMNS_WIDTH = [10, 40];

export const PRODUCT_SEARCH_COLUMNS: Column[] = [
  { id: 1, name: '아이디', align: 'right' },
  { id: 2, name: '상품명' },
];

export const BANNER_COLUMNS_WIDTH = [10, 40, 40, 10];

export const BANNER_COLUMNS: Column[] = [
  { id: 1, name: '아이디', align: 'right' },
  { id: 2, name: '이미지', align: 'center' },
  { id: 3, name: '링크' },
  { id: 4, name: '', align: 'center' },
];
