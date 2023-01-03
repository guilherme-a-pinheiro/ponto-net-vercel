import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: 'red',
  padding: '64px 0px',
  display: 'flex'
})

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: 'blue',
  display: 'block',
})

export const Form = styled('div', {
  width: '648px',
  height: '540px',
  padding: '24px',
  backgroundColor: '#fff',
  border: '4px solid rgb(41, 135, 217)',
  margin: '0px 276px',
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    button: {
      width: '78px',
      height: '35px',
      padding: '0px 15px',
      textAlign: 'center'
    }
  }
})

export const CampoForms = styled('div', {
  padding: '0px 0px 15px 0px',
  label: {
    display: 'block',
    padding: '0px 0px 10px 0px'
  },
  input: {
    width: '100%',
    height: '35px'
  }
})

export const CampoFormsEndereco = styled('div', {
  display: 'flex',
  width: '656px',
  backgroundColor: 'red',
  justifyContent: 'space-between'
})

export const CampoFormsEnderecoItem = styled('div', {
  padding: '0px 0px 15px 0px',
  label: {
    display: 'block',
    padding: '0px 0px 10px 0px'
  },
  input: {
    height: '35px',
    width: '315px'
  }
})

