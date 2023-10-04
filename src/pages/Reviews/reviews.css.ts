import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: 1200,
  margin: '0 auto',
});

export const title = style({
  height: 60,
  padding: '0 20px',
  lineHeight: '60px',
  fontSize: 28,
  fontWeight: 700,
});

export const section = style([
  container,
  {
    padding: '0 20px',
    marginTop: 20,
  },
]);

export const tableTitle = style({
  height: 60,
  lineHeight: '60px',
  fontSize: 18,
  fontWeight: 500,
});
