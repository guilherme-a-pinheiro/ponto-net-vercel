import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Contato() {
  return (
    <>
    <S.Contato>
      <S.Main>
      <S.Content>
        <S.MainContent>
        <S.Left>
          <S.PontoNet>PONTONET TELECOM</S.PontoNet>
          <S.h2Left>Conectamos Pessoas</S.h2Left>
          <p>Estamos em busca constante por evolução e aproximar você de quem e o que quiser é nosso principal objetivo. A pontonet tem o compromisso com a qualidade de seus serviços. Referência em fibra óptica, oferece a melhor internet, sem te deixar em apuros.</p>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.ItemContentDestaque>E-mail</S.ItemContentDestaque>
                <S.ItemContent>contato@pontonettelecom.com.br</S.ItemContent>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.ItemContentDestaque>Telefone</S.ItemContentDestaque>
                <S.ItemContent>44.3013.550</S.ItemContent>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.ItemContentDestaque>Endereço</S.ItemContentDestaque>
                <S.ItemContent>Rua Arlindo Marquezini, 358 sala B CEP: 87023-180</S.ItemContent>
              </div>
          </S.Item>
        </S.Left>
        <S.Right>
          <S.ContentRight>
          </S.ContentRight>
        </S.Right>
        </S.MainContent>
        </S.Content>
      </S.Main>
    </S.Contato>
    </>
  )
}