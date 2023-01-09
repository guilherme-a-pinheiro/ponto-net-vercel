import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  padding: '64px 0px',
  color: 'rgba(0, 0, 0, 0.87)'
})

export const Content = styled('div', {
  width: '1200px',
  margin: '0px auto', 
  p: {
    fontSize: '16px'
  }
})

export const h4Content = styled('h4', {
  fontSize: '40px',
  fontWeight: '700',
  margin: '20px 0px 0px',
  textAlign: 'center'
})

export const PContent = styled('p', {
  fontSize: '16px',
  textAlign: 'center'
})

export const Clientes = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '32px'
})

export const Cliente = styled('div', {
  width: 'calc(20% - 16px)',
  margin: '8px',
  border: '1px solid #919191',
  height: '224px'
})