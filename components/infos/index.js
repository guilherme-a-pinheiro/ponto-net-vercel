import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Infos() {
  return (
    <>
      <S.Main>
        <S.Content>
          <S.Left>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ullam, dolorum tempore libero dicta autem?</p>
          </S.Left>
          <S.Right>
            <h1>Imagem</h1>
          </S.Right>
        </S.Content>
      </S.Main>
    </>
  )
}