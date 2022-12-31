import React from 'react'
import * as S from './styles'

export default function Conectese() {
  return (
    <>
    <S.Main>
      <S.Content>
        <div>
          <h2>Conecte-se com a gente!</h2>
        </div>
        <S.Form>
          <form action="">
            <S.CampoForms>
              <div>
                <label htmlFor="">Nome*</label>
                <input type="text" name="" id="" placeholder="Nome"/>
              </div>
            </S.CampoForms>
            <S.CampoForms>
              <label htmlFor="">Telefone*</label>
              <input type="text" name="" id="" placeholder="Telefone"/>
            </S.CampoForms>
            <S.CampoForms>
              <label htmlFor="">E-mail*</label>
              <input type="text" name="" id="" placeholder="E-mail"/>
            </S.CampoForms>
            <S.CampoForms>
              <label htmlFor="">Endereço*</label>
              <input type="text" name="" id="" placeholder="Endereço"/>
            </S.CampoForms>
            <S.CampoFormsEndereco>
              <label htmlFor="">Número*</label>
              <input type="text" name="" id="" placeholder="Número"/>
            </S.CampoFormsEndereco>
            <S.CampoFormsEndereco>
              <label htmlFor="">CEP*</label>
              <input type="text" name="" id="" placeholder="CEP"/>
            </S.CampoFormsEndereco>
            <S.CampoForms>
              <label htmlFor="">Assunto*</label>
              <input type="text" name="" id="" placeholder="Assunto"/>
            </S.CampoForms>
            <button type="submit">Enviar</button>
          </form>
        </S.Form>
      </S.Content>
    </S.Main>
    </>
  )
}