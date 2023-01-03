import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '90vw',
  height: '85vh',
  backgroundColor: '#fff',
  display: 'flex',
  padding: '64px 0px',
})

export const Content = styled('div', {
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 0px 0px 80px'
})

export const Left = styled('div', {
  width: '460px',
  height: '236px',
  backgroundColor: '#fff',
  justifyContent: 'center',
  h2: {
    fontSize: '40px', 
    fontWeight: '700'
  }
})

export const Right = styled('div', {
  width: '534px',
  height: '417px',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'red'
})

