import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '1264px',
  height: '100vh',
  backgroundColor: 'rgb(0, 70, 130)',
  display: 'flex',
  padding: '64px 0px',
})

export const Content = styled('div', {
    width: '1000px',
    height: '100%',
    backgroundColor: 'rgb(0, 70, 130)',
    padding: '0px 100px', 
    h2: {
    margin: '8px 0px 20px 0px',
    width: '500px',
    padding: '0px',
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#fff'
    }
})

export const DivPlanos = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: 'rgb(48, 210, 255)'
})

export const Options = styled('div', {
})

export const ButtonOptions = styled('div', {
  width: '1100px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgb(20, 104, 177)',
  
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 70, 130)',
    color: '#fff',
    fontWeight: '600',
    fontSize: '15px',
    border: 'none'
  }
})

export const PlansOptions = styled('div', {
  width: '1100px',
  height: '427px',
  backgroundColor: 'rgb(0, 70, 130)',
  padding: '16px 0px',
  display: 'flex'
})

export const ProductOption = styled('div', {
 width: '100%',
 height: '100%',
 backgroundColor: 'rgb(0, 70, 130)',
 padding: '0px 18px',
 display: 'flex',
 justifyContent: 'space-between'
})

export const Product = styled('div', {
 width: '280px',
 height: '363px',
 backgroundColor: '#fff',
 padding: '32px',
 textAlign: 'center',
 borderRadius: '10px',
 ul: {
  listStyle: 'none',
  padding: '0px',
  li: {
    padding: '8px 0px'
  }
 },
 button: {
  height: '35px',
  width: '85px',
  padding: '0px 15px',
  textAlign: 'center',
  border: 'none',
  backgroundColor: 'rgb(0, 70, 130)', 
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '15px'
 }
})

export const ProductHeader = styled('div', {
 div: {
  fontSize: '20px',
  fontWeight: 'bold'
 }
})

export const ProductContent = styled('div', {
 width: '100%',
 height: '58px',
 padding: '16px 0px',
  fontSize: '48px',
  fontWeight: '700',
  span: {
    fontSize: '24px',
    fontWeight: '500'
  }
})