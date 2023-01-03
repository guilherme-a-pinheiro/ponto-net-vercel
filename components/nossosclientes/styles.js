import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#fff',
  padding: '64px 0px',
  display: 'flex'
})

export const Content = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#fff',
  margin: '0px 60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center', 
  h4: {
    fontSize: '40px',
    fontWeight: '700',
    margin: '0'
  },
  p: {
    fontSize: '16px'
  }
})

export const Clientes = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '#919191',
  marginTop: '32px',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
})

export const Cliente = styled('div', {
  width: '225px',
  height: '224px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})