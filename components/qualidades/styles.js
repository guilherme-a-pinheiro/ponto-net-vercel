import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  padding: '64px 0px',
  backgroundColor: '#E2F2FF',
  color: 'rgba(0, 0, 0, 0.87)'
})

export const Itens = styled('div', {
  width: '1200px',
  margin: '0px auto',
  display: 'flex'
})

export const Item = styled('div', {
  width: '300px'
})

export const ItemMain = styled('div', {
  width: '100%',
  display: 'inline-block',
  padding: '0px 8px'
})

export const ItemContent = styled('div', {
  height: '252px',
  padding: '24px',
  margin: '0px',
  background: '#fff',
  color: 'rgba(0, 0, 0, 0.87)',
  borderRadius: '8px'
})

export const ImgContent = styled('div', {
  width: '78px',
  height: '78px',
  backgroundColor: '#004682',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})