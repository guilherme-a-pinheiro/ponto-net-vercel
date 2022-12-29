import { styled } from '@stitches/react';

export const Navbar = styled('div', {
  width: '100%',
  height: '72px',
  backgroundColor: '#002646',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  '@bp1': {
    fontSize: '13px',
    padding: '0 16px',
  },
})