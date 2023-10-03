import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const input = style({
  padding: 10,
  border: '1px solid #ccc',
  borderRadius: 4,
});
