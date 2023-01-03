import { styled } from '@stitches/react';

export const Main = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#004682',
  padding: '62px 0px 120px 0px',
  display: 'flex',
  flexDirection: 'column',
  div: {
    h2: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '32px',
      fontWeight: '600',
      margin: '16px 0px 32px',
      padding: '0'
    }
  }
})

export const Content = styled('div', {
  width: '90%',
  height: '100%',
  backgroundColor: '#004682',
  display: 'block',
  margin: '0px 50px',
})

export const Form = styled('div', {
  width: '648px',
  height: '550px',
  padding: '24px',
  backgroundColor: '#fff',
  border: '4px solid rgb(41, 135, 217)',
  margin: '0px 250px',
  borderRadius: '10px',
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
  },
  button: {
    backgroundColor: '#004682',
    color: '#fff',
    cursor: 'pointer',
    width: '78px',
    height: '35px',
    border: 'none',
    fontSize: '15px',
    borderRadius: '4px'
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

