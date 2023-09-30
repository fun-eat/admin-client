import { style } from '@vanilla-extract/css';

export const form = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  height: '100%',
  padding: 30,
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const formSection = style({
  selectors: {
    [`${label} &`]: {
      padding: 10,
      border: '1px solid #ccc',
      borderRadius: 4,
    },
  },
});

export const textarea = style([
  formSection,
  {
    selectors: {
      [`${label} &`]: {
        resize: 'vertical',
      },
    },
  },
]);

export const submitButton = style({
  selectors: {
    [`${form} &`]: {
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
    },
  },

  ':disabled': {
    cursor: 'not-allowed',
  },
});
