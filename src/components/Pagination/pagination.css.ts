import { style } from '@vanilla-extract/css';

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 40,
  height: '100%',
});

export const arrowButton = style({
  width: 36,
  height: 36,
  lineHeight: '36px',
  fontSize: 14,
  border: '1px solid #ccc',
  borderRadius: 4,

  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const pageText = style({
  width: 60,
  textAlign: 'center',
});
