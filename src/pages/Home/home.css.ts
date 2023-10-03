import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: 1200,
  margin: '0 auto',
});

export const title = style({
  height: 60,
  lineHeight: '60px',
  fontSize: 28,
  fontWeight: 700,
});

export const searchSection = style([
  container,
  {
    padding: '0 20px',
    marginTop: 20,
  },
]);

export const titleWrapper = style([
  container,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: '0 20px',
  },
]);

export const addButton = style({
  width: 150,
  height: 45,
  lineHeight: '36px',
  fontSize: 16,
  border: '1px solid #ccc',
  borderRadius: 8,
});

export const tableWrapper = style([
  container,
  {
    width: '100%',
    padding: '0 20px',
  },
]);

export const paginationWrapper = style([
  container,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
  },
]);
