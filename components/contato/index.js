import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Contato() {
  return (
    <>
    <S.Main>
      <S.Content>
        <S.Left>
          <div>PONTONET TELECOM</div>
          <h2>Conectamos Pessoas</h2>
          <p>Estamos em busca constante por evolução e aproximar você de quem e o que quiser é nosso principal objetivo. A pontonet tem o compromisso com a qualidade de seus serviços. Referência em fibra óptica, oferece a melhor internet, sem te deixar em apuros.</p>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <div>E-mail</div>
                <div>contato@pontonettelecom.com.br</div>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <div>Telefone</div>
                <div>44.3013.550</div>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <div>Endereço</div>
                <div>Rua Arlindo Marquezini, 358 sala B CEP: 87023-180</div>
              </div>
          </S.Item>
        </S.Left>
        <S.Right />
      </S.Content>
    </S.Main>
    </>
  )
}