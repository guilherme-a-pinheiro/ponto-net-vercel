import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#919191',
  padding: '64px 0px',
  display: 'flex',
})

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  margin: '0px 60px',
  backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'space-between'
})

export const Left = styled('div', {
  width: '460px',
  height: '100%',
  backgroundColor: 'red'
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
  height: '85px',
  backgroundColor: 'orange',
  display: 'flex',
  borderBottom: '1px solid #CECECE'
})

export const ImgItem = styled('div', {
  height: '28px',
  width: '28px',
  backgroundColor: 'blue',
})

export const ContainerItem = styled('div', {
  height: '100%',
  width: '28px',
  backgroundColor: 'green',
  display: 'flex'
})