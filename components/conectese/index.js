import React from 'react'
import * as S from './styles'

export default function Conectese() {
  return (
    <>
      <S.Conecte>
        <S.Main>
        <S.Content>
            <S.H2Content>Conecte-se com a gente!</S.H2Content>
          <S.Form>
            <form action="">
              <S.CampoForms>
                  <S.LabelForm htmlFor="">Nome*</S.LabelForm>
                  <S.InputForm type="text" name="" id="" placeholder="Nome" />
              </S.CampoForms>
              <S.CampoForms>
                <S.LabelForm htmlFor="">Telefone*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="Telefone" />
              </S.CampoForms>
              <S.CampoForms>
                <S.LabelForm htmlFor="">E-mail*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="E-mail" />
              </S.CampoForms>
              <S.CampoForms>
                <S.LabelForm htmlFor="">Endereço*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="Endereço" />
              </S.CampoForms>
              <S.CampoFormsEndereco>
                <S.CampoForms>
                <S.LabelForm htmlFor="">Endereço*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="Endereço" />
                </S.CampoForms>
                <S.EspacoForms />
                <S.CampoForms>
                <S.LabelForm htmlFor="">Endereço*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="Endereço" />
                </S.CampoForms>
              </S.CampoFormsEndereco>
              <S.CampoForms>
                <S.LabelForm htmlFor="">Assunto*</S.LabelForm>
                <S.InputForm type="text" name="" id="" placeholder="Assunto" />
              </S.CampoForms>
              <S.ButtonForms type="submit">Enviar</S.ButtonForms>
            </form>
          </S.Form>
        </S.Content>
        </S.Main>
      </S.Conecte>
    </>
  )
}