import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 100,
});

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: 480,
  height: 600,
  backgroundColor: '#fff',
  transform: 'translate(-50%, -50%)',
  zIndex: 101,
});
