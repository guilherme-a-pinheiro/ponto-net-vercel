import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Mainplanos() {
  return (
  <S.Main>
    <S.Content>
      <S.DivPlanos>PLANOS</S.DivPlanos>
      <h2>Internet com o melhor custo benefício da região</h2>
      <S.Options>
      <S.ButtonOptions>
        <button>Pessoa Física</button>
        <button>Empresarial</button>
        <button>Pessoa Jurídica</button>
      </S.ButtonOptions>
      <S.PlansOptions>
        <S.ProductOption>
          <S.Product>
            <S.ProductHeader>
              <div>500 mega</div>
              <span>500 Mega de Download / 500 Mega de Upload</span>
            </S.ProductHeader>
            <S.ProductContent>
              500
              <span>Mega</span>
            </S.ProductContent>
            <ul>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
            </ul>
            <button>Assinar</button>
          </S.Product>
          <S.Product>
            <S.ProductHeader>
              <div>500 mega</div>
              <span>500 Mega de Download / 500 Mega de Upload</span>
            </S.ProductHeader>
            <S.ProductContent>
              500
              <span>Mega</span>
            </S.ProductContent>
            <ul>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
            </ul>
            <button>Assinar</button>
          </S.Product>
          <S.Product>
            <S.ProductHeader>
              <div>500 mega</div>
              <span>500 Mega de Download / 500 Mega de Upload</span>
            </S.ProductHeader>
            <S.ProductContent>
              500
              <span>Mega</span>
            </S.ProductContent>
            <ul>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
              <li>Descrição item</li>
            </ul>
            <button>Assinar</button>
          </S.Product>
        </S.ProductOption>
      </S.PlansOptions>
      </S.Options>
    </S.Content>
  </S.Main>
  )
}