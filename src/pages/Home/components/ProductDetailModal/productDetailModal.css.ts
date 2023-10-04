import { style } from '@vanilla-extract/css';

export const formContainer = style({
  position: 'relative',
  height: '100%',
  padding: 30,
});

export const buttonWrapper = style({
  position: 'absolute',
  bottom: 30,
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
  width: 'calc(100% - 60px)',
  transform: 'translateX(-50%)',
});

export const button = style({
  width: 120,
  height: 36,
  lineHeight: '36px',
  fontSize: 14,
  border: '1px solid #ccc',
  borderRadius: 4,
});

export const editButton = style([button, { marginLeft: 'auto' }]);
