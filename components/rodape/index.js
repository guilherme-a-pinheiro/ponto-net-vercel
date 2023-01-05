import React from 'react'
import * as S from './styles'

export default function Rodape() {
  return (
    <>
      <S.Main>
        <S.Container>
          <S.Content>
            <S.SocialMedia>
              <h1>Lorem</h1>
              <S.SocialMediaIcons>
                <p>Social Media Icons</p>
              </S.SocialMediaIcons>
              <p>Nos acompanhe nas redes sociais</p>
            </S.SocialMedia>
            <S.Links>
              <h5>Links 01</h5>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </S.Links>
            <S.Links>
              <h5>Links 02</h5>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </S.Links>
            <S.QrCode>
              <S.GetIt>
                <p>Get it on PlayStore</p>
                <p>Get it on AppleStore</p>
              </S.GetIt>
              <S.Scanner>
                <S.Download>Baixe nosso app</S.Download>
                Scanner qrcode
              </S.Scanner>
            </S.QrCode>
          </S.Content>
          <p>Pontonet Telecom LTDA © 2022 - Todos os direitos reservados -  CNPJ - 09.203.689/0001-26</p>
        </S.Container>
      </S.Main>
    </>
  )
}