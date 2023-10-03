import { style } from '@vanilla-extract/css';

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  padding: '0 20px',
});

export const title = style({
  fontSize: 24,
  fontWeight: 700,
});

export const addButton = style({
  width: 120,
  height: 36,
  lineHeight: '36px',
  fontSize: 14,
  border: '1px solid #ccc',
  borderRadius: 4,
});

export const searchSection = style({
  padding: '0 20px',
  marginTop: 20,
});

export const searchForm = style({
  display: 'flex',
  gap: 10,
  padding: '20px 0',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
});

export const tableWrapper = style({
  width: '100%',
  marginTop: 60,
  padding: '0 20px',
});

export const paginationWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  marginTop: 20,
});
