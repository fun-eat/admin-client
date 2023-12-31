import { style } from '@vanilla-extract/css';

export const aside = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  padding: '20px 0',
  minWidth: 240,
  borderRight: '1px solid #ddd',
});

export const main = style({
  minHeight: '100vh',
  padding: '20px 0',
  marginLeft: 240,
});
