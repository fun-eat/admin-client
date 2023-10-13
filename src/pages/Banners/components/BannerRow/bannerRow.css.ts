import { style } from '@vanilla-extract/css';

export const bannerImage = style({
  width: '100%',
  height: 'auto',
});

export const bannerLink = style({
  textDecoration: 'underline',
});

export const deleteButton = style({
  width: 60,
  height: 45,
  lineHeight: '45px',
  fontSize: 16,
  border: '1px solid #ccc',
  borderRadius: 8,
});
