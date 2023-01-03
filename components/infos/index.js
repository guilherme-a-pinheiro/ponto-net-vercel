import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Infos() {
  return (
    <>
      <S.Main>
        <S.Content>
          <S.Left>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere ipsam blanditiis, accusamus odio nam possimus.</p>
          </S.Left>
          <S.Right>
            <h1>Imagem</h1>
          </S.Right>
        </S.Content>
      </S.Main>
    </>
  )
}