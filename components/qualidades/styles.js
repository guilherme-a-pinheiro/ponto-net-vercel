import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '40vh',
  backgroundColor: '#E2F2FF',
  padding: '62px 0px',
})

export const Itens = styled('div', {
  width: '100%',
  backgroundColor: '#E2F2FF',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
})

export const Item = styled('div', {
  height: '80%',
  width: '220px',
  backgroundColor: '#fff',
  borderRadius:'4px',
  padding: '24px',
  h4: {
    fontSize: '20px',
    fontWeight: '600'
  }
})