import { style } from '@vanilla-extract/css';

export const textareaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const textarea = style({
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: 4,
  resize: 'vertical',
});
