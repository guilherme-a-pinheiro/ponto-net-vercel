import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '30vh',
  backgroundColor: 'red',
  padding: '62px 0px',
})

export const Itens = styled('div', {
  width: '100%',
  backgroundColor: 'blue',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
})

export const Item = styled('div', {
  height: '74%',
  width: '204px',
  backgroundColor: '#fff',
  borderRadius:'4px',
  padding: '24px',
})