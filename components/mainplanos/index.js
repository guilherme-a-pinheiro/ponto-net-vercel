import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Mainplanos() {
  return (
    <S.Planos>
      <S.Main>
        <S.Content>
          <S.DivPlanos>PLANOS</S.DivPlanos>
          <S.PlanosText>Internet com o melhor custo benefício da região</S.PlanosText>
          <S.Options>
            <S.ButtonOptions>
              <S.Button>Pessoa Física</S.Button>
              <S.Button>Empresarial</S.Button>
              <S.Button>Pessoa Jurídica</S.Button>
            </S.ButtonOptions>
            <S.PlansOptions>
              <S.ProductOption>
                <S.ProductSpacing>
                  <S.Product>
                    <S.ProductHeader>
                      500 Mega
                      <span>500 Mega de Download / 500 Mega de Upload</span>
                    </S.ProductHeader>
                    <S.ProductContent>
                      500
                      <span>MEGA</span>
                    </S.ProductContent>
                    <ul>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                    </ul>
                    <S.ButtonProduct>Assinar</S.ButtonProduct>
                  </S.Product>
                </S.ProductSpacing>
                <S.ProductSpacing>
                  <S.Product>
                    <S.ProductHeader>
                      <div>700 Mega</div>
                      <span>700 Mega de Download / 700 Mega de Upload</span>
                    </S.ProductHeader>
                    <S.ProductContent>
                      700
                      <span>MEGA</span>
                    </S.ProductContent>
                    <ul>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                    </ul>
                    <S.ButtonProduct>Assinar</S.ButtonProduct>
                  </S.Product>
                </S.ProductSpacing>
                <S.ProductSpacing>
                  <S.Product>
                    <S.ProductHeader>
                      <div>900 Mega</div>
                      <span>900 Mega de Download / 900 Mega de Upload</span>
                    </S.ProductHeader>
                    <S.ProductContent>
                      900
                      <span>MEGA</span>
                    </S.ProductContent>
                    <ul>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                      <li>Descrição item</li>
                    </ul>
                    <S.ButtonProduct>Assinar</S.ButtonProduct>
                  </S.Product>
                </S.ProductSpacing>
              </S.ProductOption>
            </S.PlansOptions>
          </S.Options>
        </S.Content>
      </S.Main>
    </S.Planos>
  )
}