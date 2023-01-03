import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#E2F2FF',
  padding: '64px 0px',
  display: 'flex',
})

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  margin: '0px 60px',
  backgroundColor: '#E2F2FF',
  display: 'flex',
  justifyContent: 'space-between'
})

export const Left = styled('div', {
  width: '435px',
  height: '100%',
  backgroundColor: '#E2F2FF',
  h2: {
    fontSize: '40px',
    margin: '16px 0px',
    padding: '0'
  }
})

export const Right = styled('div', {
  width: '460px',
  height: '100%',
  backgroundColor: 'red',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center'
})

export const Item = styled('div', {
  width: '100%',
  height: '70px',
  backgroundColor: '#E2F2FF',
  display: 'flex',
  borderBottom: '1px solid #CECECE',
  margin: '10px 0px'
})

export const ImgItem = styled('div', {
  height: '28px',
  width: '28px',
  backgroundColor: 'blue',
})

export const ContainerItem = styled('div', {
  height: '100%',
  width: '28px',
  backgroundColor: '#E2F2FF',
  display: 'flex',
  margin: '0px 24px 0px 0px'
})

export const EmailItem = styled('div', {
  fontSize: '24px',
  fontWeight: '700',
  color: '#000'
})

export const PontoNet = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: '#004682'
})