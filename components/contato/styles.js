import { styled } from '@stitches/react';

export const Contatos = styled('div', {
})

export const Main = styled('div', {
  width: '100%',
  padding: '64px 0px',
  backgroundColor: '#e2f2ff',
  color: 'rgba(0, 0, 0, 0.87)'
})

export const Content = styled('div', {
  width: '1200px',
  margin: '0px auto'
})

export const MainContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const Left = styled('div', {
  width: '460px',
})

export const PontoNet = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: '#004682'
})

export const h2Left = styled('h2', {
  fontSize: '40px',
  margin: '16px 0px',
  padding: '0px'
})


export const Item = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '16px 0px',
  borderBottom: '1px solid #CECECE',
})

export const ContainerItem = styled('div', {
  height: '28px',
  borderRadius: '4px',
  backgroundColor: '#004682',
  marginRight: '24px',
  padding: '0px 4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ItemContentDestaque = styled('div', {
  fontSize: '24px',
  fontWeight: '700',
})

export const ItemContent = styled('div', {
  fontSize: '16px',
  fontWeight: '400',
  marginTop: '4px'
})

export const Right = styled('div', {
})

export const ContentRight = styled('div', {
  width: '534px',
  height: '534px',
  backgroundColor: 'rgb(143, 200, 241)',
  borderRadius: '8px',
  position: 'relative',
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    color: 'transparent',
    borderRadius: '8px',
    objectFit: 'cover'
  }
})