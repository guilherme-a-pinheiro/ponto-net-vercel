import { styled } from '@stitches/react';

export const Info = styled('div', {

})

export const Main = styled('div', {
    width: '100%',
    backgroundColor: '#fff',
    padding: '64px 0px',
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
  display: 'flex',
  alignItems: 'center'
})

export const H2Left = styled('h2', {
  fontSize: '40px',
  margin: '0',
  padding: '0px'
})

export const Right = styled('div', {
  width: '534px',
  height: '421px',
  justifyContent: 'center',
  textAlign: 'center',
  img: {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important'
  }
})

