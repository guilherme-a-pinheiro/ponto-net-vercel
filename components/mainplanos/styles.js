import { styled } from '@stitches/react';

export const Planos = styled('div', {
})

export const Main = styled('div', {
  width: '100%',
  padding: '64px 0px',
  backgroundColor: 'rgb(0, 70, 130)',
  color: '#fff'
})

export const Content = styled('div', {
    width: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgb(0, 70, 130)',
    padding: '0px 100px', 
})

export const PlanosText = styled('h2', {
  width: '550px',
  padding: '0px',
  margin: '8px 0px 20px',
  fontSize: '40px',
  fontWeight: 'bold'
})

export const DivPlanos = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: 'rgb(48, 210, 255)'
})

export const Options = styled('div', {
  width: '100%'
})

export const ButtonOptions = styled('div', {
  display: 'flex',
  borderBottom: '1px solid rgb(20, 104, 177)',
  cursor: 'pointer'
})

export const Button = styled('button', {
  width: '100%',
  fontFamily: 'inherit',
  height: '45px',
  backgroundColor: 'rgb(0, 70, 130)',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  fontSize: '15px',
  color: '#fff',
  padding: '0px 20px',
  overflow: 'hidden',
  justifyContent: 'center'
})

export const PlansOptions = styled('div', {
  padding: '16px 0px',
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
})

export const ProductOption = styled('div', {
 width: '100%',
 display: 'flex',
})

export const ProductSpacing = styled('div', {
  padding: '0px 8px'
 })

export const Product = styled('div', {
 padding: '32px',
 color: 'rgba(0, 0, 0, 0.87)',
 textAlign: 'center',
 backgroundColor: '#fff',
 borderRadius: '10px',
 ul: {
  listStyle: 'none',
  padding: '0px',
  li: {
    padding: '8px 0px'
  }
 }
})

export const ButtonProduct = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(0, 70, 130)',
  color: '#fff',
  border: 'none',
  fontSize: '15px',
  fontWeight: '500',
  height: '32px',
  cursor: 'pointer',
  borderRadius: '4px',
  padding: '0px 15px'
})

export const ProductHeader = styled('div', {
  fontSize: '20px',
  fontWeight: 'bold',
  span: {
    display: 'block',
    fontSize: '16px',
    fontWeight: '400'
  }
})

export const ProductContent = styled('div', {
 padding: '16px 0px',
 fontSize: '48px',
 fontWeight: 'bold',
  span: {
    fontSize: '24px',
    fontWeight: '500'
  }
})