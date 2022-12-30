import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100vw',
  height: '85vh',
  backgroundColor: '#919191',
  display: 'flex',
  padding: '64px 0px',
})

export const Content = styled('div', {
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
})

export const Left = styled('div', {
  width: '460px',
  height: '236px',
  backgroundColor: 'red',
  justifyContent: 'center'
})

export const Right = styled('div', {
  width: '460px',
  height: '236px',
  justifyContent: 'center',
  textAlign: 'center'
})

