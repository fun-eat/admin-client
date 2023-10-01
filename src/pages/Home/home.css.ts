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

export const tableWrapper = style({
  width: '100%',
  marginTop: 20,
  padding: '0 20px',
});
