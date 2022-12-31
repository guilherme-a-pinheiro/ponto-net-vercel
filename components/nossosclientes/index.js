import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function NossosClientes() {
  return (
    <>
    <S.Main>
      <S.Content>
        <h4>Nossos clientes</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <S.Clientes>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
          <S.Cliente><h1>Imagem</h1></S.Cliente>
        </S.Clientes>
      </S.Content>
    </S.Main>
    </>
  )
}