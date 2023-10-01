import { style, styleVariants } from '@vanilla-extract/css';

export const table = style({
  width: '100%',
  tableLayout: 'fixed',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
});

export const tableCell = style({
  position: 'relative',
  height: 50,
  padding: '0 16px',
  fontWeight: 400,
  textAlign: 'left',
  borderBottom: '1px solid #ccc',
});

export const ellipsis = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const tableBorder = style({
  selectors: {
    '&::after': {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 1,
      height: 22,
      content: '',
      background: '#ccc',
      transform: 'translateY(-50%)',
    },

    '&:last-of-type::after': {
      display: 'none',
    },
  },
});

export const th = styleVariants({
  left: [tableCell, tableBorder, { textAlign: 'left' }],
  center: [tableCell, tableBorder, { textAlign: 'center' }],
  right: [tableCell, tableBorder, { textAlign: 'right' }],
});

export const td = styleVariants({
  left: [tableCell, ellipsis, { textAlign: 'left' }],
  center: [tableCell, ellipsis, { textAlign: 'center' }],
  right: [tableCell, ellipsis, { textAlign: 'right' }],
});
