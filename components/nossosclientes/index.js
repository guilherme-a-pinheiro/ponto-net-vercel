import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function NossosClientes() {
  return (
    <>
    <S.Main>
      <S.Content>
        <S.h4Content>Nossos clientes</S.h4Content>
        <S.PContent>Lorem ipsum dolor sit amet consectetur.</S.PContent>
        <S.Clientes>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
          <S.Cliente></S.Cliente>
        </S.Clientes>
      </S.Content>
    </S.Main>
    </>
  )
}