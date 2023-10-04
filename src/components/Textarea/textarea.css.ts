import { style } from '@vanilla-extract/css';

export const textareaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const textarea = style({
  padding: 10,
  border: '1px solid #ccc',
  borderRadius: 4,
});
