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
          <S.Descricao>
            <div>
              <div>
                <span>Nome</span>
                <span>Descrição</span>
              </div>
              <div>
                <span>300</span>
                <span>MEGA</span>
              </div>
              <ul>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
              </ul>
              <button>Assinar</button>
            </div>
          </S.Descricao>
          <S.Descricao>
            <div>
              <div>
                <span>Nome</span>
                <span>Descrição</span>
              </div>
              <div>
                <span>300</span>
                <span>MEGA</span>
              </div>
              <ul>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
              </ul>
              <button>Assinar</button>
            </div>
          </S.Descricao>
          <S.Descricao>
            <div>
              <div>
                <span>Nome</span>
                <span>Descrição</span>
              </div>
              <div>
                <span>300</span>
                <span>MEGA</span>
              </div>
              <ul>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
              </ul>
              <button>Assinar</button>
            </div>
          </S.Descricao>
          <S.Descricao>
            <div>
              <div>
                <span>Nome</span>
                <span>Descrição</span>
              </div>
              <div>
                <span>300</span>
                <span>MEGA</span>
              </div>
              <ul>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
                <li>Descrição item</li>
              </ul>
              <button>Assinar</button>
            </div>
          </S.Descricao>
        </main>
      </S.Content>
    </S.Mainplanos>
  )
}