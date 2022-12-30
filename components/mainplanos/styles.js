import { styled } from '@stitches/react';

export const Mainplanos = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '#004682',
  padding: '64px 0px',
    main: {
      Descricao: {
        display: 'flex'
      }
    }
})

export const Content = styled('div', {
  width: '1200px',
  margin: '0px auto',
  height: '100%',
  backgroundColor: 'red',
  h2: {
    width: '550px',
    padding: '0px',
    margin: '8px 0px 20px',
    fontSize: '40px',
    fontWeight: 'bold'
  },
  main: {
    div: {
      display: 'flex',
      button: {
        borderBottom: '1px solid rgb(20, 104, 177)',
        width: '100%',
        color: '#fff',
        fontWeight: 600,
        height: '45px',
        backgroundColor: 'inherit'
      }
    }
  }
})

export const Planos = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: '#30D2FF',
  fontFamily: 'Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
})

export const Catalogo = styled('div', {
  height: '347px',
  borderRadius: '4px',
})

export const Item = styled('div', {
  height: '347px',
  width: '220px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 30px'
})