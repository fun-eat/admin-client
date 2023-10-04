import { style } from '@vanilla-extract/css';

export const formContainer = style({
  position: 'relative',
  height: '100%',
  padding: 30,
});

export const submitButton = style({
  selectors: {
    [`${formContainer} &`]: {
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
