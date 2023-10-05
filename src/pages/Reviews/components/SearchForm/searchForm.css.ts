import { style } from '@vanilla-extract/css';

export const searchForm = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  width: '100%',
  padding: '30px 0',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  overflowX: 'auto',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const dateButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const text = style({
  display: 'block',
  width: 180,
  height: 40,
  lineHeight: '40px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: 4,
});

export const productNameText = style([
  text,
  {
    padding: '0 16px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);

export const submitButton = style({
  justifySelf: 'flex-end',
  alignSelf: 'flex-end',
  width: 120,
  height: 36,
  lineHeight: '36px',
  fontSize: 14,
  border: '1px solid #ccc',
  borderRadius: 4,
});
