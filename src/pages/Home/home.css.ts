import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  paddingBottom: '5%',
});

export const title = style({
  height: 60,
  lineHeight: '60px',
  fontSize: 28,
  fontWeight: 600,
  fontStyle: 'italic',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: 300,
  marginTop: 20,
});

export const submitButton = style({
  marginTop: 20,
  height: 45,
  lineHeight: '45px',
  fontSize: 16,
  borderRadius: 4,
  backgroundColor: '#D8EAFF',
});
