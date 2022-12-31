import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: 'red',
  padding: '64px 0px',
  display: 'flex'
})

export const Content = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: 'blue',
  margin: '0px 60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
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
  width: '224px',
  height: '224px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})