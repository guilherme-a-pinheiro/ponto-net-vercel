import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Mainplanos() {
  return (
    <S.Mainplanos>
      <S.Content>
        <S.Planos>PLANOS</S.Planos>
        <h2>Internet com o melhor custo benefício da região</h2>
        <main>
          <div>
            <button>Pessoa Física</button>
            <button>Empresarial</button>
            <button>Pessoa Jurídica</button>
          </div>
          <S.Catalogo>
            <S.Item>
              <h1>Oi</h1>
              <h2>Teste</h2>
            </S.Item>
            <S.Item>
              <h1>Oi</h1>
              <h2>Teste</h2>
            </S.Item><S.Item>
              <h1>Oi</h1>
              <h2>Teste</h2>
            </S.Item><S.Item>
              <h1>Oi</h1>
              <h2>Teste</h2>
            </S.Item>
          </S.Catalogo>
        </main>
      </S.Content>
    </S.Mainplanos>
  )
}