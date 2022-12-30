import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Qualidades() {
  return (
    <>
    <S.Main>
      <S.Itens>
        <S.Item>
          <div>Imagem</div>
          <h4>Estabilidade</h4>
          <p>Sem quedas ou atrasos para você assistir seus vídeos sem preocupações</p>
        </S.Item>
        <S.Item>
          <div>Imagem</div>
          <h4>Disponibilidade</h4>
          <p>Alta performance para usar o Wi-Fi em seus dispositivos</p>
        </S.Item>
        <S.Item>
          <div>Imagem</div>
          <h4>Performance</h4>
          <p>Mantenha seus sistemas funcionando, sem variações</p>
        </S.Item>
        <S.Item>
          <div>Imagem</div>
          <h4>Qualidade</h4>
          <p>Acesse a internet de vários pontos da sua casa com estabilidade</p>
        </S.Item>
      </S.Itens>
    </S.Main>
    </>
  )
}