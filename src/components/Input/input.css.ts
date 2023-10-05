import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const input = style({
  height: 40,
  padding: '0 16px',
  lineHeight: '40px',
  border: '1px solid #ccc',
  borderRadius: 4,
});
