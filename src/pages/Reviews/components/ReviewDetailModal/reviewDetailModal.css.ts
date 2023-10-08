import { style } from '@vanilla-extract/css';

export const section = style({
  position: 'relative',
  height: '100%',
  padding: 30,
});

export const title = style({
  height: 40,
  fontSize: 24,
  fontWeight: 700,
});

export const reviewUserName = style({
  marginLeft: 10,
  fontWeight: 500,
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 180,
  margin: '20px 0',
});

export const reviewImage = style({
  objectFit: 'cover',
});

export const noImageText = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#eee',
});

export const contentTitle = style({
  fontSize: 18,
  fontWeight: 600,
  height: 30,
});

export const reviewContent = style({
  lineHeight: 1.8,
  whiteSpace: 'pre-wrap',
});

export const deleteButton = style({
  position: 'absolute',
  bottom: 30,
  left: '50%',
  width: 'calc(100% - 60px)',
  height: 45,
  padding: 10,
  border: '1px solid #ccc',
  borderRadius: 4,
  backgroundColor: '#fff',
  transform: 'translateX(-50%)',
});
