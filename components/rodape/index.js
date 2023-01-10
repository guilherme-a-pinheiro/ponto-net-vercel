import React from 'react'
import * as S from './styles'

export default function Rodape() {
  return (
    <>
      <S.Rodape>
        <S.Main>
          <S.Content>
            <S.ContainerSocialMedia>
              <img src="images/pontonet-footer.svg" alt="" />
              <S.ContainerSocialMediaIcons>
                <a href="https://www.instagram.com/oficialpontonettelecom/">
                  <S.Icons>
                    <img src="images/instagram.svg" alt="instagram" />
                  </S.Icons>
                </a>
                <a href="https://www.facebook.com/oficialpontonettelecom/">
                  <S.Icons>
                    <img src="images/facebook.svg" alt="facebook" />
                  </S.Icons>
                </a>
                <a href="https://www.google.com.br">
                  <S.Icons>
                    <img src="images/linkedin.svg" alt="linkedin" />
                  </S.Icons>
                </a>
              </S.ContainerSocialMediaIcons>
              <div>Nos acompanhe nas redes sociais</div>
            </S.ContainerSocialMedia>
            <S.ContainerLinks>
              <h5>Links 01</h5>
              <ul>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
              </ul>
            </S.ContainerLinks>
            <S.ContainerLinks>
              <h5>Links 02</h5>
              <ul>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
                <li><a href="https://www.google.com.br">Link</a></li>
              </ul>
            </S.ContainerLinks>
            <S.ContainerApp>
              <S.ContainerAppContent>
                <S.GetIt>
                  <a target="_blank" rel="noreferrer">
                    <S.GetItPlayStore>
                      <img src="images/google-play.svg" alt="Baixar Play Store" />
                    </S.GetItPlayStore>
                  </a>
                  <a target="_blank" rel="noreferrer">
                    <S.GetItPlayStore>
                      <img src="images/apple-store.svg" alt="Baixar App Store" />
                    </S.GetItPlayStore>
                  </a>
                </S.GetIt>
                <S.DownloadContent>
                  <S.Download>Baixe nosso App</S.Download>
                  <img src="images/qrcode.jpg" alt="Baixar QrCode" />
                </S.DownloadContent>
              </S.ContainerAppContent>
            </S.ContainerApp>
          </S.Content>
          <S.Copyright>Pontonet Telecom LTDA © 2022 - Todos os direitos reservados -  CNPJ - 09.203.689/0001-26</S.Copyright>
        </S.Main>
      </S.Rodape>
    </>
  )
}