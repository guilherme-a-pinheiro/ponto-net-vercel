import { styled } from '@stitches/react';

export const Main = styled('div', {
  all: 'unset',
  width: '100%',
  height: 'auto',
  color: '#fff',
  display: 'block',
  background: 'linear-gradient(rgb(0, 70, 130) 0% ,rgb(0, 178, 228) 100%)'
})

export const Content = styled('div', {
  width: '1200px',
  height: '660px',
  margin: '0px auto',
  outline: 'none',
  img: {
    color: 'transparent',
    maxWidth: '100%',
    height: 'auto',
    margin: '0px auto',
    display: 'block',
    float: 'left'
  }
})