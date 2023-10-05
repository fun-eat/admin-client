import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  padding: 30,
});

export const searchForm = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

export const section = style({
  marginTop: 20,
});

export const submitButton = style({
  justifySelf: 'flex-end',
  alignSelf: 'flex-end',
  width: 60,
  height: 36,
  lineHeight: '36px',
  fontSize: 14,
  border: '1px solid #ccc',
  borderRadius: 4,
});

export const paginationWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  marginTop: 16,
});

export const tableHeader = style({
  height: 45,
  lineHeight: '45px',
});

export const productSearchRow = style({
  height: 45,
  lineHeight: '45px',
});
