import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Contato() {
  return (
    <>
    <S.Main>
      <S.Content>
        <S.Left>
          <S.PontoNet>PONTONET TELECOM</S.PontoNet>
          <h2>Conectamos Pessoas</h2>
          <p>Estamos em busca constante por evolução e aproximar você de quem e o que quiser é nosso principal objetivo. A pontonet tem o compromisso com a qualidade de seus serviços. Referência em fibra óptica, oferece a melhor internet, sem te deixar em apuros.</p>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.EmailItem>E-mail</S.EmailItem>
                <div>contato@pontonettelecom.com.br</div>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.EmailItem>Telefone</S.EmailItem>
                <div>44.3013.550</div>
              </div>
          </S.Item>
          <S.Item>
            <S.ContainerItem>
              <S.ImgItem />
            </S.ContainerItem>
              <div>
                <S.EmailItem>Endereço</S.EmailItem>
                <div>Rua Arlindo Marquezini, 358 sala B CEP: 87023-180</div>
              </div>
          </S.Item>
        </S.Left>
        <S.Right>
          <h1>Imagem</h1>
        </S.Right>
      </S.Content>
    </S.Main>
    </>
  )
}