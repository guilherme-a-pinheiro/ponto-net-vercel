import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'green',
  display: 'flex',
  padding: '64px 0px',
})

export const Content = styled('div', {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
    padding: '0px 100px', 
    h2: {
    margin: '8px 0px 20px 0px'
    }
})

export const DivPlanos = styled('div', {
})

export const Options = styled('div', {
})

export const ButtonOptions = styled('div', {
  width: '100%',
  height: '45px',
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  button: {
    width: '360px',
    height: '100%'
  }
})

export const PlansOptions = styled('div', {
  width: '100%',
  height: '427px',
  backgroundColor: 'green',
  padding: '16px 0px',
  display: 'flex'
})

export const ProductOption = styled('div', {
 width: '100%',
 height: '100%',
 backgroundColor: 'pink',
 padding: '0px 18px',
 display: 'flex',
 justifyContent: 'space-between'
})

export const Product = styled('div', {
 width: '300px',
 height: '363px',
 backgroundColor: '#fff',
 padding: '32px',
 textAlign: 'center'
})

export const ProductHeader = styled('div', {
 
})

export const ProductContent = styled('div', {
 width: '100%',
 height: '58px',
 padding: '16px 0px'
})