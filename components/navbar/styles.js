import { styled } from '@stitches/react';

export const Navbar = styled('div', {
  width: '100%',
  height: '72px',
  backgroundColor: '#002646',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
})

export const Container = styled('div', {
  width: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ul: {
    li: {
      display: 'inline-block',
      '&:last-child': {
        a: {
          background: '#fff',
          borderRadius: '4px',
          color: '#002646',
          textDecoration: 'none',
        },
        height: '35px',
        background: '#fff',
        borderRadius: '4px',
      },
      a: {
        padding: '8px 16px',
        display: 'block',
        cursor: 'pointer',
        borderRadius: '4px',
        color: '#fff',
        textDecoration: 'none'
      },
    },
  },
})

export const Logo = styled('div', {
  width: '143px',
  height: '35px',
  '@bp2': {
    img: {
      width: '116px',
    },
  },
})