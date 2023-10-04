import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
});

export const routeList = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const routeItem = style({
  height: 60,
  lineHeight: '60px',
});

export const routeLink = style({
  display: 'block',
  width: '100%',
  height: '100%',
  fontSize: 18,
  fontWeight: 400,
  padding: '0 20px',
});

export const routeActive = style({
  fontWeight: 500,
  backgroundColor: '#D8EAFF',
});
