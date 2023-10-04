import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  lineHeight: 1,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  userSelect: 'none',
});

globalStyle('input', {
  border: 0,
  backgroundColor: 'transparent',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('ul, ol, li', {
  listStyle: 'none',
});
